import { enagApi } from "@/apis";
import {
  ActivityInternModel,
  InternCourseModel,
  StudentModel,
  SubmissionInternModel,
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
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { utils, WorkSheet, writeFile } from "xlsx";
export default function ReportInterns() {
  const getUserNames = (value: any) => {
    try {
      const student = students.find((st) => st.id == value.student_id);
      const user = users.find((usr) => usr.id == student?.user_id);
      return user == undefined ? "N/A" : user.names;
    } catch (error) {
      return "N/A";
    }
  };
  const getUserLastNames = (value: any) => {
    try {
      const student = students.find((st) => st.id == value.student_id);
      const user = users.find((usr) => usr.id == student?.user_id);
      return user == undefined ? "N/A" : user.last_names;
    } catch (error) {
      return "N/A";
    }
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
  const getActivityName = (value: any) => {
    try {
      const activity = activities.find((act) => act.id == value.activity_id);
      return activity == undefined ? "N/A" : activity.title;
    } catch (error) {
      return "N/A";
    }
  };
  const columnsIntern: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      width: 50,
    },
    {
      field: "names",
      headerName: "Nombres",
      width: 200,
      valueGetter: (value, row) => getUserNames(row),
    },
    {
      field: "lastnames",
      headerName: "Apellidos",
      width: 200,
      valueGetter: (value, row) => getUserLastNames(row),
    },
    {
      field: "date",
      headerName: "Fecha de entrega",
      width: 200,
      valueGetter: (value, row) => checkDate(row.date.toString()),
    },
    {
      field: "activity",
      headerName: "Actividad",
      width: 200,
      valueGetter: (value, row) => getActivityName(row),
    },
  ];
  const apiRef = useGridApiRef();
  //Datagrid
  const [columns, setColumns] = useState<GridColDef[]>();
  const [rows, setRows] = useState<any[]>([]);
  //Data
  const [users, setUsers] = useState<UserModel[]>([]);
  const [students, setStudents] = useState<StudentModel[]>([]);
  const [activities, setActivities] = useState<ActivityInternModel[]>([]);
  const [submissions, setSubmissions] = useState<SubmissionInternModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [courses, setCourses] = useState<InternCourseModel[]>([]);
  const [auxActivities, setAuxActivities] = useState<ActivityInternModel[]>([]);
  //Select
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  //Selects
  const [selectedCourse, setSelectedCourse] = useState<number>(0);
  const [selectedActivity, setSelectedActivity] = useState<number>(0);

  const handleChangeCourse = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    try {
      const courseId = Number(event.target.value);
      setSelectedCourse(courseId);

      // Reset modules, sections, and activities when course changes

      if (courseId !== 0) {
        const auxData = activities.filter((acts) => acts.course_id == courseId);
        setAuxActivities(auxData);
      } else {
        setAuxActivities([]);
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

  const getData = async () => {
    try {
      const { data: usr } = await enagApi.get<UserModel[]>(
        `/users/user_rol=STUDENT`
      );
      setUsers(usr);
      const { data: crs } = await enagApi.get<InternCourseModel[]>(
        `/intern_course`
      );
      setCourses(crs);
      const { data: sts } = await enagApi.get<StudentModel[]>(`/students`);
      setStudents(sts);
      const { data: acts } = await enagApi.get<ActivityInternModel[]>(
        `/intern_activity`
      );
      setActivities(acts);
      setAuxActivities(acts);
      const { data: sbs } = await enagApi.get<SubmissionInternModel[]>(
        `/intern_submission`
      );
      setSubmissions(sbs);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  const searchData = () => {
    let rows: any[] = [];
    if (selectedCourse !== 0 && selectedActivity == 0) {
      const course = courses.find((cr) => cr.id == selectedCourse);
      const activitiesTemp = activities.filter(
        (acts) => acts.course_id == course?.id
      );
      activities.map((actTemp) => {
        const sbsTemp = submissions.filter(
          (sbs) => sbs.activity_id == actTemp.id
        );
        rows = [...rows, ...sbsTemp];
      });
    } else if (selectedCourse !== 0 && selectedActivity == 0) {
      const course = courses.find((cr) => cr.id == selectedCourse);
      const activitiesTemp = activities.filter(
        (acts) => acts.course_id == course?.id
      );
      activities.map((actTemp) => {
        const sbsTemp = submissions.filter(
          (sbs) => sbs.activity_id == actTemp.id
        );
        rows = [...rows, ...sbsTemp];
      });
    } else if (selectedCourse !== 0 && selectedActivity == -1) {
      const course = courses.find((cr) => cr.id == selectedCourse);
      const activitiesTemp = activities.filter(
        (acts) => acts.course_id == course?.id
      );
      activities.map((actTemp) => {
        const sbsTemp = submissions.filter(
          (sbs) => sbs.activity_id == actTemp.id
        );
        rows = [...rows, ...sbsTemp];
      });
    } else if (selectedCourse !== 0 && selectedActivity > 0) {
      const sbsTemp = submissions.filter(
        (sbs) => sbs.activity_id == selectedActivity
      );
      rows = sbsTemp;
    }
    setRows(rows);
  };

  const exportPDF = () => {
    const doc = new jsPDF({
      orientation: "landscape",
    });
    let startY = 25;
    let head: any = [];
    const newDate = new Date().toLocaleDateString();
    const date = newDate.replaceAll("/", "_");
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.text("Registro de actividades", 14, 15);
    doc.setFont("helvetica", "normal");
    doc.text(`Fecha: ${newDate}`, 14, 20);
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
    doc.save("registro-de-actividades.pdf");
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
    writeFile(wb, "registro-de-actividades.xlsx");
    handleClose();
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

  return (
    <>
      {" "}
      <Typography component="p" fontSize={22} fontWeight={700} className="mb-2">
        {" "}
        Reportes de actividades{" "}
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
              {course.title}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          variant="outlined"
          value={selectedActivity}
          onChange={handleChangeActivity}
          label="Actividad"
        >
          <MenuItem value={0}>No seleccionado</MenuItem>
          <MenuItem value={-1}>Todas</MenuItem>
          {auxActivities.map((activity) => (
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
          columns={columnsIntern}
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
