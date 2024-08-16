import { enagApi } from "@/apis";
import { InternModel } from "@/models";
import React, { useEffect, useState } from "react";
import { TableAIntern } from "../../../components/admin/intern/TableAIntern";
import { Box, IconButton, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";
import { deleteIntern } from "@/utils/admin/intern/deleteIntern";
import { CustomDialog } from "@/components/my/CustomDialog";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

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

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const { data } = await enagApi.get<InternModel[]>(`/interns`);
    setInterns(data);
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
            <IconButton
              aria-label="delete"
              size="medium"
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
      <Typography component="p" fontSize={22} fontWeight={700}> Hojas de vida </Typography>
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
