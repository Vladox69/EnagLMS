import React, { FC, useCallback, useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import ImageIcon from '@mui/icons-material/Image';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { Button } from '@mui/material';
import { uploadFile } from '@/utils';
import { SubmissionModel, SubmissionResourceModel } from '@/models';
import axios from 'axios';

interface Props {
  submission: SubmissionModel,
  resources: SubmissionResourceModel[]
}


export const Dropzone: FC<Props> = ({ submission, resources }) => {

  const [files, setFiles] = useState<any[]>([])

  //Descargar archivos 
  const handleDownload = (url:string, filename:string) => {
    axios
      .get(url, {
        responseType: "blob"
      })
      .then((res) => {
        // fileDownload(res.data, filename);
      });
  };

  // Guardada de archivo
  const onSave = async () => {
    const fileUploadPromises = [];
    for (const file of files) {
      fileUploadPromises.push(uploadFile(file.file))
    }
    const responses = await Promise.all(fileUploadPromises);

    for (const res of responses) {
      if (res.status === 200) {

      }
    }

  }

  // Quitar archivos
  const onRemove = (name: string) => {
    setFiles(files => files.filter(file => file.file.name !== name))
  }

  // Prebiew con iconos de los archivos
  const renderFile = (file: any, index: number) => {
    const { name, type } = file.file;
    const icon = type === "image/jpeg" || type === "image/png" ? <ImageIcon /> : <PictureAsPdfIcon />;
    return (
      <li key={index} >
        {icon}
        <span>{name}</span>
        <Button onClick={() => onRemove(name)} >Quitar</Button>
      </li>
    );
  };

  // Métodos de drop de los archivos
  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles?.length) {
      setFiles((previousFiles: File[]) => [
        ...previousFiles,
        ...acceptedFiles.map((file: File) => ({
          file,
          preview: URL.createObjectURL(file),
        })),
      ]);
    }
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <>
      <form className='border border-secondary'>
        <div {...getRootProps()} style={{
          height: 100
        }}>
          <input {...getInputProps()} />
          {
            isDragActive
              ? (<p>Arraste aquí los archivos</p>)
              : (<p>Arrastre y suelte algunos archivos aquí, o click para seleccionar archivos</p>)
          }
        </div>
        <ul className=''>
          {files.map(renderFile)}
        </ul>
        <ol>
          {
            resources.map((rs) => (
              <li key={rs.id}>
                <a href={rs.url_resource} download='ss.docx' >
                  {rs.url_resource}
                </a>
              </li>
            ))
          }
        </ol>
      </form>
      <Button variant='contained' onClick={onSave} >
        Guardar Cambios
      </Button>
      <Button variant='contained' color='error'>
        Cancelar
      </Button>
    </>
  )
}
