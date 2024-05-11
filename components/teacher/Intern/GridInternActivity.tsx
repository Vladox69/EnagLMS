import { ActivityInternModel } from "@/models";
import { Grid } from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import { ItemInternActivity } from "./ItemInternActivity";

interface Props {
  activities: ActivityInternModel[];
}

export const GridInternActivity: FC<Props> = ({ activities: acts }) => {

  useEffect(() => {
    setActivities(acts)
  }, [acts])
  

  const [activities, setActivities] = useState<ActivityInternModel[]>([]);
  const onDeleteActivity = (activity: ActivityInternModel) => {
    setActivities((activities) => activities.filter((act) => act.id !== activity.id));
  };
  return (
    <Grid container spacing={2} className="gap-2 ms-2 my-2">
      {activities.map((activity) => (
        <ItemInternActivity
          key={activity.id}
          activity={activity}
          onDeleteActivity={() => onDeleteActivity(activity)}
        />
      ))}
    </Grid>
  );
};
