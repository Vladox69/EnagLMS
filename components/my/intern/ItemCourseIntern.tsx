import { Container, Divider, Typography } from "@mui/material";
import React, { FC } from "react";
import styles from "@/styles/Custom.module.css";
import Image from "next/image";
import bgImage from "@/assets/fondo.jpg";
import { InternCourseModel } from "@/models";
import { useRouter } from "next/router";

interface Props{
    course:InternCourseModel
}

export const ItemCourseIntern:FC<Props> = ({course}) => {
  
    const router=useRouter()
    const goToInternCourseById=()=>{
        router.push(`/my/intern/${course.id}`)
    }

    return (
    <>
      <Container
        className={styles.hover_effect + " d-flex border rounded mb-2"}
        component="div"
        onClick={goToInternCourseById}
      >
        <Image
          src={bgImage}
          width={100}
          height={100}
          alt="Picture of the author"
        />
        <Container className="text-end">
          <Typography component="h6">{course.title}</Typography>
          <Typography component="h6">
            {course.start_at
              .toString()
              .substring(0, course.start_at.toString().indexOf("T"))}{" "}
            -{" "}
            {course.end_at
              .toString()
              .substring(0, course.end_at.toString().indexOf("T"))}
          </Typography>
        </Container>
      </Container>
      <Divider />
    </>
  );
};
