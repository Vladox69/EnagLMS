import { enagApi } from "@/apis";
import {
  ActivityModel,
  InscriptionModel,
  ModuleModel,
  SectionModel,
  StudentModel,
  SubmissionModel,
  TeacherModel,
  UserModel,
} from "@/models";
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
import SearchIcon from "@mui/icons-material/Search";
import React, { useEffect, useState } from "react";
import {
  StudentModule,
  StudentModuleActivitySubmission,
  StudentModuleSections,
} from "@/interface/models_combine";
import { gradeByModuleNoAPI } from "@/utils/grades/gradeByModuleNoAPI";
import autoTable from "jspdf-autotable";
import jsPDF from "jspdf";
import { utils, WorkSheet, writeFile } from "xlsx";
import Link from "next/link";

export default function ReportGrades() {
  const checkGrade = (grade: any) => {
    return grade === undefined || isNaN(grade) || grade == -1 ? "N/A" : grade;
  };
  
  const getStudentName = (student: any) => {
    try {
      const user=users.find((usr)=>usr.id==student.user_id)
      return user === undefined ? "N/A" : user.names;
    } catch (error) {
      return "N/A"
    }
  };
  
  const getStudentLasName = (student: any) => {
    try {
      const user=users.find((usr)=>usr.id==student.user_id)
      return user === undefined ? "N/A" : user.last_names;
    } catch (error) {
      return "N/A"
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
  
  const getSectionName = (section: any) => {
    return section == undefined ? "N/A" : section.title;
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
  
  const checkDate = (date: string) => {
    try {
      const fechaReferencia = new Date("2000-08-18T00:00:00.000z");
      const fechaObj = new Date(date);
      if (fechaObj.getTime() === fechaReferencia.getTime()) {
        return "Sin entrega";
      } else {
        const fechaFormateada = fechaObj.toISOString().slice(0, 10);
        return fechaFormateada;
      }
    } catch (error) {
      return "Sin entrega";
    }
    };

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
      renderCell:(params)=>{
        return(
          <div>
                <Link
          href={`/teacher/module/section/activity/${params.row.activity.id}`}
          passHref
          target="_blank"
          className="text-decoration-none"
        >
          {params.row.activity.title}
        </Link>
          </div>
        )
      }
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
  const apiRef = useGridApiRef();
  //Datagrid
  const [columns, setColumns] = useState<GridColDef[]>(columnModule);
  const [rows, setRows] = useState<any[]>([]);
  //Data loaded
  const [isLoaded, setIsLoaded] = useState(false);
  //Select
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  //selects
  const [selectedModule, setSelectedModule] = useState<number>(0);
  const [selectedActivity, setSelectedActivity] = useState<number>(0);
  //Data
  const [inscriptions, setInscriptions] = useState<InscriptionModel[]>([]);
  const [students, setStudents] = useState<StudentModel[]>([]);
  const [modules, setModules] = useState<ModuleModel[]>([]);
  const [sections, setSections] = useState<SectionModel[]>([]);
  const [activities, setActivities] = useState<ActivityModel[]>([]);
  const [submissions, setSubmissions] = useState<SubmissionModel[]>([]);
  const [users, setUsers] = useState<UserModel[]>([])

  //Auxiliar data
  const [auxActivities, setAuxActivities] = useState<ActivityModel[]>([]);
  //combine data
  const [moduleStudent, setModuleStudent] = useState<StudentModule[]>([]);
  const [studentModuleSections, setStudentModuleSections] = useState<
    StudentModuleSections[]
  >([]);
  const [studentModuleActivitySubmission, setStudentModuleActivitySubmission] =
    useState<StudentModuleActivitySubmission[]>([]);
  const getData = async () => {
    try {
      const { data: p } = await enagApi.get(`/auth/profile`);
      const {data:usr}=await enagApi.get<UserModel[]>(`/users/user_rol=STUDENT`)
      setUsers(usr)
      const { data: t } = await enagApi.get<TeacherModel>(
        `/teachers/user_id=${p.user_id}`
      );
      const { data: sts } = await enagApi.get<StudentModel[]>(`/students`);
      setStudents(sts);
      const { data: insc } = await enagApi.get<InscriptionModel[]>(
        `/inscriptions`
      );
      setInscriptions(insc);
      const { data: moduls } = await enagApi.get<ModuleModel[]>(
        `/modules/teacher_id=${t.id}`
      );
      setModules(moduls);
      const { data: secs } = await enagApi.get<SectionModel[]>(`/sections`);
      setSections(secs);
      const { data: acts } = await enagApi.get<ActivityModel[]>(`/activities`);
      setAuxActivities(acts);
      const { data: sbs } = await enagApi.get<SubmissionModel[]>(
        `/submissions`
      );
      setSubmissions(sbs);
      
      setIsLoaded(true);
    } catch (error) {}
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (isLoaded) {
      buildData();
    }
  }, [isLoaded]);

  const buildData = async () => {
    let studentsModules: StudentModule[] = [];
    inscriptions.map((inscription) => {
      const mdls = modules.filter(
        (mdl) => mdl.course_id == inscription.course_id
      );
      const student = students.find((st) => st.id == inscription.student_id);
      if (student != undefined) {
        const studentsModulesTemp: StudentModule[] = mdls.map((module) => ({
          module,
          student,
        }));
        studentsModules = [...studentsModules, ...studentsModulesTemp];
      }
    });
    setModuleStudent(studentsModules);
    let studentModulesActivitiesSubmissionsTemp: StudentModuleActivitySubmission[] =
      [];
    submissions.map((sbm) => {
      const student = students.find((st) => st.id == sbm.student_id);
      const activity = auxActivities.find((act) => act.id == sbm.activity_id);
      const section = sections.find((sec) => sec.id == activity?.section_id);
      const modul = modules.find((md) => md.id == section?.module_id);
      if (student != undefined && activity != undefined && modul != undefined) {
        const studentModuleActivitySubmissionTemp: StudentModuleActivitySubmission =
          {
            activity,
            module: modul,
            student,
            submission: sbm,
          };
        studentModulesActivitiesSubmissionsTemp = [
          ...studentModulesActivitiesSubmissionsTemp,
          studentModuleActivitySubmissionTemp,
        ];
      }
    });
    setStudentModuleActivitySubmission(studentModulesActivitiesSubmissionsTemp);
  };

  const handleChangeModule = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    try {
      const moduleId = Number(event.target.value);
      setSelectedModule(moduleId);

      // Reset sections and activities when module changes
      setActivities([]);
      setSelectedActivity(0);

      if (moduleId !== 0) {
        const { data: acts } = await enagApi.get<ActivityModel[]>(
          `/activities/module_id=${moduleId}`
        );
        setActivities(acts);
      } else {
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

  const gradesByModule = async () => {
    setColumns(columnModule);
    let auxStudentModule: StudentModule[] = [];
    let studentModulePromise: any[] = [];
    let rowsIndex: any[] = [];
    if (selectedModule == -1) {
      auxStudentModule = moduleStudent;
    } else if (selectedModule > 0) {
      auxStudentModule = moduleStudent.filter(
        (mdl) => mdl.module.id == selectedModule
      );
    }

    auxStudentModule.map((stmdl) => {
      const gradeModuleTemp = gradeByModuleNoAPI(
        sections,
        stmdl.module,
        stmdl.student,
        auxActivities,
        submissions
      );
      studentModulePromise = [...studentModulePromise, gradeModuleTemp];
    });

    rowsIndex = studentModulePromise.map((data, index) => ({
      ...data,
      id: index + 1,
    }));
    setRows(rowsIndex);
  };

  const gradeByActivity = async () => {
    setColumns(columnActivity);
    let studentModuleActivitySubmissionTemp: StudentModuleActivitySubmission[] =
      [];
    let rowsIndex: any[] = [];
    if (selectedModule > 0 && selectedActivity == -1) {
      studentModuleActivitySubmissionTemp =
        studentModuleActivitySubmission.filter(
          (stmdacsb) => stmdacsb.module.id == selectedModule
        );
    } else if (selectedModule > 0 && selectedActivity > 0) {
      studentModuleActivitySubmissionTemp =
        studentModuleActivitySubmission.filter(
          (stmdacsb) => stmdacsb.activity.id == selectedActivity
        );
    }
    rowsIndex = studentModuleActivitySubmissionTemp.map((data, index) => ({
      ...data,
      id: index + 1,
    }));
    setRows(rowsIndex);
  };

  const searchData = async () => {
    if (selectedModule == -1 && selectedActivity == 0) {
      gradesByModule();
    } else if (selectedModule > 0 && selectedActivity == 0) {
      gradesByModule();
    } else if (selectedModule > 0 && selectedActivity == -1) {
      gradeByActivity();
    } else if (selectedModule > 0 && selectedActivity > 0) {
      gradeByActivity();
    }
  };

  const exportPDF = () => {
    const doc = new jsPDF({
      orientation: "landscape",
    });
    let title = "";
    const modl = modules.find((md) => md.id == selectedModule);
    let ast;
    const date = new Date().toLocaleDateString();
    let head: any = [];
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.text("Registro de calificaciones", 14, 15);
    doc.text(`Módulo:`, 14, 20);
    if (selectedModule == -1 && selectedActivity == 0) {
      doc.setFont("helvetica", "normal");
      doc.text(`Todos`, 34, 20);
      title = `Todos-los-modulos`;
      doc.setFont("helvetica", "bold");
      doc.text(`Fecha:`, 14, 25);
      doc.setFont("helvetica", "normal");
      doc.text(`${date}`, 34, 25);
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
        startY: 30,
        head: [head],
        body: body,
      });
    } else if (selectedModule > 0 && selectedActivity == 0) {
      doc.setFont("helvetica", "normal");
      doc.text(`${modl?.title}`, 34, 20);
      doc.setFont("helvetica", "bold");
      doc.text(`Fecha:`, 14, 25);
      doc.setFont("helvetica", "normal");
      doc.text(`${date}`, 34, 25);
      title = `${modl?.title}`;
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
        startY: 30,
        head: [head],
        body: body,
      });
    } else if (selectedModule > 0 && selectedActivity == -1) {
      doc.setFont("helvetica", "normal");
      doc.text(`${modl?.title}`, 34, 20);
      title = `${modl?.title}`;
      doc.setFont("helvetica", "bold");
      doc.text(`Fecha:`, 14, 25);
      doc.setFont("helvetica", "normal");
      doc.text(`${date}`, 34, 25);
      doc.setFont("helvetica", "bold");
      doc.text(`Todas las actividades`, 14, 30);
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
        startY: 35,
        head: [head],
        body: body,
      });
    } else if (selectedModule > 0 && selectedActivity > 0) {
      doc.setFont("helvetica", "normal");
      doc.text(`${modl?.title}`, 34, 20);
      ast = auxActivities.find((ast) => ast.id == selectedActivity);
      title = `${modl?.title}_${date}`;
      doc.setFont("helvetica", "bold");
      doc.text(`Fecha:`, 14, 25);
      doc.setFont("helvetica", "normal");
      doc.text(`${date}`, 34, 25);
      doc.setFont("helvetica", "bold");
      doc.text(`Actividad:`, 14, 30);
      doc.setFont("helvetica", "normal");
      doc.text(`${ast?.title}`, 34, 30);
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
        startY: 35,
        head: [head],
        body: body,
      });
    }
    doc.save(`registro-de-calificaciones${title}.pdf`);
    handleClose();
  };

  const exportExcel=()=>{
    let title=""
    const modl=modules.find((md)=>md.id==selectedModule);
    let date = new Date().toLocaleDateString();
    date=date.replaceAll("/","-");
    
    if(selectedModule==-1&&selectedActivity==0){
      title=`Todos los módulos_${date}`
    }else if(selectedModule>0&&selectedActivity==0){
        title=`${modl?.title}_${date}`
    }else if(selectedModule>0&&selectedActivity==-1){
        title=`${modl?.title}_${date}`
    }else if(selectedModule>0&&selectedActivity>0){
        const ast=auxActivities.find((ast)=>ast.id==selectedActivity)
        title=`${ast?.title}_${date}`
    }
    let head:any=[]
    const asCSV=apiRef.current.getDataAsCsv()
    const rowsArray = asCSV.split(/\r?\n/);
    head = rowsArray.shift()?.split(',').map(header => header.trim())
    const body = rowsArray.map(row => row.split(',').map(cell => cell.trim()));
    const data=[head,...body]
    const ws:WorkSheet =utils.aoa_to_sheet(data)
    ws['!cols'] = head.map(() => ({ wch: 22 }));
    const wb = utils.book_new();
    utils.book_append_sheet(wb, ws, `${title}`);
    writeFile(wb, `registro-de-calificaciones${title}.xlsx`);
    handleClose()
  }

  return (
    <>
      <Typography component="p" fontSize={22} fontWeight={700} className="mb-2">
        Reportes de calificaciones
      </Typography>
      <Box display="flex" gap={2} alignItems="center">
        <TextField
          label="Módulo"
          select
          variant="outlined"
          value={selectedModule}
          onChange={handleChangeModule}
        >
          <MenuItem value={0}>No seleccionado</MenuItem>
          <MenuItem value={-1}>Todas</MenuItem>
          {modules.map((module) => (
            <MenuItem value={module.id} key={module.id}>
              {module.title}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          label="Actividades"
          select
          variant="outlined"
          value={selectedActivity}
          onChange={handleChangeActivity}
        >
          <MenuItem value={0}>No seleccionado</MenuItem>
          {selectedModule > 0 && <MenuItem value={-1}>Todas</MenuItem>}
          {activities.map((activity) => (
            <MenuItem value={activity.id} key={activity.id}>
              {activity.title}
            </MenuItem>
          ))}
        </TextField>
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
          disableRowSelectionOnClick 
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
