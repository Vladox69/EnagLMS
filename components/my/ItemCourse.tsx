import React, { FC } from "react";
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { ModuleModel } from "@/models";

interface Props {
  module: ModuleModel;
}

export const ItemCourse: FC<Props> = ({ module }) => {
  const router = useRouter();

  const goToModuleById = () => {
    router.push(`/my/course/module/${module.id}`);
  };

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card
        sx={{
          maxWidth: { xs: "100%", sm: 400 },
          maxHeight: { xs: "auto", sm: 300 },
          margin: "auto",
        }}
      >
        <CardActionArea onClick={goToModuleById}>
          <CardMedia
            component="img"
            image={module.img_url}
            alt="Module image"
            sx={{ height: { xs: 150, sm: 150 }, objectFit: "cover" }}
          />
          <CardContent sx={{ backgroundColor: "rgba(255,0,0,0.8)" }}>
            <Typography gutterBottom component="p" color="white" >
              {module.title}
            </Typography>
            {/* <Typography component='p' color="white" dangerouslySetInnerHTML={{ __html: module.content }} /> */}
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};


