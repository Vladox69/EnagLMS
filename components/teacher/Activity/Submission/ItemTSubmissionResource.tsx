import { SubmissionResourceModel } from "@/models";
import { Container, Typography } from "@mui/material";
import React, { FC, useState } from "react";
import ArticleIcon from '@mui/icons-material/Article';
import styles from '@/styles/Custom.module.css';
import { handleDownload } from "@/utils/file/handleDownload";
import { CustomDialog } from "@/components/my/CustomDialog";

interface Props {
  resource: SubmissionResourceModel;
}

export const ItemTSubmissionResource: FC<Props> = ({resource}) => {
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
      if (resource.title.includes('.pdf')) {
        setOpen(true)
      } else {
        handleDownload(resource.url_resource, resource.title)
      }
    }
  
    const handleClose = () => {
      setOpen(false)
    }
  return (
    <Container className={styles.hover_effect +' container d-flex justify-content-between p-0 border rounded mb-2'} >
    <div className='d-flex align-items-center'>
        <ArticleIcon sx={{
            width: 50,
            height: 50
        }} />
        <Typography component='p' onClick={handleOpen} > {resource.title} </Typography>
        <CustomDialog open={open}  handleClose={handleClose} title={resource.title} url={resource.url_resource} />

    </div>
</Container>
  );
};
