import { Container, Typography, Dialog, DialogTitle, DialogContent, useMediaQuery, useTheme, IconButton, DialogActions, Button } from '@mui/material';
import { SectionResourceModel } from '@/models'
import React, { FC, useState } from 'react'
import ArticleIcon from '@mui/icons-material/Article';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { handleDownload } from '@/utils/file/handleDownload';
import CloseIcon from '@mui/icons-material/Close';
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

  const handleDownloadPDF = () => {
    handleDownload(section_resource.url_resource, section_resource.title)
    handleClose()
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
      <Dialog fullScreen open={open} onClose={handleClose} aria-labelledby="form-dialog-title"  >
        <DialogTitle id="form-dialog-title">
          <span>{section_resource.title}</span>
          <IconButton onClick={handleClose} >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent  >
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js"  >
            <Viewer fileUrl={section_resource.url_resource} />
          </Worker>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDownloadPDF} variant='contained' color='primary' >Descargar</Button>
          <Button onClick={handleClose} variant='contained' color='error' >
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  )
}
