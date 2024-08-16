import { Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import React, { FC } from "react";
import Image from "next/image";
import { InternCourseModel } from "@/models";
import { useRouter } from "next/router";
import styles from "@/styles/Intern.module.css";
interface Props {
  courses: InternCourseModel[];
}

export const ItemCourseIntern: FC<Props> = ({ courses }) => {


  const transformDate = (dateString: string) => {
    return dateString.split("T")[0];
  };

  return (
    <Container>
      
    </Container>
  );
};
