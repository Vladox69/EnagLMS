import { enagApi } from "@/apis";
import { Layout } from "@/components/layouts";
import { CourseModel, InternCourseModel, StudentModel } from "@/models";
import React, { useEffect, useState } from "react";
import { TableAStudent } from "../../../components/admin/student/TableAStudent";
import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import SearchIcon from "@mui/icons-material/Search";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import { writeFile, utils, WorkSheet, WorkBook } from "xlsx";

const date = new Date();
const formattedDate = new Intl.DateTimeFormat("es-ES").format(date);

export default function Teachers() {
  const [students, setStudents] = useState<StudentModel[]>([]);
  const [courses, setCourses] = useState<CourseModel[]>([]);
  const [interns, setInterns] = useState<InternCourseModel[]>([]);
  const [selectedCourse, setSelectedCourse] = useState<number>(0);
  const [selectedIntern, setSelectedIntern] = useState<number>(0);
  const [type, setType] = useState<number>(0);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleChangeCourse = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedIntern(0);
    setSelectedCourse(Number(event.target.value));
  };
  const handleChangeInterCourse = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSelectedCourse(0);
    setSelectedIntern(Number(event.target.value));
  };
  const handleChangeType = (event: React.ChangeEvent<HTMLInputElement>) => {
    setType(Number(event.target.value));
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

  const getData = async () => {
    try {
      const { data: sts } = await enagApi.get<StudentModel[]>(`/students`);
      setStudents(sts);
      const { data: crs } = await enagApi.get<CourseModel[]>(`/courses`);
      setCourses(crs);
      const { data: ints } = await enagApi.get<InternCourseModel[]>(
        `/intern_course`
      );
      setInterns(ints);
    } catch (error) {}
  };
  const searchData = async () => {
    try {
      if (type == 1) {
        const { data: stds } = await enagApi.get<StudentModel[]>(
          `/students/course_id=${selectedCourse}`
        );
        setStudents(stds);
      } else if (type == 2) {
        const { data: stds } = await enagApi.get<StudentModel[]>(
          `/students/intern_id=${selectedIntern}`
        );
        setStudents(stds);
      } else {
        const { data: sts } = await enagApi.get<StudentModel[]>(`/students`);
        setStudents(sts);
      }
    } catch (error) {
      const { data: sts } = await enagApi.get<StudentModel[]>(`/students`);
      setStudents(sts);
    }
  };

  const exportExcel = async () => {
    // Definir los encabezados y el cuerpo de la tabla
    const headers = ["Id", "Nombres", "Apellidos"];
    const body = students.map((student, index) => [
      index + 1,
      student.names,
      student.last_names,
    ]);

    // Definir el título
    let title = "Registro de estudiantes";
    if (selectedCourse !== 0) {
      const course = courses.find((c) => c.id === selectedCourse);
      title = `Registro de estudiantes inscritos en ${course?.topic}`;
    } else if (selectedIntern !== 0) {
      const intern = interns.find((inter) => inter.id === selectedIntern);
      title = `Registro de estudiantes inscritos en ${intern?.title}`;
    }

    // Crear el array de datos con el título, encabezados y cuerpo
    const data = [[title], headers, ...body];

    // Crear una hoja de trabajo (worksheet)
    const ws: WorkSheet = utils.aoa_to_sheet(data);

    // Ajustar el ancho de las columnas
    const columnWidths = [{ wch: 20 }, { wch: 30 }, { wch: 30 }];
    ws["!cols"] = columnWidths;

    // Fusionar las celdas para el título
    ws["!merges"] = [
      { s: { r: 0, c: 0 }, e: { r: 0, c: headers.length - 1 } }, // Fusionar la primera fila de la columna 0 a la longitud de los encabezados
    ];

    // Crear un libro de trabajo (workbook)
    const wb: WorkBook = utils.book_new();
    utils.book_append_sheet(wb, ws, "Estudiantes");

    // Guardar el archivo Excel
    writeFile(wb, "registro-inscritos.xlsx");
    handleClose();
  };

  const exportPDF = () => {
    const doc = new jsPDF({
      orientation: "landscape",
    });
    if (selectedCourse != 0) {
      const course = courses.find((c) => (c.id = selectedCourse));
      doc.text(
        `Registro de estudiantes inscritos en ${course?.topic} `,
        10,
        10
      );
    } else if (selectedIntern != 0) {
      const intern = interns.find((inter) => (inter.id = selectedIntern));
      doc.text(`Registro de estudiantes inscritos en ${intern?.title}`, 10, 10);
    } else {
      doc.text("Registro de estudiantes", 10, 10);
    }
    const fecha = formattedDate.replaceAll("/", "-");
    doc.text(`Fecha:${fecha}`, 10, 17);
    const head = ["Id", "Nombres", "Apellidos"];
    const body = students.map((student, index) => [
      index + 1,
      student.names,
      student.last_names,
    ]);
    autoTable(doc, {
      startY: 20,
      head: [head],
      body,
    });
    doc.save("registro-inscritos.pdf");
    handleClose();
  };

  return (
    <Layout>
      <Typography variant="h4" className="mb-2">
        Tabla de estudiantes
      </Typography>
      <Box display="flex" gap={2} alignItems="center">
        <TextField
          select
          variant="outlined"
          value={type}
          onChange={handleChangeType}
        >
          <MenuItem value={0}>No seleccionado</MenuItem>
          <MenuItem value={1}>Cursos</MenuItem>
          <MenuItem value={2}>Pasantías</MenuItem>
        </TextField>
        {type == 1 && (
          <TextField
            select
            variant="outlined"
            value={selectedCourse}
            onChange={handleChangeCourse}
          >
            <MenuItem value={0}>Cursos</MenuItem>
            {courses.map((course) => (
              <MenuItem value={course.id} key={course.id}>
                {course.topic}
              </MenuItem>
            ))}
          </TextField>
        )}
        {type == 2 && (
          <TextField
            select
            variant="outlined"
            value={selectedIntern}
            onChange={handleChangeInterCourse}
          >
            <MenuItem value={0}>Pasantías</MenuItem>
            {interns.map((course) => (
              <MenuItem value={course.id} key={course.id}>
                {course.title}
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
      <TableAStudent students={students!} />
    </Layout>
  );
}
