import { enagApi } from "@/apis";
import { CustomDialog } from "@/components/my/CustomDialog";
import {
  ActivityInternModel,
  StudentModel,
  SubmissionInternModel,
  UserModel,
} from "@/models";
import { Box, CircularProgress, Container, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { DataGrid, GridColDef, useGridApiRef } from "@mui/x-data-grid";
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

export const TeacherInternActivityById = () => {
  const router = useRouter();
  const apiRef = useGridApiRef();
  //Datagrid
  const [rows, setRows] = useState<any[]>([]);
  const [activity, setActivity] = useState<ActivityInternModel>();
  const [submission, setSubmission] = useState<SubmissionInternModel[]>([]);
  const [students, setStudents] = useState<StudentModel[]>([]);
  const [users, setUsers] = useState<UserModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (router.isReady) {
      getData();
    }
  }, [router.isReady]);
  const checkDate = (date: string) => {
    try {
      const fechaReferencia = new Date("2000-08-18T00:00:00.000z");
      const fechaObj = new Date(date);
      if (fechaObj.getTime() === fechaReferencia.getTime()) {
        return "Sin entrega";
      } else {
        const fechaFormateada = fechaObj.toISOString().slice(0, 10);
        return fechaFormateada;
      }
    } catch (error) {
      return "Sin entrega";
    }
  };

  const getUserNames = (value: any) => {
    try {
      const student = students.find((st) => st.id == value.student_id);
      const user = users.find((usr) => usr.id == student?.user_id);
      return user == undefined ? "N/A" : user.names;
    } catch (error) {
      return "N/A";
    }
  };
  const getUserLastNames = (value: any) => {
    try {
      const student = students.find((st) => st.id == value.student_id);
      const user = users.find((usr) => usr.id == student?.user_id);
      return user == undefined ? "N/A" : user.last_names;
    } catch (error) {
      return "N/A";
    }
  };
  const columnsIntern: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      width: 50,
    },
    {
      field: "names",
      headerName: "Nombres",
      width: 200,
      valueGetter: (value, row) => getUserNames(row),
    },
    {
      field: "lastnames",
      headerName: "Apellidos",
      width: 200,
      valueGetter: (value, row) => getUserLastNames(row),
    },
    {
      field: "date",
      headerName: "Fecha de entrega",
      width: 200,
      valueGetter: (value, row) => checkDate(row.date.toString()),
    },
    {
      field: "submission",
      headerName: "Actividad",
      width: 200,
      renderCell: (params) => {
        if (params.row.url_resource == "") {
          return <div></div>;
        }
        const username = getUserNames(params.row).split(" ")[0];
        const lastnames = getUserLastNames(params.row).split(" ")[0];
        return DocumentDialog(
          `${username}${lastnames}`,
          params.row.url_resource
        );
      },
    },
  ];
  const getActivityName = (value: any) => {
    try {
      return activity == undefined ? "N/A" : activity.title;
    } catch (error) {
      return "N/A";
    }
  };
  const getData = async () => {
    try {
      const { activity: id } = router.query;
      const { data: usrs } = await enagApi.get(`/users/user_rol=STUDENT`);
      setUsers(usrs);
      const { data: sts } = await enagApi.get(`/students`);
      setStudents(sts);
      const { data } = await enagApi.get<ActivityInternModel>(
        `/intern_activity/activity_id=${id}`
      );
      setActivity(data);
      const { data: sbms } = await enagApi.get(
        `/intern_submission/activity_id=${id}`
      );
      setSubmission(sbms);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };
  return (
    <>
      <Container className="container">
        {isLoading ? (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="80vh"
          >
            <CircularProgress size={100} color="error" />
          </Box>
        ) : (
          <>
            <Typography
              component="p"
              fontWeight={700}
              fontSize={22}
              className="my-2"
            >
              {" "}
              {activity?.title}{" "}
            </Typography>
            <Typography
              component="p"
              dangerouslySetInnerHTML={{
                __html: activity?.content || "",
              }}
            />
            <Box sx={{ height: 450, width: "100%" }}>
              <DataGrid
                apiRef={apiRef}
                rows={submission}
                columns={columnsIntern}
                // slots={{toolbar:GridToolbar}}
                disableRowSelectionOnClick
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
        )}
      </Container>
    </>
  );
};

export default TeacherInternActivityById;
