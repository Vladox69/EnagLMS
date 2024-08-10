import { CourseModel } from "@/models";
import {
  IconButton,
  Box,
} from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import { deleteCourse } from "@/utils/admin/course/deleteCourse";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

interface Props {
  courses: CourseModel[];
}

export const TableACourse: FC<Props> = ({ courses: crs }) => {
  const router = useRouter();

  const [courses, setCourses] = useState<CourseModel[]>([]);

  useEffect(() => {
    setCourses(crs);
  }, [crs]);

  const handleEdit = (value: any) => {
    const { row: course } = value;
    router.push({
      pathname: "/admin/courses/edit",
      query: { course_id: course.id },
    });
  };

  const goToCourse = (value: any) => {
    const { row: course } = value;
    router.push(`/admin/courses/${course.id}`);
  };

  const handleDelete = async (value: any) => {
    let res: any;
    const { row: course } = value;
    Swal.fire({
      icon: "question",
      title: "¿Está seguro de eliminar?",
      showConfirmButton: true,
      showDenyButton: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        res = await deleteCourse(course);
        if (res.status == 200) {
          Swal.fire({
            icon: "success",
            title: "Datos eliminados",
          }).then(() => {
            setCourses((courses) => courses.filter((c) => c.id !== course.id));
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

  const transformDate = (dateString: string) => {
    return dateString.split("T")[0];
  };

  const transformType = (typeString: string) => {
    switch (typeString) {
      case "short":
        return "Corto";
      case "large":
        return "Largo"
      default:
        return "Master Class";
    }
  };

  const columns: GridColDef<(typeof courses)[number]>[] = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "topic", headerName: "Título", width: 250 },
    {
      field: "start_at",
      headerName: "Fecha de inicio",
      width: 150,
      valueGetter: (params) => transformDate(params),
    },
    {
      field: "end_at",
      headerName: "Fecha de fin",
      width: 150,
      valueGetter: (params) => transformDate(params),
    },
    { field: "qualification", headerName: "Titulación", width: 150 },
    { field: "type", headerName: "Tipo", width: 150 ,valueGetter:(params)=>transformType(params)},
    { field: "is_start", headerName: "Iniciado", width: 150, type: "boolean" },
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
              onClick={() => goToCourse(params)}
            >
              <PlayArrowIcon fontSize="inherit" />
            </IconButton>
            <IconButton
              aria-label="delete"
              size="medium"
              onClick={() => handleEdit(params)}
            >
              <EditIcon fontSize="inherit" />
            </IconButton>
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
      sortable: false,
      filterable: false,
    },
  ];

  return (
    <div className="">
      <Box sx={{ height: 450, width: "100%" }}>
        <DataGrid
          rows={courses}
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
    </div>
  );
};
