import { InternCourseModel } from "@/models";
import { Container, Divider, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React, { FC, useState } from "react";
import Image from "next/image";
import bgImage from "@/assets/fondo.jpg";

interface Props {
  course: InternCourseModel;
}

export const ItemInternCourse: FC<Props> = ({ course }) => {
  const router = useRouter();
  const onClickIntern = () => {
    router.push(`/teacher/intern/${course.id}`);
  };
  return (
    <>
      <Container
        className="d-flex border rounded"
        component="div"
        onClick={onClickIntern}
        style={{ cursor: "pointer" }}
        sx={{
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.1)",
          },
        }}
      >
        <Image
          src={bgImage}
          width={100}
          height={100}
          className="p-2"
          alt="Picture of the author"
          style={{
            transition: "transform 0.3s",
          }}
        />
        <Container className="text-end">
          <Typography component="h2">{course.title}</Typography>
        </Container>
      </Container>
      <Divider />
    </>
  );
};
