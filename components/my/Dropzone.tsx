import React, { FC, useCallback, useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import ImageIcon from '@mui/icons-material/Image';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { Box, Button, IconButton, Typography } from '@mui/material';
import { uploadFile } from '@/utils';
import { SubmissionModel, SubmissionResourceModel } from '@/models';
import { enagApi } from '@/apis';
import { handleDownload } from '@/utils/file/handleDownload';
import { useRouter } from 'next/router';
import { deleteSubmissionResource } from '@/utils/submission/resource/deleteSubmissionResource';
import styles from '@/styles/Custom.module.css'
import ClearIcon from '@mui/icons-material/Clear';

interface Props {
  submission: SubmissionModel,
  resources: SubmissionResourceModel[]
}


export const Dropzone: FC<Props> = ({ submission, resources: resc }) => {

  const [files, setFiles] = useState<any[]>([])
  const [resources, setResources] = useState<SubmissionResourceModel[]>([])
  const [resourceRemoved, setResourceRemoved] = useState<SubmissionResourceModel[]>([])

  useEffect(() => {
    setResources(resc)
  }, [resc])
  

  const router = useRouter()

  // Guardada de archivo
  const onSave = async () => {
    const fileUploadPromises = [];

    if (resourceRemoved.length > 0) {
      const deletedResourcesPromises = [];
      for (const sub_res of resourceRemoved) {
        deletedResourcesPromises.push(deleteSubmissionResource(sub_res))
      }
      await Promise.all(deletedResourcesPromises)
    }

    if (files.length > 0) {

      for (const file of files) {
        fileUploadPromises.push(uploadFile(file.file))
      }
      const responses = await Promise.all(fileUploadPromises);

      const resourcePromises = []

      for (const res of responses) {
        if (res.status === 200) {
          const body = {
            url_resource: res.url,
            submission_id: submission.id,
            title: res.title
          }
          resourcePromises.push(enagApi.post(`/submissions/resources`, body))
        }
      }
      const responsesResources = await Promise.all(resourcePromises);

    }

    router.back();

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
        <span >{name}</span>
        <Button onClick={() => onRemove(name)} >Quitar</Button>
      </li>
    );
  };

  const renderResources = (resource: SubmissionResourceModel) => {
    const icon = resource.title.includes('.docx') || resource.title.includes('.pdf') ? <PictureAsPdfIcon /> : <PictureAsPdfIcon />;
    return (
      <li key={resource.id} >
        {icon}
        <span onClick={() => handleDownload(resource.url_resource, resource.title)}>{resource.title}</span>
        <IconButton color='error' onClick={() => onRemoveResource(resource)} >
          <ClearIcon />
        </IconButton>
      </li>
    )
  }

  const onCancel = () => {
    router.back();
  }

  // useEffect(() => {
  //   console.log(resourceRemoved);
  // }, [resourceRemoved]);

  const onRemoveResource = (resource: SubmissionResourceModel) => {
    setResourceRemoved(resourceRemoved => [resource, ...resourceRemoved])
    setResources(resources => resources.filter(rsc => rsc.id !== resource.id))
  }

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
      <Typography variant='h4'> Agregar entrega  </Typography>
      <form className='border rounded my-2'>
        <div {...getRootProps()} style={{
          height: 100
        }}>
          <input {...getInputProps()} />
          {
            isDragActive
              ? (<p className='mx-2'>Arraste aquí los archivos</p>)
              : (<p className='mx-2'>Arrastre y suelte algunos archivos aquí, o click para seleccionar archivos</p>)
          }
        </div>
        <ul className=''>
          {files.map(renderFile)}
        </ul>

      </form>

      {
        (resources.length > 0) ?
          (
            <div>
              <Typography>Archivos entregados </Typography>
              <Box className='border rounded mb-2'>

                <ol>
                  {
                    resources.map(renderResources)
                  }
                </ol>
              </Box>
            </div>
          )
          :
          (
            <></>
          )
      }


      <Button variant='contained' color='error' onClick={onSave} >
        Guardar Cambios
      </Button>
      <Button variant='contained' className={styles.black_button + ' ms-2'} onClick={onCancel} >
        Cancelar
      </Button>
    </>
  )
}
