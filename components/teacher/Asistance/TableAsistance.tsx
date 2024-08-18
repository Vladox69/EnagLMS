import { AsistanceModel } from "@/models";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { IconButton, Container, Paper } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { FC, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import { deleteAsistance } from "@/utils/asistance/deleteAsistance";

interface Props {
  asistances: AsistanceModel[];
}

export const TableAsistance: FC<Props> = ({ asistances: ast }) => {
  const router = useRouter();
  const [asistances, setAsistances] = useState<AsistanceModel[]>([]);

  useEffect(() => {
    setAsistances(ast);
  }, [ast]);

  const goToRegisterAsistance = (asistance_id: number, module_id: number) => {
    router.push(
      `/teacher/module/asistance/register/asistance_id=${asistance_id}&module_id=${module_id}`
    );
  };

  const goToEditRegister = (asistance_id: number) => {
    router.push({
      pathname: "/teacher/module/asistance/edit",
      query: { asistance_id },
    });
  };

  const transformDate = (dateString: string) => {
    return dateString.split("T")[0];
  };

  const onDeleteAsistance = async (asistance: AsistanceModel) => {
    Swal.fire({
      icon: "question",
      title: "¿Está seguro de eliminar?",
      showConfirmButton: true,
      showDenyButton: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res: any = await deleteAsistance(asistance);
        if (res.status == 200) {
          Swal.fire({
            icon: "success",
            title: "Registro eliminado",
          }).then((res) => {
            setAsistances(asistances.filter((asis) => asis.id != asistance.id));
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "No se pudo eliminar el registro",
          });
        }
      }
    });
  };

  const columns: GridColDef[] = [
    {
      field: "date",
      headerName: "Fecha",
      width: 200,
      valueGetter: (params) => transformDate(params),
    },
    { field: "description", headerName: "Descripción", width: 300 },
    {
      field: "actions",
      headerName: "Opciones",
      width: 150,
      renderCell: (params: GridRenderCellParams) => (
        <Container className="p-0 m-0">
          <IconButton
            onClick={() =>
              goToRegisterAsistance(params.row.id, params.row.module_id)
            }
          >
            <PlayArrowIcon />
          </IconButton>
          <IconButton onClick={() => goToEditRegister(params.row.id)} color="inherit" >
            <EditIcon />
          </IconButton>
          <IconButton onClick={() => onDeleteAsistance(params.row)} color="error">
            <DeleteIcon />
          </IconButton>
        </Container>
      ),
    },
  ];

  return (
    <Paper style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={asistances}
        columns={columns}
        disableRowSelectionOnClick
        pageSizeOptions={[10]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
      />
    </Paper>
  );
};
