import { Container, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React, { FC } from "react";
import styles from "@/styles/Custom.module.css";
import { ActivityInternModel } from "@/models";
import ArticleIcon from "@mui/icons-material/Article";

interface Props {
  activity: ActivityInternModel;
}
export const ItemInternActivity: FC<Props> = ({ activity }) => {
  const router = useRouter();

  const goToActivityInternById = () => {
    router.push(`/my/intern/activity/${activity.id}`);
  };

  return (
    <Container
      className={
        styles.hover_effect +
        " container d-flex align-items-center mb-2 border rounded"
      }
      component="div"
      onClick={goToActivityInternById}
    >
      <ArticleIcon
        sx={{
          width: 50,
          height: 50,
        }}
      />
      <Typography component="p" className="">
        {activity.title}{" "}
      </Typography>
    </Container>
  );
};
