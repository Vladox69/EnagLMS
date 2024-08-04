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

export default function Teachers() {
  const [students, setStudents] = useState<StudentModel[]>([]);
  const [courses, setCourses] = useState<CourseModel[]>([]);
  const [interns, setInterns] = useState<InternCourseModel[]>([]);
  const [selectedCourse, setSelectedCourse] = useState<number>(0);
  const [selectedIntern, setSelectedIntern] = useState<number>(0);
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
      if (selectedCourse != 0) {
        const { data: stds } = await enagApi.get<StudentModel[]>(
          `/students/course_id=${selectedCourse}`
        );
        setStudents(stds);
      } else if (selectedIntern != 0) {
        const { data: stds } = await enagApi.get<StudentModel[]>(
          `/students/intern_id=${selectedIntern}`
        );
        console.log(stds);

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

  const exportCSV=()=>{

  }

  const exportPDF=()=>{

  }

  return (
    <Layout>
      <Typography variant="h4" className="mb-2">
        Tabla de estudiantes
      </Typography>
      <Box display="flex" gap={2} alignItems="center">
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
            <MenuItem >Excel</MenuItem>
            <MenuItem >PDF</MenuItem>
          </Menu>
        </Box>

        <IconButton aria-label="delete" onClick={searchData}>
          <SearchIcon />
        </IconButton>
      </Box>
      <TableAStudent students={students!} />
    </Layout>
  );
}
