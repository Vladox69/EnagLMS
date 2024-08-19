import { enagApi } from "@/apis";
import {
  ActivityModel,
  CourseModel,
  InscriptionModel,
  ModuleModel,
  SectionModel,
  StudentModel,
  SubmissionModel,
  UserModel,
} from "@/models";
import SearchIcon from "@mui/icons-material/Search";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { DataGrid, GridColDef, useGridApiRef } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import {
  CourseStudentActivity,
} from "@/interface/models_combine";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import { utils, WorkSheet, writeFile } from "xlsx";
import { gradeCourseNoAPI } from "@/utils/grades/gradeCourseNoAPI";
import { gradeByModuleNoAPI } from "@/utils/grades/gradeByModuleNoAPI";

export default function ReportCourse() {
  const checkGrade = (grade: any) => {
    return grade === undefined || isNaN(grade) || grade == -1 ? "N/A" : grade;
  };

  const checkDate = (date: string) => {
    try {
      const fechaReferencia = new Date("2000-08-18T00:00:00.000z");
      const fechaObj = new Date(date);
      if (fechaObj.getTime() === fechaReferencia.getTime()) {
        return "Sin entrega";
      } else {
        const fechaFormateada = fechaObj.toISOString().slice(0, 10);
        return  fechaFormateada;
      }
    } catch (error) {
      return "Sin entrega";
    }
    };

  const getStudentName = (student: any) => {
    try {
      const user = users.find((usr) => usr.id == student.user_id);
      return student === undefined ? "N/A" : user?.names;
    } catch (error) {
      return "N/A";
    }
  };

  const getStudentLasName = (student: any) => {
    try {
      const user = users.find((usr) => usr.id == student.user_id);
      return student === undefined ? "N/A" : user?.last_names;
    } catch (error) {
      return "N/A";
    }
  };

  const getCourseName = (course: any) => {
    return course === undefined ? "N/A" : course.topic;
  };

  const getActivityName = (activity: any) => {
    return activity === undefined ? "N/A" : activity.title;
  };

  const getPonderation = (activity: any) => {
    return activity === undefined ? "N/A" : activity.ponderation;
  };

  const getGradeSubmission = (submission: any) => {
    return submission === undefined || submission.grade == -1
      ? "N/A"
      : submission.grade;
  };

  const getModuleName = (module: any) => {
    return module == undefined ? "N/A" : module.title;
  };

  const getStateGradeActivity = (submission: any) => {
    return submission == undefined ? "N/A" : submission.state_gra;
  };

  const getStateSubmissionActivity = (submission: any) => {
    return submission == undefined ? "N/A" : submission.state_sub;
  };

  const columnCourse: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      width: 50,
    },
    {
      field: "names",
      headerName: "Nombres",
      width: 200,
      valueGetter: (value, row) => getStudentName(row.student),
    },
    {
      field: "lastnames",
      headerName: "Apellidos",
      width: 200,
      valueGetter: (value, row) => getStudentLasName(row.student),
    },
    {
      field: "course",
      headerName: "Curso",
      width: 200,
      valueGetter: (value, row) => getCourseName(row.course),
    },
    {
      field: "total",
      headerName: "Calificación",
      width: 150,
      valueGetter: (params) => checkGrade(params),
    },
  ];

  const columnModule: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      width: 50,
    },
    {
      field: "names",
      headerName: "Nombres",
      width: 200,
      valueGetter: (value, row) => getStudentName(row.student),
    },
    {
      field: "lastnames",
      headerName: "Apellidos",
      width: 200,
      valueGetter: (value, row) => getStudentLasName(row.student),
    },
    {
      field: "modulename",
      headerName: "Módulo",
      width: 200,
      valueGetter: (value, row) => getModuleName(row.module),
    },
    {
      field: "total",
      headerName: "Calificación",
      width: 100,
      valueGetter: (params) => checkGrade(params),
    },
  ];

  const columnActivity: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      width: 50,
    },
    {
      field: "names",
      headerName: "Nombres",
      width: 200,
      valueGetter: (value, row) => getStudentName(row.student),
    },
    {
      field: "lastnames",
      headerName: "Apellidos",
      width: 200,
      valueGetter: (value, row) => getStudentLasName(row.student),
    },
    {
      field: "activityname",
      headerName: "Nombre de actividad",
      width: 200,
      valueGetter: (value, row) => getActivityName(row.activity),
    },
    {
      field:"date",
      headerName:"Fecha de entrega",
      width:200,
      valueGetter:(value,row)=>checkDate(row.submission.date.toString())
    },
    {
      field: "ponderation",
      headerName: "Ponderación",
      width: 100,
      valueGetter: (value, row) => getPonderation(row.activity),
    },
    {
      field: "stategrade",
      headerName: "Calificado",
      width: 150,
      valueGetter: (value, row) => getStateGradeActivity(row.submission),
    },
    {
      field: "statesubmission",
      headerName: "Entregado",
      width: 150,
      valueGetter: (value, row) => getStateSubmissionActivity(row.submission),
    },
    {
      field: "grade",
      headerName: "Calificación",
      width: 100,
      valueGetter: (value, row) => getGradeSubmission(row.submission),
    },
  ];

  const apiRef = useGridApiRef();
  //Datagrid
  const [columns, setColumns] = useState<GridColDef[]>(columnCourse);
  const [rows, setRows] = useState<any[]>([]);
  //Data loaded
  const [isLoaded, setIsLoaded] = useState(false);
  //Select
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  //Selects
  const [selectedCourse, setSelectedCourse] = useState<number>(0);
  const [selectedModule, setSelectedModule] = useState<number>(0);
  const [selectedSection, setSelectedSection] = useState<number>(0);
  const [selectedActivity, setSelectedActivity] = useState<number>(0);
  //Data
  const [students, setStudents] = useState<StudentModel[]>([]);
  const [inscriptions, setInscriptions] = useState<InscriptionModel[]>([]);
  const [courses, setCourses] = useState<CourseModel[]>([]);
  const [modules, setModules] = useState<ModuleModel[]>([]);
  const [sections, setSections] = useState<SectionModel[]>([]);
  const [activities, setActivities] = useState<ActivityModel[]>([]);
  const [users, setUsers] = useState<UserModel[]>([]);
  //Data aux
  const [auxModules, setAuxModules] = useState<ModuleModel[]>([]);
  const [auxSections, setAuxSections] = useState<SectionModel[]>([]);
  const [auxActivities, setAuxActivities] = useState<ActivityModel[]>([]);
  const [submissions, setSubmissions] = useState<SubmissionModel[]>([]);
  //Datacombine
  const [coursesStudentsActivities, setCoursesStudentsActivities] = useState<
    CourseStudentActivity[]
  >([]);
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (isLoaded) {
      buildData();
    }
  }, [isLoaded]);

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleChangeCourse = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    try {
      const courseId = Number(event.target.value);
      setSelectedCourse(courseId);

      // Reset modules, sections, and activities when course changes
      setModules([]);
      setSections([]);
      setActivities([]);
      setSelectedModule(0);
      setSelectedSection(0);
      setSelectedActivity(0);

      if (courseId !== 0) {
        const { data: mdls } = await enagApi.get<ModuleModel[]>(
          `/modules/course_id=${courseId}`
        );
        setModules(mdls);
        const { data: acts } = await enagApi.get<ActivityModel[]>(
          `/activities/course_id=${courseId}`
        );
        setActivities(acts);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleChangeModule = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    try {
      const moduleId = Number(event.target.value);
      setSelectedModule(moduleId);

      // Reset sections and activities when module changes
      setSections([]);
      setActivities([]);
      setSelectedSection(0);
      setSelectedActivity(0);

      if (moduleId !== 0) {
        const { data: scs } = await enagApi.get<SectionModel[]>(
          `/sections/module_id=${moduleId}`
        );
        setSections(scs);
        const { data: acts } = await enagApi.get<ActivityModel[]>(
          `/activities/module_id=${moduleId}`
        );
        setActivities(acts);
      } else {
        // If no module is selected, load activities for the selected course
        if (selectedCourse !== 0) {
          const { data: acts } = await enagApi.get<ActivityModel[]>(
            `/activities/course_id=${selectedCourse}`
          );
          setActivities(acts);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleChangeActivity = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    try {
      setSelectedActivity(Number(event.target.value));
    } catch (error) {
      console.error(error);
    }
  };

  const buildData = () => {
    let coursesStudentsActivities: CourseStudentActivity[] = [];
    submissions.map((submission) => {
      const student = students.find((st) => st.id == submission.student_id);
      const user = users.find((usr) => usr.id == student?.user_id);
      const activity = auxActivities.find(
        (act) => act.id == submission.activity_id
      );
      const section = auxSections.find(
        (sect) => sect.id == activity?.section_id
      );
      const modulo = auxModules.find((mdl) => mdl.id == section?.module_id);
      const course = courses.find((cr) => cr.id == modulo?.course_id);

      if (
        activity != undefined &&
        section != undefined &&
        modulo != undefined &&
        course != undefined &&
        user != undefined &&
        student != undefined
      ) {
        const findData: CourseStudentActivity = {
          activity,
          course,
          module: modulo,
          section,
          student,
          submission,
          user,
        };
        coursesStudentsActivities = [...coursesStudentsActivities, findData];
      }
    });
    setCoursesStudentsActivities(coursesStudentsActivities);
  };

  const getData = async () => {
    try {
      const { data: usr } = await enagApi.get<UserModel[]>(
        `/users/user_rol=STUDENT`
      );
      setUsers(usr);

      const { data: sts } = await enagApi.get<StudentModel[]>(`/students`);
      setStudents(sts);

      const { data: insc } = await enagApi.get<InscriptionModel[]>(
        `/inscriptions`
      );
      setInscriptions(insc);

      const { data: crs } = await enagApi.get<CourseModel[]>(`/courses`);
      setCourses(crs);

      const { data: moduls } = await enagApi.get<ModuleModel[]>(`/modules`);
      setAuxModules(moduls);

      const { data: secs } = await enagApi.get<SectionModel[]>(`/sections`);
      setAuxSections(secs);

      const { data: acts } = await enagApi.get<ActivityModel[]>(`/activities`);
      setAuxActivities(acts);

      const { data: sbs } = await enagApi.get<SubmissionModel[]>(
        `/submissions`
      );
      setSubmissions(sbs);

      setIsLoaded(true);
    } catch (error) {
      console.error(error);
    }
  };

  //Notas por curso
  const getGradesByCourse = async () => {
    setColumns(columnCourse);
    let rowsIndex: any[] = [];
    let coursesTemp: CourseStudentActivity[] = [];
    let gradesTemp: any[] = [];
    if (selectedCourse > 0 && selectedModule == 0) {
      coursesTemp = coursesStudentsActivities.filter(
        (cr) => cr.course.id == selectedCourse
      );
      coursesTemp.map((cr) => {
        const gradeTemp = gradeCourseNoAPI(
          auxSections,
          auxModules,
          cr.student,
          cr.course,
          cr.user,
          auxActivities,
          submissions
        );
        gradesTemp = [...gradesTemp, gradeTemp];
      });
    }
    rowsIndex = gradesTemp.map((data, index) => ({
      ...data,
      id: index + 1,
    }));
    setRows(rowsIndex);
  };

  //Notas por curso por modulo
  const getGradesModule = async () => {
    setColumns(columnModule);
    let rowsIndex: any[] = [];
    let coursesTemp: CourseStudentActivity[] = [];
    let gradesTemp: any[] = [];
    if (selectedCourse > 0 && selectedModule == -1) {
      coursesTemp = coursesStudentsActivities.filter(
        (cr) => cr.course.id == selectedCourse
      );
      coursesTemp.map((cr) => {
        const gradeTemp = gradeByModuleNoAPI(
          auxSections,
          cr.module,
          cr.student,
          auxActivities,
          submissions
        );
        gradesTemp = [...gradesTemp, gradeTemp];
      });
    } else if (selectedCourse > 0 && selectedModule > 0) {
      coursesTemp = coursesStudentsActivities.filter(
        (cr) => cr.module.id == selectedModule
      );
      coursesTemp.map((cr) => {
        const gradeTemp = gradeByModuleNoAPI(
          auxSections,
          cr.module,
          cr.student,
          auxActivities,
          submissions
        );
        gradesTemp = [...gradesTemp, gradeTemp];
      });
    }
    rowsIndex = gradesTemp.map((data, index) => ({
      ...data,
      id: index + 1,
    }));
    setRows(rowsIndex);
  };

  //Notas por actividad
  const getGradeActivity = async () => {
    setColumns(columnActivity);
    let rowsIndex: any[] = [];
    let coursesTemp: CourseStudentActivity[] = [];
    if (selectedCourse > 0 && selectedModule > 0 && selectedActivity == -1) {
      coursesTemp = coursesStudentsActivities.filter(
        (cr) => cr.module.id == selectedModule
      );
    } else if (
      selectedCourse > 0 &&
      selectedModule > 0 &&
      selectedActivity > 0
    ) {
      coursesTemp = coursesStudentsActivities.filter(
        (cr) => cr.activity.id == selectedActivity
      );
    }
    rowsIndex = coursesTemp.map((data, index) => ({
      ...data,
      id: index + 1,
    }));
    setRows(rowsIndex);
  };

  const searchData = async () => {
    try {
      if (selectedCourse > 0 && selectedModule == 0) {
        getGradesByCourse();
      } else if (selectedCourse > 0 && selectedModule == -1) {
        getGradesModule();
      } else if (
        selectedCourse > 0 &&
        selectedModule > 0 &&
        selectedActivity == 0
      ) {
        getGradesModule();
      } else if (
        selectedCourse > 0 &&
        selectedModule > 0 &&
        selectedActivity == -1
      ) {
        getGradeActivity();
      } else if (
        selectedCourse > 0 &&
        selectedModule > 0 &&
        selectedActivity >0
      ) {
        getGradeActivity();
      }
    } catch (error) {
      return error;
    }
  };

  const exportPDF = () => {
    const doc = new jsPDF({
      orientation: "landscape",
    });
    let head: any = [];
    const newDate = new Date().toLocaleDateString();
    const date = newDate.replaceAll("/", "_");
    let startY = 20;
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.text("Registro de calificaciones", 14, 15);
    doc.text(`Fecha: ${newDate}`, 14, 25);
    const asCSV = apiRef.current.getDataAsCsv();
    const rowsArray = asCSV.split(/\r?\n/);
    head = rowsArray
      .shift()
      ?.split(",")
      .map((header) => header.trim());
    const body = rowsArray.map((row) =>
      row.split(",").map((cell) => cell.trim())
    );
    autoTable(doc, {
      startY: 20,
      head: [head],
      body: body,
    });
    doc.save("registro-de-calificaciones.pdf");
    handleClose();
  };

  const exportExcel = () => {
    let head: any = [];
    const asCSV = apiRef.current.getDataAsCsv();
    const rowsArray = asCSV.split(/\r?\n/);
    head = rowsArray
      .shift()
      ?.split(",")
      .map((header) => header.trim());
    const body = rowsArray.map((row) =>
      row.split(",").map((cell) => cell.trim())
    );
    const data = [head, ...body];
    const ws: WorkSheet = utils.aoa_to_sheet(data);
    ws["!cols"] = head.map(() => ({ wch: 22 }));
    const wb = utils.book_new();
    utils.book_append_sheet(wb, ws, "Sheet1");
    writeFile(wb, "registro-de-calificaciones.xlsx");
    handleClose();
  };

  return (
    <>
      <Typography component="p" fontSize={22} fontWeight={700} className="mb-2">
        {" "}
        Calificaciones{" "}
      </Typography>
      <Box display="flex" gap={2} alignItems="center">
        <TextField
          select
          variant="outlined"
          value={selectedCourse}
          onChange={handleChangeCourse}
          label="Curso"
        >
          <MenuItem value={0}>No seleccionado</MenuItem>
          {courses.map((course) => (
            <MenuItem value={course.id} key={course.id}>
              {course.topic}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          label="Módulo"
          select
          variant="outlined"
          value={selectedModule}
          onChange={handleChangeModule}
        >
          <MenuItem value={0}>No seleccionado</MenuItem>
          <MenuItem value={-1}>Todas </MenuItem>
          {modules.map((module) => (
            <MenuItem value={module.id} key={module.id}>
              {module.title}
            </MenuItem>
          ))}
        </TextField>
        {selectedModule > 0 && (
          <TextField
            label="Actividades"
            select
            variant="outlined"
            value={selectedActivity}
            onChange={handleChangeActivity}
          >
            <MenuItem value={0}>No seleccionado</MenuItem>
            <MenuItem value={-1}>Todas</MenuItem>
            {activities.map((activity) => (
              <MenuItem value={activity.id} key={activity.id}>
                {activity.title}
              </MenuItem>
            ))}
          </TextField>
        )}
        <Box mb={2}>
          <Button
            variant="outlined"
            onClick={handleClick}
            color="inherit"
            className="m-0"
            startIcon={<FileDownloadIcon />}
          >
            Exportar
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={exportExcel}>Excel</MenuItem>
            <MenuItem onClick={exportPDF}>PDF</MenuItem>
          </Menu>
        </Box>
        <IconButton onClick={searchData}>
          <SearchIcon />
        </IconButton>
      </Box>
      <div className="mt-2"></div>
      <Box sx={{ height: 450, width: "100%" }}>
        <DataGrid
          apiRef={apiRef}
          rows={rows}
          columns={columns}
          // slots={{toolbar:GridToolbar}}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          pageSizeOptions={[10]}
        />
      </Box>
    </>
  );
}
