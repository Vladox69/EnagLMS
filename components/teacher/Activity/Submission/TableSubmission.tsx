import { SubmissionStudentI } from "@/interface/submission_student";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { Button, Box } from "@mui/material";
import React, { FC, useState } from "react";
import { useRouter } from "next/router";
import { handleDownload } from "@/utils/file/handleDownload";
import { UserModel } from "@/models";
import Link from "next/link";

interface Props {
  submissions: SubmissionStudentI[];
  users: UserModel[];
}

export const TableSubmission: FC<Props> = ({ submissions, users }) => {
  const router = useRouter();

  const getStudent = (value: any) => {
    const user = users.find((usr) => usr.id == value.user_id);
    return `${user?.names} ${user?.last_names}`;
  };

  const getGrade = (value: any) => {
    return value.state_gra == "Sin calificar" ? value.state_gra : value.grade;
  };

  const columns: GridColDef[] = [
    {
      field: "student",
      headerName: "Estudiante",
      width: 250,
      valueGetter: (value, row) => getStudent(row.student),
    },
    {
      field: "grade",
      headerName: "Calificación",
      width: 150,
      valueGetter: (value, row) => getGrade(row.submission),
    },
    {
      field: "submission",
      headerName: "Entrega",
      width: 300,
      renderCell: (params: GridRenderCellParams) =>
        params.row.resources.length === 0 ? (
          <span>No entregado</span>
        ) : (
          <ul>
            {params.row.resources.map((resource: any) => (
              <li
                key={resource.id}
                onClick={() =>
                  handleDownload(resource.url_resource, resource.title)
                }
              >
                <span>{resource.title}</span>
              </li>
            ))}
          </ul>
        ),
    },
    {
      field: "actions",
      headerName: " - ",
      width: 150,
      renderCell: (params: GridRenderCellParams) => (
        <Link
          href={`/teacher/module/section/activity/submission/${params.row.id_submission}`}
          passHref
          target="_blank"
        >
          <Button variant="contained" color="error">
            Calificar
          </Button>
        </Link>
      ),
    },
  ];

  const rows = submissions.map((submission, index) => ({
    id: index,
    ...submission,
  }));

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSizeOptions={[5, 10, 25]}
        disableRowSelectionOnClick
      />
    </Box>
  );
};
