import { StudentModel } from "@/models";
import { useRouter } from "next/router";
import React, { useEffect, FC, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Button, IconButton, Typography } from "@mui/material";
import Swal from "sweetalert2";
import { deleteStudent } from "@/utils/admin/student/deleteStudent";
import { CustomDialog } from "@/components/my/CustomDialog";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { GridColDef, DataGrid } from "@mui/x-data-grid";
import teachers from "@/pages/api/teachers";

interface Props {
  students: StudentModel[];
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

export const TableAStudent: FC<Props> = ({ students: stdnts }) => {
  const router = useRouter();
  const [students, setStudents] = useState<StudentModel[]>([]);

  useEffect(() => {
    setStudents(stdnts);
  }, [stdnts]);

  const handleDelete = async (value: any) => {
    let res: any;
    const { row: student } = value;
    Swal.fire({
      icon: "question",
      title: "¿Está seguro de eliminar?",
      showConfirmButton: true,
      showDenyButton: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        res = await deleteStudent(student);
        if (res.status == 200) {
          Swal.fire({
            icon: "success",
            title: "Datos eliminados",
          }).then(() => {
            setStudents((students) =>
              students.filter((s) => s.id !== student.id)
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

  const goToNewStudent = () => {
    router.push(`/admin/students/new`);
  };

  const handleEdit = (value: any) => {
    const { row: student } = value;
    router.push({
      pathname: "/admin/students/edit",
      query: { student_id: student.id },
    });
  };

  const columns: GridColDef<(typeof students)[number]>[] = [
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
        const title = `Cedula${names[0]}${last_names[0]}`;
        return DocumentDialog(title, row.ID_card_url);
      },
    },
    {
      field: "study_certificate_url",
      headerName: "Certificado de estudio",
      width: 300,
      renderCell: (params) => {
        const { row } = params;
        const names = row.names.split(" ");
        const last_names = row.last_names.split(" ");
        const title = `CetificadoEstudio${names[0]}${last_names[0]}`;
        return DocumentDialog(title, row.study_certificate_url);
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
    <div className="mt-2">
      <Box sx={{ height: 450, width: "100%"}}>
        <DataGrid
          rows={students}
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
        className="mt-2"
        color="error"
        onClick={goToNewStudent}
      >
        Nuevo estudiante
      </Button>
    </div>
  );
};
