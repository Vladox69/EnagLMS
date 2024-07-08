import { enagApi } from "@/apis";
import { Layout } from "@/components/layouts";
import { GridIternActivity } from "@/components/my/intern/GridIternActivity";
import { ActivityInternModel, InternCourseModel } from "@/models";
import { Box, CircularProgress, Container, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export const MyInternCourseById = () => {
  const router = useRouter();
  const [activities, setActivities] = useState<ActivityInternModel[]>([]);
  const [course, setCourse] = useState<InternCourseModel>();
  useEffect(() => {
    if (router.isReady) {
      getData();
    }
  }, [router.isReady]);

  const getData = async () => {
    if (router.isReady) {
      const { intern: id } = router.query;
      const { data: cs } = await enagApi.get<InternCourseModel>(
        `/intern_course/course_id=${id}`
      );
      setCourse(cs);
      const { data: acts } = await enagApi.get<ActivityInternModel[]>(
        `/intern_activity/course_id=${id}`
      );
      setActivities(acts);
    }
  };

  return (
    <Layout>
      {activities == undefined || course == undefined ? (
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
          <Typography variant="h2">{course.title}</Typography>
          <Typography
            component="p"
            dangerouslySetInnerHTML={{
              __html: course.content,
            }}
          />
          <GridIternActivity activities={activities} />
        </Container>
      )}
    </Layout>
  );
};

export default MyInternCourseById;
