import { enagApi } from "@/apis";
import { Layout } from "@/components/layouts";
import { GradesI } from "@/interface";
import { ActivityModel, SectionModel, SubmissionModel } from "@/models";
import { Box, CircularProgress, Container, Typography } from "@mui/material";
import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import { SectionActivitySubmission } from "@/interface/models_combine";
import { DataGrid, GridColDef, useGridApiRef } from "@mui/x-data-grid";
const checkGrade = (grade: any) => {
  return grade === undefined || isNaN(grade) || grade == -1 ? "N/A" : grade;
};

const getStudentName = (student: any) => {
  return student === undefined ? "N/A" : student.names;
};

const getStudentLasName = (student: any) => {
  return student === undefined ? "N/A" : student.last_names;
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

const columnActivity: GridColDef[] = [
  {
    field: "id",
    headerName: "ID",
    width: 50,
  },
  {
    field: "sectionname",
    headerName: "Sección",
    width: 200,
    valueGetter: (value, row) => getSectionName(row.section),
  },
  {
    field: "activityname",
    headerName: "Nombre de actividad",
    width: 200,
    valueGetter: (value, row) => getActivityName(row.activity),
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

export const MyGradeById= () => {
  const apiRef = useGridApiRef();
  const [columns, setColumns] = useState<GridColDef[]>(columnActivity);
  const [rows, setRows] = useState<any[]>([]);
  const [grades, setGrades] = useState<GradesI>();
  const [isLoading, setIsLoading] = useState(false);
  const [sections, setSections] = useState<SectionModel[]>([]);
  const [activities, setActivities] = useState<ActivityModel[]>([]);
  const [submissions, setSubmissions] = useState<SubmissionModel[]>([]);
  const [sectionActivitySubmission, setSectionActivitySubmission] = useState<
    SectionActivitySubmission[]
  >([]);
  const router = useRouter();
  useEffect(() => {
    if (router.isReady) {
      getData();
    }
  }, [router.isReady]);

  useEffect(() => {
    if(!isLoading){
      buildData()
    }
  }, [isLoading])
  

  const getData = async () => {
    const { grade } = router.query;
    const qp = (grade ?? "").toString().split("&");
    const [q1, q2] = qp;
    const student_id = q1.substring(`student_id=`.length);
    const module_id = q2.substring(`module_id=`.length);
    setIsLoading(true);
    try {
      const { data: sect } = await enagApi.get<SectionModel[]>(
        `/sections/module_id=${module_id}`
      );
      setSections(sect);
      const { data: acts } = await enagApi.get<ActivityModel[]>(
        `/activities/module_id=${module_id}`
      );
      setActivities(acts);
      const { data: sbms } = await enagApi.get<SubmissionModel[]>(
        `/submissions/student_id=${student_id}`
      );
      setSubmissions(sbms);
      setIsLoading(false);
    } catch (error) {
      Swal.fire({
        icon: "info",
        title: "Tenemos porblemas al cargar los datos",
      });
      setIsLoading(false);
    }
  };

  const buildData = () => {
    let sectionsSubmissionActivityTemp: SectionActivitySubmission[] = [];
    let rowsIndex: any[] = [];
    submissions.map((submission) => {
      const activity = activities.find(
        (act) => act.id == submission.activity_id
      );
      const section = sections.find((sect) => sect.id == activity?.section_id);
      if (section != undefined && activity != undefined) {
        const sectionSubmissionActivityTemp: SectionActivitySubmission = {
          activity,
          section,
          submission,
        };
        sectionsSubmissionActivityTemp = [
          ...sectionsSubmissionActivityTemp,
          sectionSubmissionActivityTemp,
        ];
      }
    });
    setSectionActivitySubmission(sectionsSubmissionActivityTemp);
    rowsIndex = sectionsSubmissionActivityTemp.map((data, index) => ({
      ...data,
      id: index + 1,
    }));
    setRows(rowsIndex);
  };

  return (
    <Layout>
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
          <Typography variant="h4" className="mb-2">
            Reportes de calificaciones
          </Typography>
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
      )}
    </Layout>
  );
};

export default MyGradeById;
