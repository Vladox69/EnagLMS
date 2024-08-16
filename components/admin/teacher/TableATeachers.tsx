import { TeacherModel } from "@/models";
import { IconButton, Button, Typography, Box } from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import { deleteTeacher } from "@/utils/admin/teacher/deleteTeacher";
import { GridColDef, DataGrid } from "@mui/x-data-grid";
import { CustomDialog } from "@/components/my/CustomDialog";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

interface Props {
  teachers: TeacherModel[];
}

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

export const TableATeachers: FC<Props> = ({ teachers: tchrs }) => {
  const router = useRouter();
  const [teachers, setTeachers] = useState<TeacherModel[]>([]);
  useEffect(() => {
    setTeachers(tchrs);
  }, [tchrs]);

  const handleDelete = async (value: any) => {
    const { row: teacher } = value;
    let res: any;
    Swal.fire({
      icon: "question",
      title: "¿Está seguro de eliminar?",
      showConfirmButton: true,
      showDenyButton: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        res = await deleteTeacher(teacher);
        if (res.status == 200) {
          Swal.fire({
            icon: "success",
            title: "Datos eliminados",
          }).then(() => {
            setTeachers((teachers) =>
              teachers.filter((t) => t.id !== teacher.id)
            );
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

  const goToNewTeacher = () => {
    router.push(`/admin/teachers/new`);
  };

  const handleEdit = (value: any) => {
    const { row: teacher } = value;
    router.push({
      pathname: "/admin/teachers/edit",
      query: { teacher_id: teacher.id },
    });
  };

  const columns: GridColDef<(typeof teachers)[number]>[] = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "names", headerName: "Nombres", width: 250 },
    { field: "last_names", headerName: "Apellidos", width: 250 },
    {
      field: "ID_card_url",
      headerName: "Cédula",
      width: 250,
      renderCell: (params) => {
        const { row } = params;
        const names = row.names.split(" ");
        const last_names = row.last_names.split(" ");
        const title=`Cedula${names[0]}${last_names[0]}`
        return DocumentDialog(title,row.ID_card_url);
      },
    },
    {
      field: "cv_url",
      headerName: "Hoja de vida",
      width: 250,
      renderCell: (params) => {
        const { row } = params;
        const names = row.names.split(" ");
        const last_names = row.last_names.split(" ");
        const title=`CV${names[0]}${last_names[0]}`
        return DocumentDialog(title,row.cv_url);
      },
    },
    {
      field: "third_level_degree",
      headerName: "Título de tercer nivel",
      width: 250,
      renderCell: (params) => {
        const { row } = params;
        const names = row.names.split(" ");
        const last_names = row.last_names.split(" ");
        const title=`Titulo${names[0]}${last_names[0]}.pdf`
        return DocumentDialog(title,row.third_level_degree);
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
              aria-label="edit"
              size="medium"
              color="inherit"
              onClick={() => handleEdit(params)}
            >
              <EditIcon fontSize="inherit" />
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
      sortable: false,
      filterable: false,
    },
  ];

  return (
    <>
      <Typography component="p" fontSize={22} fontWeight={700}> Profesores </Typography>
      <Box sx={{ height: 500, width: "100%" }}>
        <DataGrid
          rows={teachers}
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

      <Button
        variant="contained"
        color="error"
        className="mt-2"
        onClick={goToNewTeacher}
      >
        Nuevo profesor
      </Button>
    </>
  );
};
