import { enagApi } from "@/apis";
import { Layout } from "@/components/layouts";
import { GridInternActivity } from "@/components/teacher/Intern/GridInternActivity";
import { ActivityInternModel, InternCourseModel } from "@/models";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

export const TeacherInternById = () => {
  const router = useRouter();
  const [intern, setIntern] = useState<InternCourseModel>();
  const [activities, setActivities] = useState<ActivityInternModel[]>([])
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    if (router.isReady) {
      getData();
    }
  }, [router.isReady]);

  const getData = async () => {
    setIsLoading(true)
    try {
      const { intern: id } = router.query
      const { data: it } = await enagApi.get<InternCourseModel>(
        `/intern_course/course_id=${id}`
      )
      setIntern(it)
      const {data:acts}=await enagApi.get<ActivityInternModel[]>(
      `/intern_activity/course_id=${id}`
      )
      setActivities(acts)
      setIsLoading(false)
    } catch (error) {
      Swal.fire({
        icon: "info",
        title: "Tenemos porblemas al cargar los datos",
      });
      setIsLoading(false);
    }
  }
  const goToNewActivity=async()=>{
    const {intern:id}=router.query
    router.push({
        pathname:`/teacher/intern/activity/new`,
        query:{intern_id:id}
    })
  }
  return (
    <Layout title="Intern teacher module">
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
        <Container className="container">
          <Typography variant="h4" className="my-2">
            {" "}
            {intern?.title}{" "}
          </Typography>
          <Typography component='p'  dangerouslySetInnerHTML={{
                            __html:intern?.content||''
                        }} />
          <GridInternActivity activities={activities} />
          <Button
            variant="contained"
            color="error"
            className="mb-2"
            onClick={goToNewActivity}
          >
            Crear nueva actividad
          </Button>
        </Container>
      )}
    </Layout>
  );
};

export default TeacherInternById;
