import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton } from '@mui/material'
import React, { FC, useState } from 'react'
import '@react-pdf-viewer/core/lib/styles/index.css';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import CloseIcon from '@mui/icons-material/Close';

interface Props{
    open:boolean;
    handleClose:()=>void;
}

export const CustomDialog:FC<Props> = ({handleClose,open}) => {

    const handleDownloadPDF=()=>{

    }

    return (
        <Dialog fullScreen open={open} onClose={handleClose} aria-labelledby="form-dialog-title"  >
            <DialogTitle id="form-dialog-title">
                <span> </span>
                <IconButton onClick={handleClose} >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent  >
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js"  >
                    <Viewer fileUrl="/assets/test.pdf" />
                </Worker>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleDownloadPDF} variant='contained' color='primary' >Descargar</Button>
                <Button onClick={handleClose} variant='contained' color='error' >
                    Cancelar
                </Button>
            </DialogActions>
        </Dialog>
    )
}
