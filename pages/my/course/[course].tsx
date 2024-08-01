import { Layout } from "@/components/layouts";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Box, CircularProgress, Container, Typography } from "@mui/material";

import { GridCourse } from "@/components/my/GridCourse";
import enagApi from "../../../apis/enagApi";
import { CourseModel, ModuleModel } from "@/models";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Swal from "sweetalert2";

interface Props {
  course: string;
  modulos: ModuleModel[];
}

export const MyCourseByName: NextPage<Props> = ({}) => {
  const router = useRouter();
  const [modulos, setModulos] = useState<ModuleModel[]>([]);
  const [course, setCourse] = useState<CourseModel>();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (router.isReady) {
      getData();
    }
  }, [router.isReady]);

  const getData = async () => {
    setIsLoading(true);
    try {
      const { course: id } = router.query;
      const { data: c } = await enagApi.get(`/courses/course_id=${id}`);
      setCourse(c);
      const { data: m } = await enagApi.get(`/modules/course_id=${id}`);
      setModulos(m);
      setIsLoading(false);
    } catch (error) {
      Swal.fire({
        icon: "info",
        title: "Tenemos porblemas al cargar los datos",
      });
      setIsLoading(false);
    }
  };

  return (
    <Layout title="My Course">
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
        <Container className="container ">
          <Typography variant="h2">{course?.topic}</Typography>
          <Typography
            component="p"
            dangerouslySetInnerHTML={{
              __html: course?.content ?? "",
            }}
          />

          <GridCourse modules={modulos} />
        </Container>
      )}
    </Layout>
  );
};

export default MyCourseByName;
