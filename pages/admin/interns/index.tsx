import { enagApi } from "@/apis";
import { InternModel } from "@/models";
import React, { useEffect, useState } from "react";
import { TableAIntern } from "../../../components/admin/intern/TableAIntern";
import { Box, CircularProgress, IconButton, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";
import { deleteIntern } from "@/utils/admin/intern/deleteIntern";
import { CustomDialog } from "@/components/my/CustomDialog";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import emailjs from "emailjs-com";

const DocumentDialog = (title: string, url: string) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <p onClick={handleOpen}>
        <PictureAsPdfIcon />
        <span>{`${title}.pdf`}</span>
      </p>
      <CustomDialog
        open={open}
        handleClose={handleClose}
        title={`${title}.pdf`}
        url={url}
      />
    </>
  );
};

export default function Interns() {
  const [interns, setInterns] = useState<InternModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const { data } = await enagApi.get<InternModel[]>(`/interns`);
      setInterns(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  const handleDelete = async (value: any) => {
    const { row: intern } = value;
    let res: any;
    Swal.fire({
      icon: "question",
      title: "¿Está seguro de eliminar?",
      showConfirmButton: true,
      showDenyButton: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        res = await deleteIntern(intern);
        if (res.status == 200) {
          Swal.fire({
            icon: "success",
            title: "Datos eliminados",
          }).then(() => {
            setInterns((interns) => interns.filter((i) => i.id !== intern.id));
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "No se pudo eliminar los datos",
          });
        }
      }
    });
  };

  const sendAprove = (value: any) => {
    emailjs.init('fUTA2N40QEofT2dXW');
    setIsLoading(true);
    const body = {
      person: value.name,
      message: `¡Nos complace informarte que has sido admitido/a en el programa de pasantías de ENAG! Estamos emocionados de tenerte con nosotros y confiamos en que tu experiencia será enriquecedora y valiosa.
                Te enviaremos más detalles sobre los próximos pasos y el inicio del programa en breve. Si tienes alguna pregunta o necesitas más información, no dudes en ponerte en contacto con nosotros.`,
      email: value.email,
    };
    emailjs
      .send("service_g36pyuj","template_j89xm69", body)
      .then(() => {
        setIsLoading(false);
        Swal.fire({
          icon: "success",
          title: "Correo enviado",
        });
      })
      .catch((er) => {
        setIsLoading(false);
        Swal.fire({
          icon: "error",
          title: "No se pudo enviar el correo",
        });
      });
  };

  const sendReject = (value: any) => {
    emailjs.init('fUTA2N40QEofT2dXW');
    setIsLoading(true);
    const body = {
      person: value.name,
      message: `¡Lamentablemente, no has sido seleccionado/a para participar en el programa de pasantías de ENAG en esta ocasión. Agradecemos sinceramente tu interés y el tiempo que has dedicado al proceso de aplicación.
Te animamos a postularte nuevamente en el futuro y te deseamos mucho éxito en tus futuros proyectos.`,
      email: value.email,
    };
    emailjs
      .send("service_g36pyuj","template_j89xm69", body)
      .then(() => {
        setIsLoading(false);
        Swal.fire({
          icon: "success",
          title: "Correo enviado",
        });
      })
      .catch((er) => {
        setIsLoading(false);
        Swal.fire({
          icon: "error",
          title: "No se pudo enviar el correo",
        });
      });
  };

  const columns: GridColDef<(typeof interns)[number]>[] = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "name", headerName: "Nombres", width: 300 },
    { field: "phone", headerName: "Celular", width: 150 },
    { field: "email", headerName: "Correo", width: 300 },
    {
      field: "cv_url",
      headerName: "Hoja de vida",
      width: 350,
      renderCell: (params) => {
        const { row } = params;
        const title = `CV ${row.name}`;
        return DocumentDialog(title, row.cv_url);
      },
    },
    {
      field: "actions",
      headerName: "Acciones",
      width: 150,
      renderCell: (params) => {
        return (
          <div>
            <IconButton size="medium" onClick={() => sendAprove(params.row)}>
              <CheckIcon style={{ color: "green", fontSize: 30 }} />
            </IconButton>
            <IconButton
              aria-label="delete"
              size="medium"
              onClick={() => sendReject(params.row)}
            >
              <CloseIcon style={{ color: "red", fontSize: 30 }} />
            </IconButton>
            <IconButton
              aria-label="delete"
              size="medium"
              color="error"
              onClick={() => handleDelete(params)}
            >
              <DeleteIcon fontSize="inherit" />
            </IconButton>
          </div>
        );
      },
    },
  ];

  return (
    <>
      {isLoading && (
        <Box
          position="absolute"
          display="flex"
          width="100%"
          height="100%"
          justifyContent="center"
          alignItems="center"
          zIndex={999}
          bgcolor="rgba(255, 255, 255, 0.8)"
        >
          <CircularProgress size={100} color="error" />
        </Box>
      )}
      <Typography component="p" fontSize={22} fontWeight={700}>
        {" "}
        Hojas de vida{" "}
      </Typography>
      <Box sx={{ height: 450, width: "100%" }}>
        <DataGrid
          rows={interns}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          pageSizeOptions={[10]}
        />
      </Box>
    </>
  );
}
