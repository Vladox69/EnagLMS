import { ActivityResourceModel } from "@/models";
import React, { FC, useState } from "react";
import { CustomDialog } from "../CustomDialog";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { Container, Typography } from "@mui/material";
import styles from "@/styles/Custom.module.css";
import ArticleIcon from "@mui/icons-material/Article";
import { handleDownload } from "@/utils/file/handleDownload";

interface Props {
  resource: ActivityResourceModel;
}

const ResourceDialog = ({ resource }: { resource: ActivityResourceModel }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <p onClick={handleOpen}>
        <PictureAsPdfIcon />
        <span>{`${resource.title}`}</span>
      </p>
      <CustomDialog
        open={open}
        handleClose={handleClose}
        title={`${resource.title}`}
        url={resource.url_resource}
      />
    </>
  );
};

export const ItemRActivity: FC<Props> = ({ resource }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    if (resource.title.includes(".pdf")) {
      setOpen(true);
    } else {
      handleDownload(resource.url_resource, resource.title);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    // <ResourceDialog resource={resource} />
    <Container className={styles.hover_effect+' container d-flex align-items-center mb-2 border rounded'} component='div' >
      <ArticleIcon
        sx={{
          width: 50,
          height: 50,
        }}
      />
      <Typography component="p" className="" onClick={handleOpen}>
        {resource.title}{" "}
      </Typography>
      <CustomDialog
        open={open}
        handleClose={handleClose}
        title={resource.title}
        url={resource.url_resource}
      />
    </Container>
  );
};
