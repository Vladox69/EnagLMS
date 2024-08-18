import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { Activity } from "../../../../../components/my/activity";
import { enagApi } from "@/apis";
import { ActivityModel } from "@/models";
import { useRouter } from "next/router";
import { Box, CircularProgress } from "@mui/material";
import Swal from "sweetalert2";

interface Props {}

export const MyActivityById: NextPage<Props> = ({}) => {
  const [activity, setActivity] = useState<ActivityModel>();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      getData();
    }
  }, [router.isReady]);

  const getData = async () => {
    setIsLoading(true);
    try {
      const { activity: activity_id } = router.query;
      const { data: act } = await enagApi.get<ActivityModel>(
        `/activities/activity_id=${activity_id}`
      );
      setActivity(act);
      setIsLoading(false);
    } catch (error) {

      setIsLoading(false);
    }
  };

  return (
    < >
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
        <Activity activity={activity!} />
      )}
    </>
  );
};

export default MyActivityById;
