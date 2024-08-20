import { enagApi } from "@/apis";
import { StudentModuleActivitySubmission } from "@/interface/models_combine";
import {
  ActivityModel,
  ModuleModel,
  SectionModel,
  StudentModel,
  SubmissionModel,
  UserModel,
} from "@/models";
import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  CircularProgress,
  IconButton,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { DataGrid, GridColDef, useGridApiRef } from "@mui/x-data-grid";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

export const StudentsModuleById = () => {
  const router = useRouter();
  const apiRef = useGridApiRef();
  const checkGrade = (grade: any) => {
    return grade === undefined || isNaN(grade) || grade == -1 ? "N/A" : grade;
  };

  const getStudentName = (student: any) => {
    try {
      const user = users.find((usr) => usr.id == student.user_id);
      return user === undefined ? "N/A" : `${user.names} ${user.last_names}`;
    } catch (error) {
      return "N/A";
    }
  };

  const getStudentLasName = (student: any) => {
    try {
      const user = users.find((usr) => usr.id == student.user_id);
      return user === undefined ? "N/A" : user.last_names;
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

  const getSectionName = (activity: any) => {
    try {
      const section = sections.find((sec) => sec.id == activity.section_id);
      return section == undefined ? "N/A" : section.title;
    } catch (error) {
      return "N/A";
    }
  };

  const getStateGradeActivity = (submission: any) => {
    return submission == undefined ? "N/A" : submission.state_gra;
  };

  const getStateSubmissionActivity = (submission: any) => {
    return submission == undefined ? "N/A" : submission.state_sub;
  };

  const [isLoading, setIsLoading] = useState(false);
  const [students, setStudents] = useState<StudentModel[]>([]);
  const [submission, setSubmission] = useState<SubmissionModel[]>([]);
  const [activities, setActivities] = useState<ActivityModel[]>([]);
  const [sections, setSections] = useState<SectionModel[]>([]);
  const [module, setModule] = useState<ModuleModel>();
  const [users, setUsers] = useState<UserModel[]>([]);
  const [studentModuleActivitySubmission, setStudentModuleActivitySubmission] =
    useState<StudentModuleActivitySubmission[]>([]);
  const [rows, setRows] = useState<any>([]);
  const [selectedStudent, setSelectedStudent] = useState<number>(0);
  const [selectedActivity, setSelectedActivity] = useState<number>(0);
  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      width: 50,
    },
    {
      field: "names",
      headerName: "Estudiante",
      width: 300,
      valueGetter: (value, row) => getStudentName(row.student),
      renderCell: (params) => {
        const user = users.find((usr) => usr.id == params.row.student.user_id);
        return (
          <div>
            <Link
              href={`/teacher/module/section/activity/submission/${params.row.submission.id}`}
              passHref
              target="_blank"
              className="text-decoration-none"
            >
              {user?.names} {user?.last_names}
            </Link>
          </div>
        );
      },
    },
    {
      field: "section",
      headerName: "Sección",
      width: 200,
      valueGetter: (value, row) => getSectionName(row.activity),
    },
    {
      field: "activityname",
      headerName: "Nombre de actividad",
      width: 200,
      valueGetter: (value, row) => getActivityName(row.activity),
      renderCell: (params) => {
        return (
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
        );
      },
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
  const getData = async () => {
    setIsLoading(true);
    try {
      const { students: id } = router.query;
      const { data: mdl } = await enagApi.get<ModuleModel>(
        `/modules/module_id=${id}`
      );
      setModule(mdl);
      const { data: usr } = await enagApi.get<UserModel[]>(
        `/users/user_rol=STUDENT`
      );
      setUsers(usr);
      const { data: secs } = await enagApi.get(`/sections/module_id=${mdl.id}`);
      setSections(secs);
      const { data: stds } = await enagApi.get<StudentModel[]>(
        `/students/course_id=${mdl.course_id}`
      );
      setStudents(stds);
      const { data: acts } = await enagApi.get<ActivityModel[]>(
        `/activities/module_id=${id}`
      );
      setActivities(acts);
      const body = acts.map((act) => act.id);
      const { data: sbs } = await enagApi.post<SubmissionModel[]>(
        `/submissions/activity`,
        body
      );
      setSubmission(sbs);

      setIsLoading(false);
    } catch (error) {
      Swal.fire({
        icon: "info",
        title: "Tenemos porblemas al cargar los datos",
      });
      setIsLoading(false);
    }
  };
  const handleChangeStudent = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    try {
      const studentId = Number(event.target.value);
      setSelectedStudent(studentId);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeActivity = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    try {
      const activityId = Number(event.target.value);
      setSelectedActivity(activityId);
    } catch (error) {
      console.log(error);
    }
  };

  const buildData = () => {
    let studentModulesActivitiesSubmissionsTemp: StudentModuleActivitySubmission[] =
      [];
    let rowsIndex: any[] = [];
    submission.map((sbm) => {
      const student = students.find((st) => st.id == sbm.student_id);
      const activity = activities.find((act) => act.id == sbm.activity_id);
      if (
        student != undefined &&
        activity != undefined &&
        module != undefined
      ) {
        const studentModuleActivitySubmissionTemp: StudentModuleActivitySubmission =
          {
            activity,
            module,
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
    rowsIndex = studentModulesActivitiesSubmissionsTemp.map((data, index) => ({
      ...data,
      id: index + 1,
    }));
    setRows(rowsIndex);
  };

  const searchData = () => {
    let studentModulesActivitiesSubmissionsTemp: StudentModuleActivitySubmission[] =
      [];
    let rowsIndex: any[] = [];
    if (selectedStudent > 0 && selectedActivity == 0) {
      studentModulesActivitiesSubmissionsTemp =
        studentModuleActivitySubmission.filter(
          (auxSt) => auxSt.student.id == selectedStudent
        );
    } else if (selectedStudent == 0 && selectedActivity > 0) {
      studentModulesActivitiesSubmissionsTemp =
        studentModuleActivitySubmission.filter(
          (auxSt) => auxSt.activity.id == selectedActivity
        );
    } else if (selectedStudent > 0 && selectedActivity > 0) {
      studentModulesActivitiesSubmissionsTemp =
        studentModuleActivitySubmission.filter(
          (auxSt) => auxSt.student.id == selectedStudent
        );
      studentModulesActivitiesSubmissionsTemp =
        studentModulesActivitiesSubmissionsTemp.filter(
          (auxSt) => auxSt.activity.id == selectedActivity
        );
    } else {
      studentModulesActivitiesSubmissionsTemp = studentModuleActivitySubmission;
    }
    rowsIndex = studentModulesActivitiesSubmissionsTemp.map((data, index) => ({
      ...data,
      id: index + 1,
    }));
    setRows(rowsIndex);
  };



  useEffect(() => {
    if (router.isReady) {
      getData();
    }
  }, [router.isReady]);

  useEffect(() => {
    if (!isLoading) {
      buildData();
    }
  }, [isLoading]);

  return (
    <>
      {isLoading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="80vh"
        >
          <CircularProgress size={100} color="error" />
        </Box>
      ) : (
        <>
          <Typography
            component="p"
            fontSize={22}
            fontWeight={700}
            className="mb-2"
          >
            Calificaciones
          </Typography>

          <div className="mt-2"></div>
          <Box display="flex" gap={2} alignItems="center">
            <TextField
              label="Estudiante"
              select
              variant="outlined"
              value={selectedStudent}
              onChange={handleChangeStudent}
            >
              <MenuItem value={0}>No seleccionado</MenuItem>
              {students.map((student) => (
                <MenuItem value={student.id} key={student.id}>
                  {getStudentLasName(student)} {getStudentName(student)}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              label="Actividad"
              select
              variant="outlined"
              value={selectedActivity}
              onChange={handleChangeActivity}
            >
              <MenuItem value={0}>No seleccionado</MenuItem>
              {activities.map((activity) => (
                <MenuItem value={activity.id} key={activity.id}>
                  {activity.title}
                </MenuItem>
              ))}
            </TextField>
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
      )}
    </>
  );
};

export default StudentsModuleById;
