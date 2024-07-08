import React, { FC, useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import ImageIcon from "@mui/icons-material/Image";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  IconButton,
  Typography,
} from "@mui/material";
import { uploadFile } from "@/utils";
import {
  ActivityModel,
  SubmissionModel,
  SubmissionResourceModel,
} from "@/models";
import { enagApi } from "@/apis";
import { handleDownload } from "@/utils/file/handleDownload";
import { useRouter } from "next/router";
import { deleteSubmissionResource } from "@/utils/submission/resource/deleteSubmissionResource";
import styles from "@/styles/Custom.module.css";
import ClearIcon from "@mui/icons-material/Clear";
import ArticleIcon from "@mui/icons-material/Article";
import { CustomDialog } from "./CustomDialog";

interface Props {
  submission: SubmissionModel;
  resources: SubmissionResourceModel[];
  activity: ActivityModel;
}

interface ItemResourceSubmissionProps {
  resource: SubmissionResourceModel;
  remove: (resource: SubmissionResourceModel) => void;
}

const ItemResourceSubmmission: FC<ItemResourceSubmissionProps> = ({
  resource,
  remove,
}) => {
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
    <Container
      className={
        styles.hover_effect +
        " container d-flex align-items-center mb-2 border rounded "
      }
      component="div"
    >
      <ArticleIcon
        sx={{
          width: 50,
          height: 50,
        }}
      />
      <Typography component="p" className="" onClick={handleOpen}>
        {resource.title}{" "}
      </Typography>
      <IconButton color="error" onClick={() => remove(resource)}>
        <ClearIcon />
      </IconButton>
      <CustomDialog
        open={open}
        handleClose={handleClose}
        title={resource.title}
        url={resource.url_resource}
      />
    </Container>
  );
};

export const Dropzone: FC<Props> = ({
  submission,
  resources: resc,
  activity,
}) => {
  const [files, setFiles] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [resources, setResources] = useState<SubmissionResourceModel[]>([]);
  const [resourceRemoved, setResourceRemoved] = useState<
    SubmissionResourceModel[]
  >([]);

  useEffect(() => {
    setResources(resc);
  }, [resc]);

  const router = useRouter();

  const onSave = async () => {
    setIsLoading(true)
    const fileUploadPromises = [];

    if (resourceRemoved.length > 0) {
      const deletedResourcesPromises = [];
      for (const sub_res of resourceRemoved) {
        deletedResourcesPromises.push(deleteSubmissionResource(sub_res));
      }
      await Promise.all(deletedResourcesPromises);
    }

    if (files.length > 0) {
      for (const file of files) {
        fileUploadPromises.push(uploadFile(file.file));
      }
      const responses = await Promise.all(fileUploadPromises);

      const resourcePromises = [];

      for (const res of responses) {
        if (res.status === 200) {
          const body = {
            url_resource: res.url,
            submission_id: submission.id,
            title: res.title,
          };
          resourcePromises.push(enagApi.post(`/submissions/resources`, body));
        }
      }
      await Promise.all(resourcePromises);
      setIsLoading(false)
    }

    router.back();
  };

  // Quitar archivos
  const onRemove = (name: string) => {
    setFiles((files) => files.filter((file) => file.file.name !== name));
  };

  // Prebiew con iconos de los archivos
  const renderFile = (file: any, index: number) => {
    const { name, type } = file.file;
    const icon =
      type === "image/jpeg" || type === "image/png" ? (
        <ImageIcon />
      ) : (
        <PictureAsPdfIcon />
      );
    return (
      <li key={index}>
        {icon}
        <span>{name}</span>
        <IconButton color="error" onClick={() => onRemove(name)}>
          <ClearIcon />
        </IconButton>
      </li>
    );
  };

  const renderResources = (resource: SubmissionResourceModel) => {
    return (
      <ItemResourceSubmmission
        resource={resource}
        remove={() => onRemoveResource(resource)}
      />
    );
  };

  const onCancel = () => {
    router.back();
  };

  // useEffect(() => {
  //   console.log(resourceRemoved);
  // }, [resourceRemoved]);

  const onRemoveResource = (resource: SubmissionResourceModel) => {
    setResourceRemoved((resourceRemoved) => [resource, ...resourceRemoved]);
    setResources((resources) =>
      resources.filter((rsc) => rsc.id !== resource.id)
    );
  };

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
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <>
      {isLoading && (
        <Box
          position="absolute"
          display="flex"
          width="100%"
          height="100vh"
          justifyContent="center"
          alignItems="center"
          zIndex={999}
          bgcolor="rgba(255, 255, 255, 0.8)"
        >
          <CircularProgress size={100} color="error" />
        </Box>
      )}
      <Typography variant="h4"> Agregar entrega </Typography>
      <form className="border rounded my-2">
        <div
          {...getRootProps()}
          style={{
            height: 100,
          }}
        >
          <input {...getInputProps()} />
          {isDragActive ? (
            <p className="mx-2">Arraste aquí los archivos</p>
          ) : (
            <p className="mx-2">
              Arrastre y suelte algunos archivos aquí, o click para seleccionar
              archivos
            </p>
          )}
        </div>
        <ul className="">{files.map(renderFile)}</ul>
      </form>

      {resources.length > 0 ? (
        <div>
          <Typography>Archivos entregados </Typography>
          {resources.map(renderResources)}
        </div>
      ) : (
        <></>
      )}

      <Button variant="contained" color="error" onClick={onSave}>
        Guardar Cambios
      </Button>
      <Button
        variant="contained"
        className={styles.black_button + " ms-2"}
        onClick={onCancel}
      >
        Cancelar
      </Button>
    </>
  );
};
