import React, { FC, useEffect, useState } from "react";
import { Container } from "@mui/material";
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
      {activities.map((activity, index) => (
        <ItemActivity key={index} activity={activity} />
      ))}
    </>
  );
};
