import { ActivityInternModel } from "@/models";
import { Box, Grid, IconButton } from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useRouter } from "next/router";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Swal from "sweetalert2";
import { deleteInternActivity } from "@/utils/intern-activity/deleteInternActivty";
interface Props {
  activities: ActivityInternModel[];
}

export const GridInternActivity: FC<Props> = ({ activities: acts }) => {
  const router = useRouter();
  const transformDate = (dateString: string) => {
    return dateString.split("T")[0];
  };
  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      width: 50,
    },
    {
      field: "date",
      headerName: "Fecha",
      width: 200,
      valueGetter: (value, row) => transformDate(row.date.toString()),
    },
    {
      field: "title",
      headerName: "Actividad",
      width: 200,
    },
    {
      field: "actions",
      headerName: "Acciones",
      width: 200,
      renderCell: (params) => {
        return (
          <div>
            <IconButton
              aria-label="delete"
              size="medium"
              onClick={() => gotActivity(params.row.id)}
            >
              <PlayArrowIcon fontSize="inherit" />
            </IconButton>
            <IconButton
              aria-label="delete"
              size="medium"
              color="inherit"
              onClick={() => handleEdit(params.row.id)}
            >
              <EditIcon fontSize="inherit" />
            </IconButton>
            <IconButton
              aria-label="delete"
              size="medium"
              color="error"
              onClick={() => handleDelete(params.row)}
            >
              <DeleteIcon fontSize="inherit" />
            </IconButton>
          </div>
        );
      },
      sortable: false,
      filterable: false,
    },
  ];

  const gotActivity = (value: any) => {
    router.push(`/teacher/intern/activity/${value}`);
  };

  const handleEdit = (activity_id: any) => {
    router.push({
      pathname: `/teacher/intern/activity/edit`,
      query: { activity_id },
    });
  };

  const handleDelete = (value: any) => {
    let res: any;

    Swal.fire({
      icon: "question",
      title: "¿Está seguro de eliminar?",
      showConfirmButton: true,
      showDenyButton: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        res = await deleteInternActivity(value);
        if (res.status == 200) {
          Swal.fire({
            icon: "success",
            title: "Datos eliminados",
          }).then(() => {
            const dataTemp=activities.filter((acts)=>acts.id==value.id)
            setActivities(dataTemp)
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

  const [activities, setActivities] = useState<ActivityInternModel[]>(acts);

  return (
    <Box sx={{ height: 450, width: "100%" }}>
      <DataGrid
      rows={activities}
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
  );
};
