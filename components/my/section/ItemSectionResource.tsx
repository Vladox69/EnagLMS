import { Container, Typography, Dialog, DialogTitle, DialogContent, useMediaQuery, useTheme, IconButton, DialogActions, Button } from '@mui/material';
import { SectionResourceModel } from '@/models'
import React, { FC, useState } from 'react'
import ArticleIcon from '@mui/icons-material/Article';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { handleDownload } from '@/utils/file/handleDownload';
import CloseIcon from '@mui/icons-material/Close';
import { CustomDialog } from '../CustomDialog';
interface Props {
  section_resource: SectionResourceModel
}

export const ItemSectionResource: FC<Props> = ({ section_resource }) => {

  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    if (section_resource.title.includes('.pdf')) {
      setOpen(true)
    } else {
      handleDownload(section_resource.url_resource, section_resource.title)
    }
  }


  const handleClose = () => {
    setOpen(false)
  }
  return (
    <Container className='container bg-danger d-flex align-items-center' component='div' >
      <ArticleIcon sx={{
        width: 50,
        height: 50
      }} />
      <Typography component='p' className='' onClick={handleOpen} >{section_resource.title} </Typography>
      <CustomDialog open={open}  handleClose={handleClose} title={section_resource.title} url={section_resource.url_resource} />
    </Container>
  )
}
