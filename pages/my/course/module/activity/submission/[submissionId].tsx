import React, { useEffect, useState } from "react";
import { Container, Button } from "@mui/material";
import { NextPage } from "next";
import { Dropzone } from "../../../../../../components/my/Dropzone";
import {
  ActivityModel,
  SubmissionModel,
  SubmissionResourceModel,
} from "@/models";
import { enagApi } from "@/apis";
import { useRouter } from "next/router";
import Swal from "sweetalert2";

interface Props {
  submission: SubmissionModel;
  resources: SubmissionResourceModel[];
}

export const MySubmissionById: NextPage<Props> = ({}) => {
  const router = useRouter();
  useEffect(() => {
    if (router.isReady) {
      getData();
    }
  }, [router.isReady]);

  const [submission, setSubmission] = useState<SubmissionModel>();
  const [resources, setResources] = useState<SubmissionResourceModel[]>([]);
  const [activity, setActivity] = useState<ActivityModel>();
  const [isLoading, setIsLoading] = useState(false);
  const getData = async () => {
    setIsLoading(true);
    try {
      const { submissionId } = router.query;
      const { data: sbm } = await enagApi.get<SubmissionModel>(
        `/submissions/submission_id=${submissionId}`
      );
      setSubmission(sbm);
      const { data: act } = await enagApi.get<ActivityModel>(
        `/activities/activity_id=${sbm.activity_id}`
      );
      setActivity(act);
      const { data: rsc } = await enagApi.get<SubmissionResourceModel[]>(
        `/submissions/resources/submission_id=${submissionId}`
      );
      setResources(rsc);
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
    <>
      <Container className="container">
        <Container className="container">
          <Dropzone
            submission={submission!}
            resources={resources}
            activity={activity!}
          />
        </Container>
      </Container>
    </>
  );
};

export default MySubmissionById;
