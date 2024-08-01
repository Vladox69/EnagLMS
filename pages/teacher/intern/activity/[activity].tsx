import { enagApi } from "@/apis";
import { Layout } from "@/components/layouts";
import { TableInternSubmission } from "@/components/teacher/Intern/TableInternSubmission";
import { ActivityInternModel, SubmissionInternModel } from "@/models";
import { Box, CircularProgress, Container, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

export const TeacherInternActivityById = () => {
  const router = useRouter();
  const [activity, setActivity] = useState<ActivityInternModel>();
  const [submission, setSubmission] = useState<SubmissionInternModel[]>([]);
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    if (router.isReady) {
      getData();
    }
  }, [router.isReady]);

  const getData = async () => {
    setIsLoading(true)
    try {
      const { activity: id } = router.query;
      const { data } = await enagApi.get<ActivityInternModel>(
        `/intern_activity/activity_id=${id}`
      );
      setActivity(data);
      const { data: sbms } = await enagApi.get(
        `/intern_submission/activity_id=${id}`
      );
      setSubmission(sbms);
      
    } catch (error) {
      Swal.fire({
        icon: "info",
        title: "Tenemos porblemas al cargar los datos",
      });
      setIsLoading(false);
    }
  };
  return (
    <Layout>
      <Container className="container">
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
            <Typography variant="h4" className="my-2">
              {" "}
              {activity?.title}{" "}
            </Typography>
            <Typography
              component="p"
              dangerouslySetInnerHTML={{
                __html: activity?.content||'',
              }}
            />
            <TableInternSubmission submissions={submission} />
          </>
        )}
      </Container>
    </Layout>
  );
};

export default TeacherInternActivityById;
