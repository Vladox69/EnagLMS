import { enagApi } from "@/apis";
import { StudentModuleAsistance } from "@/interface/models_combine";
import {
  AsistanceModel,
  AsistanceRegisterModel,
  CourseModel,
  InscriptionModel,
  ModuleModel,
  StudentModel,
  TeacherModel,
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
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import React, { useEffect, useState } from "react";
import { utils, WorkSheet, writeFile } from "xlsx";
const getStudentName = (student: any) => {
  return student === undefined ? "N/A" : student.names;
};

const getStudentLasName = (student: any) => {
  return student === undefined ? "N/A" : student.last_names;
};

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

const columnAsistance: GridColDef[] = [
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
  const [columns, setColumns] = useState<GridColDef[]>(columnModule);
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

  //Data aux
  const [auxAsistances, setAuxAsistances] = useState<AsistanceModel[]>([]);

  //Data combine
  const [studentModuleAsistance, setStudentModuleAsistance] = useState<
    StudentModuleAsistance[]
  >([]);

  const transformDate = (dateString: string) => {
    return dateString.split("T")[0];
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
        setAsistances([]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const asistanceByModule = () => {
    setColumns(columnModule);
    let asistanceModuleTemp: StudentModuleAsistance[] = [];
    let rowsIndex: any[] = [];
    if (selectedModule == -1 && selectedAsistance == 0) {
      asistanceModuleTemp = studentModuleAsistance;
    } else if (selectedModule > 0 && selectedAsistance == 0) {
      asistanceModuleTemp = studentModuleAsistance.filter(
        (stmdas) => stmdas.module.id == selectedModule
      );
    }
    rowsIndex = asistanceModuleTemp.map((data, index) => ({
      ...data,
      id: index + 1,
    }));
    setRows(rowsIndex);
  };

  const getAsistances = () => {
    setColumns(columnAsistance);
    let asistanceModuleTemp: StudentModuleAsistance[] = [];
    let rowsIndex: any[] = [];
    if (selectedModule > 0 && selectedAsistance == -1) {
      asistanceModuleTemp = studentModuleAsistance.filter(
        (stmdas) => stmdas.module.id == selectedModule
      );
    } else if (selectedModule > 0 && selectedAsistance > 0) {
      asistanceModuleTemp = studentModuleAsistance.filter(
        (stmdas) => stmdas.asistance.id == selectedAsistance
      );
    }
    rowsIndex = asistanceModuleTemp.map((data, index) => ({
      ...data,
      id: index + 1,
    }));
    setRows(rowsIndex);
  };

  const buildData = () => {
    let studentModuleAsistancesTemp: StudentModuleAsistance[] = [];
    registersAsistances.map((rgas) => {
      const asistance = auxAsistances.find(
        (ast) => ast.id == rgas.asistance_id
      );
      const student = students.find((st) => st.id == rgas.student_id);
      const modul = modules.find((md) => md.id == asistance?.module_id);
      if (
        modul != undefined &&
        asistance != undefined &&
        student != undefined
      ) {
        const studentModuleAsistanceTemp: StudentModuleAsistance = {
          asistance,
          module: modul,
          register: rgas,
          student,
        };
        studentModuleAsistancesTemp = [
          ...studentModuleAsistancesTemp,
          studentModuleAsistanceTemp,
        ];
      }
    });
    setStudentModuleAsistance(studentModuleAsistancesTemp);
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

  const getData = async () => {
    try {
      const { data: p } = await enagApi.get(`/auth/profile`);
      const { data: t } = await enagApi.get<TeacherModel>(
        `/teachers/user_id=${p.user_id}`
      );
      const { data: sts } = await enagApi.get<StudentModel[]>(`/students`);
      setStudents(sts);

      const { data: insc } = await enagApi.get<InscriptionModel[]>(
        `/inscriptions`
      );
      setInscriptions(insc);

      const { data: crs } = await enagApi.get<CourseModel[]>(`/courses`);
      setCourses(crs);

      const { data: moduls } = await enagApi.get<ModuleModel[]>(
        `/modules/teacher_id=${t.id}`
      );
      setModules(moduls);

      const { data: asts } = await enagApi.get<AsistanceModel[]>(`/asistances`);
      setAuxAsistances(asts);

      const { data: regs } = await enagApi.get<AsistanceRegisterModel[]>(
        `/asistances/registers`
      );
      setRegistersAsistances(regs);

      setIsLoaded(true);
    } catch (error) {
      console.error(error);
    }
  };

  const searchData = () => {
    if (selectedModule == -1 && selectedAsistance == 0) {
      asistanceByModule();
    } else if (selectedModule > 0 && selectedAsistance == 0) {
      asistanceByModule();
    } else if (selectedModule > 0 && selectedAsistance == -1) {
      getAsistances();
    } else if (selectedModule > 0 && selectedAsistance > 0) {
      getAsistances();
    }
  };

  const exportPDF = () => {
    const doc = new jsPDF({
      orientation: "landscape",
    });
    let title = "";
    const modl = modules.find((md) => md.id == selectedModule);
    let ast;
    let date;
    let head: any = [];
    const newDate = new Date().toLocaleDateString();
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.text("Registro de asistencias", 14, 15);
    doc.text(`Módulo:`, 14, 20);
    doc.setFont("helvetica", "normal");
    doc.text(`${modl?.title}`, 34, 20);
    doc.setFont("helvetica", "bold");
    doc.text(`Fecha:`, 14, 25);
    doc.setFont("helvetica", "normal");
    doc.text(`${newDate}`, 34, 25);
    if (selectedModule > 0 && selectedAsistance == 0) {
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
    } else if (selectedModule > 0 && selectedAsistance == -1) {
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
    } else if (selectedModule > 0 && selectedAsistance > 0) {
      ast = auxAsistances.find((ast) => ast.id == selectedAsistance);
      date = transformDate(ast?.date.toString() || "");
      title = `${modl?.title}_${date}`;
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
    }
    doc.save(`registro-de-asistencias${title}.pdf`);
    handleClose();
  };

  const exportExcel = () => {
    let title = "";
    const modl = modules.find((md) => md.id == selectedModule);
    if (selectedModule > 0 && selectedAsistance == 0) {
      title = `${modl?.title}`;
    } else if (selectedModule > 0 && selectedAsistance > 0) {
      const ast = auxAsistances.find((ast) => ast.id == selectedAsistance);
      const date = transformDate(ast?.date.toString() || "");
      title = `${modl?.title}_${date}`;
    }
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
    utils.book_append_sheet(wb, ws, `${title}`);
    writeFile(wb, `registro-de-asistencias${title}.xlsx`);
    handleClose();
  };

  return (
    <>
      <Typography component="p" fontSize={22} fontWeight={700} className="mb-2">
        {" "}
        Reportes de asistencias{" "}
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
          {selectedModule > 0 && <MenuItem value={-1}>Todas</MenuItem>}
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
          disableRowSelectionOnClick
          columns={columns}
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
