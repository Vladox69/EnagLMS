import { enagApi } from "@/apis";
import {
  StudentAsistance,
  StudentCourse,
  StudentCourseAsistance,
  StudentCourseModuleAsistance,
  StudentModuleAsistance,
} from "@/interface/models_combine";
import SearchIcon from "@mui/icons-material/Search";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import {
  AsistanceModel,
  AsistanceRegisterModel,
  CourseModel,
  InscriptionModel,
  ModuleModel,
  StudentModel,
  UserModel,
} from "@/models";
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
import { utils, WorkSheet, writeFile } from "xlsx";
import autoTable from "jspdf-autotable";
import jsPDF from "jspdf";

const getDescriptionAsistance = (asistance: any) => {
  return asistance === undefined ? "N/A" : asistance.description;
};

const getDateAsistance = (asistance: any) => {
  return asistance === undefined ? "N/A" : asistance.date.split("T")[0];
};

const getRegisterState = (register: any) => {
  return register === undefined ? "N/A" : register.status;
};

const getCourseName = (course: any) => {
  return course === undefined ? "N/A" : course.topic;
};

const getModuleName = (module: any) => {
  return module === undefined ? "N/A" : module.title;
};

const getUserNames = (user: any) => {
  return user === undefined ? "N/A" : user.names;
};

const getUserLastNames = (user: any) => {
  return user === undefined ? "N/A" : user.last_names;
};

const columnCourseAsistance: GridColDef[] = [
  {
    field: "id",
    headerName: "ID",
    width: 50,
  },
  {
    field: "names",
    headerName: "Nombres",
    width: 200,
    valueGetter: (value, row) => getUserNames(row.user),
  },
  {
    field: "lastnames",
    headerName: "Apellidos",
    width: 200,
    valueGetter: (value, row) => getUserLastNames(row.user),
  },
  {
    field: "course",
    headerName: "Curso",
    width: 200,
    valueGetter: (value, row) => getCourseName(row.course),
  },
  {
    field: "description",
    headerName: "Descripción",
    width: 200,
    valueGetter: (value, row) => getDescriptionAsistance(row.asistance),
  },
  {
    field: "date",
    headerName: "Fecha",
    width: 150,
    valueGetter: (value, row) => getDateAsistance(row.asistance),
  },
  {
    field: "status",
    headerName: "Estado",
    width: 150,
    valueGetter: (value, row) => getRegisterState(row.register),
  },
];

const columnModuleAsistance: GridColDef[] = [
  {
    field: "id",
    headerName: "ID",
    width: 50,
  },
  {
    field: "names",
    headerName: "Nombres",
    width: 200,
    valueGetter: (value, row) => getUserNames(row.user),
  },
  {
    field: "lastnames",
    headerName: "Apellidos",
    width: 200,
    valueGetter: (value, row) => getUserLastNames(row.user),
  },
  {
    field: "module",
    headerName: "Módulo",
    width: 200,
    valueGetter: (value, row) => getModuleName(row.module),
  },
  {
    field: "description",
    headerName: "Descripción",
    width: 200,
    valueGetter: (value, row) => getDescriptionAsistance(row.asistance),
  },
  {
    field: "date",
    headerName: "Fecha",
    width: 150,
    valueGetter: (value, row) => getDateAsistance(row.asistance),
  },
  {
    field: "status",
    headerName: "Estado",
    width: 150,
    valueGetter: (value, row) => getRegisterState(row.register),
  },
];

export default function ReportAsistances() {
  const apiRef = useGridApiRef();
  //Datagrid
  const [columns, setColumns] = useState<GridColDef[]>(columnCourseAsistance);
  const [rows, setRows] = useState<any[]>([]);
  //Selects
  const [selectedCourse, setSelectedCourse] = useState<number>(0);
  const [selectedModule, setSelectedModule] = useState<number>(0);
  const [selectedAsistance, setSelectedAsistance] = useState<number>(0);
  //Data loaded
  const [isLoaded, setIsLoaded] = useState(false);
  //Select
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  //Data
  const [students, setStudents] = useState<StudentModel[]>([]);
  const [inscriptions, setInscriptions] = useState<InscriptionModel[]>([]);
  const [courses, setCourses] = useState<CourseModel[]>([]);
  const [modules, setModules] = useState<ModuleModel[]>([]);
  const [asistances, setAsistances] = useState<AsistanceModel[]>([]);
  const [registersAsistances, setRegistersAsistances] = useState<
    AsistanceRegisterModel[]
  >([]);
  const [users, setUsers] = useState<UserModel[]>([]);
  //Data aux
  const [auxModules, setAuxModules] = useState<ModuleModel[]>([]);
  const [auxAsistances, setAuxAsistances] = useState<AsistanceModel[]>([]);
  const [auxRegistersAsistances, setAuxRegistersAsistances] = useState<
    AsistanceRegisterModel[]
  >([]);
  //Data combine
  const [studentCourse, setStudentCourse] = useState<StudentCourse[]>([]);
  const [studentCourseAsistance, setStudentCourseAsistance] = useState<
    StudentCourseAsistance[]
  >([]);
  const [studentModuleAsistance, setStudentModuleAsistance] = useState<
    StudentModuleAsistance[]
  >([]);
  const [studentAsistance, setStudentAsistance] = useState<StudentAsistance[]>(
    []
  );
  const [studentCourseModuleAsistance, setStudentCourseModuleAsistance] =
    useState<StudentCourseModuleAsistance[]>([]);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (isLoaded) {
      buildData();
    }
  }, [isLoaded]);

  const transformDate = (dateString: string) => {
    return dateString.split("T")[0];
  };

  const handleChangeCourse = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    try {
      const courseId = Number(event.target.value);
      setSelectedCourse(courseId);

      setModules([]);
      setAsistances([]);
      setSelectedModule(0);
      setSelectedAsistance(0);
      if (courseId !== 0) {
        const { data: mdls } = await enagApi.get<ModuleModel[]>(
          `/modules/course_id=${courseId}`
        );
        setModules(mdls);
        const { data: asts } = await enagApi.get<AsistanceModel[]>(
          `/asistances/course_id=${courseId}`
        );
        setAsistances(asts);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleChangeModule = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    try {
      const moduleId = Number(event.target.value);
      setSelectedModule(moduleId);

      setAsistances([]);
      setSelectedAsistance(0);

      if (moduleId != 0) {
        const { data: asts } = await enagApi.get<AsistanceModel[]>(
          `/asistances/module_id=${moduleId}`
        );
        setAsistances(asts);
      } else {
        if (selectedCourse != 0) {
          const { data: asts } = await enagApi.get<AsistanceModel[]>(
            `/asistances/course_id=${selectedCourse}`
          );
          setAsistances(asts);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleChangeAsistance = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    try {
      const asistanceId = Number(event.target.value);
      setSelectedAsistance(asistanceId);
    } catch (error) {
      console.log(error);
    }
  };

  const buildData = () => {
    //estudiante curso
    let studentsCourses: StudentCourse[] = [];
    inscriptions.map((inscription) => {
      const course = courses.find(
        (course) => course.id == inscription.course_id
      );
      const student = students.find(
        (student) => student.id == inscription.student_id
      );
      if (student != undefined && course != undefined) {
        const tempStudentCourse: StudentCourse = {
          course,
          student,
        };
        studentsCourses = [...studentsCourses, tempStudentCourse];
      }
    });
    setStudentCourse(studentsCourses);

    let studentsCoursesAsistancesRegisters: StudentCourseAsistance[] = [];
    auxRegistersAsistances.map((regsasis) => {
      const student = students.find((sts) => sts.id == regsasis.student_id);
      const user = users.find((usr) => usr.id == student?.user_id);
      const asistance = auxAsistances.find(
        (asts) => asts.id == regsasis.asistance_id
      );
      const modul = auxModules.find((md) => md.id == asistance?.module_id);
      const course = courses.find((crs) => crs.id == modul?.course_id);
      if (
        course != undefined &&
        student != undefined &&
        asistance != undefined &&
        user != undefined
      ) {
        const studentCourseAsistanceTemp: StudentCourseAsistance = {
          student,
          asistance,
          course,
          register: regsasis,
          user,
        };
        studentsCoursesAsistancesRegisters = [
          ...studentsCoursesAsistancesRegisters,
          studentCourseAsistanceTemp,
        ];
      }
    });
    setStudentCourseAsistance(studentsCoursesAsistancesRegisters);

    let studentsCoursesModulesAsistance: StudentCourseModuleAsistance[] = [];
    auxRegistersAsistances.map((regsasis) => {
      const student = students.find((sts) => sts.id == regsasis.student_id);
      const asistance = auxAsistances.find(
        (asts) => asts.id == regsasis.asistance_id
      );
      const modul = auxModules.find((md) => md.id == asistance?.module_id);
      const user = users.find((usr) => usr.id == student?.user_id);
      const course = courses.find((crs) => crs.id == modul?.course_id);
      if (
        course != undefined &&
        student != undefined &&
        asistance != undefined &&
        modul != undefined &&
        user != undefined
      ) {
        const studentCourseModuleAsistanceTemp: StudentCourseModuleAsistance = {
          student,
          asistance,
          course,
          register: regsasis,
          module: modul,
          user,
        };
        studentsCoursesModulesAsistance = [
          ...studentsCoursesModulesAsistance,
          studentCourseModuleAsistanceTemp,
        ];
      }
    });
    setStudentCourseModuleAsistance(studentsCoursesModulesAsistance);

    let studentsModulesAsistances: StudentModuleAsistance[] = [];
    auxRegistersAsistances.map((regsasis) => {
      const student = students.find((sts) => sts.id == regsasis.student_id);
      const asistance = auxAsistances.find(
        (asts) => asts.id == regsasis.asistance_id
      );
      const modul = auxModules.find((md) => md.id == asistance?.module_id);
      const user = users.find((usr) => usr.id == student?.user_id);
      if (
        student != undefined &&
        asistance != undefined &&
        modul != undefined &&
        user != undefined
      ) {
        const studentModuleAsistanceTemp: StudentModuleAsistance = {
          student,
          asistance,
          register: regsasis,
          module: modul,
          user,
        };
        studentsModulesAsistances = [
          ...studentsModulesAsistances,
          studentModuleAsistanceTemp,
        ];
      }
    });
    setStudentModuleAsistance(studentsModulesAsistances);

    let studentsAsistances: StudentAsistance[] = [];
    auxRegistersAsistances.map((regsasis) => {
      const student = students.find((sts) => sts.id == regsasis.student_id);
      const asistance = auxAsistances.find(
        (asts) => asts.id == regsasis.asistance_id
      );
      const user = users.find((usr) => usr.id == student?.user_id);
      if (student != undefined && asistance != undefined && user != undefined) {
        const studentAsistanceTemp: StudentAsistance = {
          student,
          asistance,
          register: regsasis,
          user,
        };
        studentsAsistances = [...studentsAsistances, studentAsistanceTemp];
      }
    });
    setStudentAsistance(studentsAsistances);
  };

  const getData = async () => {
    try {
      const { data: usrs } = await enagApi.get<UserModel[]>(`/users`);
      setUsers(usrs);

      const { data: sts } = await enagApi.get<StudentModel[]>(`/students`);
      setStudents(sts);

      const { data: insc } = await enagApi.get<InscriptionModel[]>(
        `/inscriptions`
      );
      setInscriptions(insc);

      const { data: crs } = await enagApi.get<CourseModel[]>(`/courses`);
      setCourses(crs);

      const { data: mdls } = await enagApi.get<ModuleModel[]>(`/modules`);
      setAuxModules(mdls);

      const { data: asts } = await enagApi.get<AsistanceModel[]>(`/asistances`);
      setAuxAsistances(asts);

      const { data: regs } = await enagApi.get<AsistanceRegisterModel[]>(
        `/asistances/registers`
      );
      setAuxRegistersAsistances(regs);

      setIsLoaded(true);
    } catch (error) {
      console.error(error);
    }
  };

  const exportExcel = () => {
    const newDate = new Date().toLocaleDateString();
    const date = newDate.replaceAll("/", "_");
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
    utils.book_append_sheet(wb, ws, `${date}`);
    writeFile(wb, `registro-de-asistencias${date}.xlsx`);
    handleClose();
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
    doc.text("Registro de asistencias", 14, 15);

    if (selectedCourse == -1) {
      doc.setFont("helvetica", "normal");
      doc.text(`Curso: Todos`, 14, 20);
      doc.text(`Fecha: ${newDate}`, 14, 25);
      startY=30
    } else if (selectedCourse > 0 && selectedModule == -1) {
      const crs=courses.find((cr)=>cr.id==selectedCourse)
      doc.setFont("helvetica", "normal");
      doc.text(`Curso: ${crs?.topic}`, 14, 20);
      doc.text(`Módulo: Todos`, 14, 25);
      doc.text(`Fecha: ${newDate}`, 14, 30);
      startY=35
    } else if (selectedCourse > 0 && selectedModule > 0) {
      const crs=courses.find((cr)=>cr.id==selectedCourse)
      const modl = modules.find((md) => md.id == selectedModule);
      doc.setFont("helvetica", "normal");
      doc.text(`Curso: ${crs?.topic}`, 14, 20);
      doc.text(`Módulo: ${modl?.title}`, 14, 25);
      doc.text(`Fecha: ${newDate}`, 14, 30);
      startY=35
    }
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
      startY,
      head: [head],
      body: body,
    });
    doc.save(`registro-de-asistencias${date}.pdf`);
    handleClose();
  };

  const getAsistanceByCourse = () => {
    setColumns(columnCourseAsistance);
    let auxStudentCourseAsistances: StudentCourseAsistance[] = [];
    let rowsIndex: any[] = [];
    if (selectedCourse == -1 && selectedAsistance == 0) {
      auxStudentCourseAsistances = studentCourseAsistance;
    } else if (selectedCourse == -1 && selectedAsistance == -1) {
      auxStudentCourseAsistances = studentCourseAsistance;
    } else if (selectedCourse > 0 && selectedAsistance == -1) {
      auxStudentCourseAsistances = studentCourseAsistance.filter(
        (stcras) => stcras.course.id == selectedCourse
      );
    } else if (selectedCourse > 0 && selectedAsistance == 0) {
      auxStudentCourseAsistances = studentCourseAsistance.filter(
        (stcras) => stcras.course.id == selectedCourse
      );
    } else if (selectedCourse > 0 && selectedAsistance > 0) {
      auxStudentCourseAsistances = studentCourseAsistance.filter(
        (stcras) => stcras.asistance.id == selectedAsistance
      );
    }
    rowsIndex = auxStudentCourseAsistances.map((data, index) => ({
      ...data,
      id: index + 1,
    }));
    setRows(rowsIndex);
  };

  const getAsistanceByModule = () => {
    setColumns(columnModuleAsistance);
    let auxStudentModuleAsistance: StudentModuleAsistance[] = [];
    let rowsIndex: any[] = [];

    if (selectedCourse == 0 && selectedModule == -1 && selectedAsistance == 0) {
      auxStudentModuleAsistance = studentModuleAsistance;
    } else if (
      selectedCourse == 0 &&
      selectedModule == -1 &&
      selectedAsistance == -1
    ) {
      auxStudentModuleAsistance = studentModuleAsistance;
    } else if (
      selectedCourse == -1 &&
      selectedModule == -1 &&
      selectedAsistance == 0
    ) {
      auxStudentModuleAsistance = studentModuleAsistance;
    } else if (
      selectedCourse == -1 &&
      selectedModule == -1 &&
      selectedAsistance == -1
    ) {
      auxStudentModuleAsistance = studentModuleAsistance;
    } else if (
      selectedCourse > 0 &&
      selectedModule == -1 &&
      selectedAsistance == 0
    ) {
      auxStudentModuleAsistance = studentModuleAsistance.filter(
        (stmdact) => stmdact.module.course_id == selectedCourse
      );
    } else if (
      selectedCourse > 0 &&
      selectedModule == -1 &&
      selectedAsistance == -1
    ) {
      auxStudentModuleAsistance = studentModuleAsistance.filter(
        (stmdact) => stmdact.module.course_id == selectedCourse
      );
    } else if (
      selectedCourse > 0 &&
      selectedModule > 0 &&
      selectedAsistance == -1
    ) {
      auxStudentModuleAsistance = studentModuleAsistance.filter(
        (stmdact) => stmdact.module.id == selectedModule
      );
    } else if (
      selectedCourse > 0 &&
      selectedModule > 0 &&
      selectedAsistance == 0
    ) {
      auxStudentModuleAsistance = studentModuleAsistance.filter(
        (stmdact) => stmdact.module.id == selectedModule
      );
    } else if (
      selectedCourse > 0 &&
      selectedModule > 0 &&
      selectedAsistance > 0
    ) {
      auxStudentModuleAsistance = studentModuleAsistance.filter(
        (stmdact) => stmdact.asistance.id == selectedAsistance
      );
    }

    rowsIndex = auxStudentModuleAsistance.map((data, index) => ({
      ...data,
      id: index + 1,
    }));
    setRows(rowsIndex);
  };

  const searchData = () => {
    try {
      //asistencias por curso
      if (
        selectedCourse == -1 &&
        selectedModule == 0 &&
        selectedAsistance == 0
      ) {
        console.log("1.asistencias por curso");
        getAsistanceByCourse();
        //asistencias de todos los modulos de todos los cursos
      } else if (
        selectedCourse == -1 &&
        selectedModule == -1 &&
        selectedAsistance == 0
      ) {
        console.log("2.asistencias de todos los modulos de todos los cursos");
        getAsistanceByModule();
        //asistencias de todos los cursos todos los modulos
      } else if (
        selectedCourse == -1 &&
        selectedModule == -1 &&
        selectedAsistance == -1
      ) {
        console.log("3.asistencias de todos los cursos todos los modulos");
        getAsistanceByModule();
        //asistencias de todos los cursos
      } else if (
        selectedCourse == -1 &&
        selectedModule == 0 &&
        selectedAsistance == -1
      ) {
        console.log("4.asistencias de todos los cursos");
        getAsistanceByCourse();
        //asistencias por curso
      } else if (
        selectedCourse > 0 &&
        selectedModule == 0 &&
        selectedAsistance == 0
      ) {
        console.log("5.asistencias por curso");
        getAsistanceByCourse();
        //asistencias por curso
      } else if (
        selectedCourse > 0 &&
        selectedModule == 0 &&
        selectedAsistance == -1
      ) {
        console.log("6.asistencias por curso");
        getAsistanceByCourse();
        //asistencia por curso
      } else if (
        selectedCourse > 0 &&
        selectedModule == 0 &&
        selectedAsistance > 0
      ) {
        console.log("7.asistencia por curso");
        getAsistanceByCourse();
        //asistencias por curso de todos los modulos
      } else if (
        selectedCourse > 0 &&
        selectedModule == -1 &&
        selectedAsistance == 0
      ) {
        console.log("8.asistencias por curso de todos los modulos");
        getAsistanceByModule();
        //asistencias por curso de todos los modulos
      } else if (
        selectedCourse > 0 &&
        selectedModule == -1 &&
        selectedAsistance == -1
      ) {
        console.log("9.asistencias por curso de todos los modulos");
        getAsistanceByModule();
        //asistencias por curso por modulo
      } else if (
        selectedCourse > 0 &&
        selectedModule > 0 &&
        selectedAsistance == 0
      ) {
        console.log("10.asistencias por curso por modulo");
        getAsistanceByModule();
        //asistencias por curso por modulo
      } else if (
        selectedCourse > 0 &&
        selectedModule > 0 &&
        selectedAsistance == -1
      ) {
        console.log("11.asistencias por curso por modulo");
        getAsistanceByModule();
        //asistencia por curso por modulo
      } else if (
        selectedCourse > 0 &&
        selectedModule > 0 &&
        selectedAsistance > 0
      ) {
        console.log("12.asistencia por curso por modulo");
        getAsistanceByModule();
      } else {
      }
    } catch (error) {}
  };

  return (
    <>
      <Typography component="p" fontSize={22} fontWeight={700} className="mb-2">
        {" "}
        Asistencias{" "}
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
          <MenuItem value={-1}>Todas </MenuItem>
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
        <TextField
          label="Fecha de asistencia"
          select
          variant="outlined"
          value={selectedAsistance}
          onChange={handleChangeAsistance}
        >
          <MenuItem value={0}>No seleccionado</MenuItem>
          <MenuItem value={-1}>Todas </MenuItem>
          {asistances.map((asistance) => (
            <MenuItem value={asistance.id} key={asistance.id}>
              {transformDate(asistance.date.toString())}
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
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          disableRowSelectionOnClick
          pageSizeOptions={[10]}
        />
      </Box>
    </>
  );
}
