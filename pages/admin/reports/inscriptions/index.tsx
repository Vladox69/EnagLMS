import { enagApi } from "@/apis";
import {
  InternInscriptionUserStudent,
  StudentInscriptionCourse,
  StudentInscriptionIntern,
} from "@/interface/models_combine";
import {
  CourseModel,
  InscriptionModel,
  InternCourseModel,
  InternInscriptionModel,
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
import SearchIcon from "@mui/icons-material/Search";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { utils, WorkSheet, writeFile } from "xlsx";
import autoTable from "jspdf-autotable";
import jsPDF from "jspdf";
const transformDate = (dateString: string) => {
  return dateString.split("T")[0];
};

const getUserNames = (user: any) => {
  return user === undefined ? "N/A" : user.names;
};

const getUserLastNames = (user: any) => {
  return user === undefined ? "N/A" : user.last_names;
};

const getUserIdCard = (user: any) => {
  return user === undefined ? "N/A" : user.ID_card_url;
};

const getUserName = (user: any) => {
  return user === undefined ? "N/A" : user.username;
};

const getCourseName = (course: any) => {
  return course === undefined ? "N/A" : course.topic;
};

const getInternName = (intern: any) => {
  return intern === undefined ? "N/A" : intern.title;
};

const columnInscriptionCourse: GridColDef[] = [
  {
    field: "id",
    headerName: "ID",
    width: 50,
  },
  {
    field: "date",
    headerName: "Fecha de inscripción",
    width: 200,
    valueGetter: (value, row) => transformDate(row.inscription.date.toString()),
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
    field: "coursename",
    headerName: "Curso",
    width: 250,
    valueGetter: (value, row) => getCourseName(row.course),
  },
];

const columnInscriptionIntern: GridColDef[] = [
  {
    field: "id",
    headerName: "ID",
    width: 50,
  },
  {
    field: "date",
    headerName: "Fecha de inscripción",
    width: 200,
    valueGetter: (value, row) => transformDate(row.inscription.date.toString()),
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
    field: "coursename",
    headerName: "Pasantía",
    width: 250,
    valueGetter: (value, row) => getInternName(row.intern),
  },
];

export default function ReportInscriptions() {
  const apiRef = useGridApiRef();
  //Datagrid
  const [columns, setColumns] = useState<GridColDef[]>(columnInscriptionCourse);
  const [rows, setRows] = useState<any[]>([]);
  //Data loaded
  const [isLoaded, setIsLoaded] = useState(false);
  //Select
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  //Selects
  const [selectedCourse, setSelectedCourse] = useState<number>(0);
  const [selectedIntern, setSelectedIntern] = useState<number>(0);
  const [option, setOption] = useState<number>(0);
  //Data
  const [users, setUsers] = useState<UserModel[]>([]);
  const [courses, setCourses] = useState<CourseModel[]>([]);
  const [interns, setInterns] = useState<InternCourseModel[]>([]);
  const [students, setStudents] = useState<StudentModel[]>([]);
  const [inscriptionsCourses, setInscriptionsCourses] = useState<
    InscriptionModel[]
  >([]);
  const [inscriptionsInterns, setInscriptionsInterns] = useState<
    InternInscriptionModel[]
  >([]);
  //Data combine
  const [studentsInscriptionsCourses, setStudentsInscriptionsCourses] =
    useState<StudentInscriptionCourse[]>([]);
  const [studentsIncriptionsInterns, setStudentsIncriptionsInterns] = useState<
    StudentInscriptionIntern[]
  >([]);

  const handleChangeOption = (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const optionNumber = Number(event.target.value);
      setOption(optionNumber);
    } catch (error) {}
  };

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
    } catch (error) {
      console.error(error);
    }
  };

  const handleChangeIntern = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    try {
      const internId = Number(event.target.value);
      setSelectedIntern(internId);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    if (isLoaded) {
      buildData();
    }
  }, [isLoaded]);

  const getData = async () => {
    try {
      const { data: usr } = await enagApi.get(`/users/user_rol=STUDENT`);
      setUsers(usr);
      const { data: crs } = await enagApi.get(`/courses`);
      setCourses(crs);
      const { data: intcrs } = await enagApi.get(`/intern_course`);
      setInterns(intcrs);
      const { data: ins } = await enagApi.get(`/inscriptions`);
      setInscriptionsCourses(ins);
      const { data: intins } = await enagApi.get(`/intern_inscription`);
      setInscriptionsInterns(intins);
      const { data: sts } = await enagApi.get(`/students`);
      setStudents(sts);
      setIsLoaded(true);
    } catch (error) {
      console.log(error);
    }
  };
  const buildData = () => {
    let studentsInscriptionsCourseTemp: StudentInscriptionCourse[] = [];
    inscriptionsCourses.map((inscription) => {
      const course = courses.find((cr) => cr.id == inscription.course_id);
      const student = students.find((st) => st.id == inscription.student_id);
      const user = users.find((usr) => usr.id == student?.user_id);
      if (course != undefined && student != undefined && user != undefined) {
        const studentInscriptionCourseTemp: StudentInscriptionCourse = {
          course,
          inscription,
          student,
          user,
        };
        studentsInscriptionsCourseTemp = [
          ...studentsInscriptionsCourseTemp,
          studentInscriptionCourseTemp,
        ];
      }
    });
    setStudentsInscriptionsCourses(studentsInscriptionsCourseTemp);
    let studentsInscriptionsInternsTemp: StudentInscriptionIntern[] = [];
    inscriptionsInterns.map((inscription) => {
      const intern = interns.find((intr) => intr.id == inscription.course_id);
      const student = students.find((st) => st.id == inscription.student_id);
      const user = users.find((usr) => usr.id == student?.user_id);
      if (intern != undefined && student != undefined && user != undefined) {
        const studentInscriptionInternTemp: StudentInscriptionIntern = {
          intern,
          inscription,
          student,
          user,
        };
        studentsInscriptionsInternsTemp = [
          ...studentsInscriptionsInternsTemp,
          studentInscriptionInternTemp,
        ];
      }
    });
    setStudentsIncriptionsInterns(studentsInscriptionsInternsTemp);
  };

  const inscriptionByCourse = () => {
    setColumns(columnInscriptionCourse);
    let auxData: StudentInscriptionCourse[] = [];
    let rowsIndex: any[] = [];
    if (selectedCourse == -1) {
      auxData = studentsInscriptionsCourses;
    } else if (selectedCourse > 0) {
      auxData = studentsInscriptionsCourses.filter(
        (stintcr) => stintcr.course.id == selectedCourse
      );
    }
    rowsIndex = auxData.map((data, index) => ({
      ...data,
      id: index + 1,
    }));
    setRows(rowsIndex);
  };

  const inscriptionByIntern = () => {
    setColumns(columnInscriptionIntern);
    let auxData: InternInscriptionUserStudent[] = [];
    let rowsIndex: any[] = [];
    if (selectedIntern == -1) {
      auxData = studentsIncriptionsInterns;
    } else if (selectedIntern > 0) {
      auxData = studentsIncriptionsInterns.filter(
        (stinsint) => stinsint.intern.id == selectedIntern
      );
    }
    rowsIndex = auxData.map((data, index) => ({
      ...data,
      id: index + 1,
    }));
    setRows(rowsIndex);
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
    const newDate = new Date().toLocaleDateString();
    const date = newDate.replaceAll("/", "_");
    const data = [head, ...body];
    const ws: WorkSheet = utils.aoa_to_sheet(data);
    ws["!cols"] = head.map(() => ({ wch: 22 }));
    const wb = utils.book_new();
    utils.book_append_sheet(wb, ws, `${date}`);
    writeFile(wb, "registro-de-inscripciones.xlsx");
    handleClose();
  };
  const exportPDF = () => {
    const doc = new jsPDF({
      orientation: "landscape",
    });
    let title = "";
    let ast;
    const newDate = new Date().toLocaleDateString();
    const date = newDate.replaceAll("/", "_");
    let startY = 25;
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.text("Registro de inscripciones", 14, 15);
    doc.setFont("helvetica", "normal");
    doc.text(`Fecha: ${newDate}`, 14, 20);
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
    autoTable(doc, {
      startY: startY,
      head: [head],
      body: body,
    });
    doc.save("registro-de-inscripciones.pdf");
    handleClose();
  };
  const searchData = () => {
    if (option == 1) {
      inscriptionByCourse();
    } else if (option == 2) {
      inscriptionByIntern();
    }
  };

  return (
    <>
      <Typography component="p" fontSize={22} fontWeight={700} className="mb-2">
        {" "}
        Inscripciones{" "}
      </Typography>
      <Box display="flex" gap={2} alignItems="center">
        <TextField
          select
          variant="outlined"
          value={option}
          onChange={handleChangeOption}
          label="Opción"
        >
          <MenuItem value={0}>No seleccionado</MenuItem>
          <MenuItem value={1}>Cursos</MenuItem>
          <MenuItem value={2}>Pasantías</MenuItem>
        </TextField>

        {option == 1 && (
          <TextField
            select
            variant="outlined"
            value={selectedCourse}
            onChange={handleChangeCourse}
            label="Cursos"
          >
            <MenuItem value={0}>No seleccionado</MenuItem>
            <MenuItem value={-1}>Todas </MenuItem>
            {courses.map((course) => (
              <MenuItem value={course.id} key={course.id}>
                {course.topic}
              </MenuItem>
            ))}
          </TextField>
        )}
        {option == 2 && (
          <TextField
            select
            variant="outlined"
            value={selectedIntern}
            onChange={handleChangeIntern}
            label="Pasantías"
          >
            <MenuItem value={0}>No seleccionado</MenuItem>
            <MenuItem value={-1}>Todas </MenuItem>
            {interns.map((intern) => (
              <MenuItem value={intern.id} key={intern.id}>
                {intern.title}
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
          disableRowSelectionOnClick
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
