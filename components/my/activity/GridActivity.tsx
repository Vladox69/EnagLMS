import React, { FC, useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";
import { ItemActivity } from ".";
import { ActivityModel } from "@/models";
import { enagApi } from "@/apis";

interface Props {
  section: number;
}

export const GridActivity: FC<Props> = ({ section }) => {
  const [activities, setActivities] = useState<ActivityModel[]>([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const { data } = await enagApi.get(`/activities/section_id=${section}`);
      setActivities(data);
    } catch (error) {}
  };

  return (
    <>
      {activities.length == 0 ? (
        <Typography component="p" color="textSecondary">
          No existen recursos
        </Typography>
      ) : (
        <></>
      )}
      {activities.map((activity, index) => (
        <ItemActivity key={index} activity={activity} />
      ))}
    </>
  );
};
