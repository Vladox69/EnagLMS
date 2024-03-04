import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton } from '@mui/material'
import React, { FC, useState } from 'react'
import '@react-pdf-viewer/core/lib/styles/index.css';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import CloseIcon from '@mui/icons-material/Close';
import { handleDownload } from '@/utils/file/handleDownload';

interface Props{
    open:boolean;
    handleClose:()=>void;
    title:string;
    url:string;
}

export const CustomDialog:FC<Props> = ({handleClose,open,url,title}) => {

    const handleDownloadPDF=()=>{
        handleDownload(url,title)
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
                    <Viewer fileUrl={ !url ? "/assets/test.pdf":url} />
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