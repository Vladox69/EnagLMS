import { enagApi } from "@/apis";
import { UserStudent } from "@/interface/models_combine";
import { InscriptionModel, StudentModel, UserModel } from "@/models";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "@/styles/Custom.module.css";
import { newInscription } from "@/utils/admin/inscription/newInscription";
import Swal from "sweetalert2";

const getUserNames = (user: any) => {
  return user === undefined ? "N/A" : user.names;
};

const getUserLastNames = (user: any) => {
  return user === undefined ? "N/A" : user.last_names;
};

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "names",
    headerName: "Nombres",
    width: 250,
    valueGetter: (value, row) => getUserNames(row.user),
  },
  {
    field: "last_names",
    headerName: "Apellidos",
    width: 250,
    valueGetter: (value, row) => getUserLastNames(row.user),
  },
];

export const StudentsIncriptions = () => {
  const router = useRouter();
  const { students: id } = router.query;
  const [rows, setRows] = useState<any[]>([]);
  const [inscriptions, setInscriptions] = useState<InscriptionModel[]>([]);
  const [users, setUsers] = useState<UserModel[]>([]);
  const [students, setStudents] = useState<StudentModel[]>([]);
  const [usersStudents, setUsersStudents] = useState<UserStudent[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedRows, setSelectedRows] = useState<UserStudent[]>([]);

  const saveData = async () => {
    try {
      let inscriptionPromises: any[] = [];
      setIsLoading(true);
      selectedRows.map((row) => {
        const inscriptionTemp: InscriptionModel = {
          id: 0,
          course_id: Number(id),
          student_id: row.student.id,
          date: new Date(),
        };
        inscriptionPromises.push(newInscription(inscriptionTemp));
      });
      await Promise.all(inscriptionPromises);
      setIsLoading(false);
      Swal.fire({
        icon: "success",
        title: "Los datos se guardaron",
      }).then(() => {
        router.back();
      });
    } catch (error) {
      console.log(error);
    }
  };

  const onCancel = () => {
    router.push(`/admin/courses/${id}`);
  };

  useEffect(() => {
    if(router.isReady){
      getData();
    }
  }, [router.isReady]);

  useEffect(() => {
    if (!isLoading) {
      buildData();
    }
  }, [isLoading]);

  const getData = async () => {
    try {
      const { data: inscr } = await enagApi.get<InscriptionModel[]>(
        `/inscriptions/course_id=${id}`
      );
      setInscriptions(inscr);
      const { data: usrs } = await enagApi.get<UserModel[]>(
        `/users/user_rol=STUDENT`
      );
      setUsers(usrs);
      const { data: sts } = await enagApi.get<StudentModel[]>(`/students`);
      setStudents(sts);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  const buildData = async () => {
    let usersStudentsTemp: UserStudent[] = [];
    let rowsIndex: any[] = [];
    const auxStudentsTemp = students.filter(
      (s1) => !inscriptions.some((s2) => s2.student_id === s1.id)
    );
    auxStudentsTemp.map((student) => {
      const user = users.find((usr) => usr.id == student.user_id);
      if (user != undefined) {
        const userStudentTemp: UserStudent = {
          user,
          student,
        };
        usersStudentsTemp = [...usersStudentsTemp, userStudentTemp];
      }
    });
    setUsersStudents(usersStudentsTemp);
    rowsIndex = usersStudentsTemp.map((data, index) => ({
      ...data,
      id: index + 1,
    }));
    setRows(rowsIndex);
  };

  return (
    <>
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
          <Typography component="p" fontSize={22} fontWeight={700}>
            {" "}
            Inscripción de estudiantes{" "}
          </Typography>
          <Box sx={{ height: 450, width: "100%" }}>
            <DataGrid
              rows={rows}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 10,
                  },
                },
              }}
              onRowSelectionModelChange={(ids) => {
                const selectedIDs = new Set(ids);
                const selectedRows = rows.filter((row) =>
                  selectedIDs.has(row.id)
                );

                setSelectedRows(selectedRows);
              }}
              pageSizeOptions={[10]}
              checkboxSelection
              disableRowSelectionOnClick
            />
          </Box>
          <Button
            variant="contained"
            className="mt-2"
            color="error"
            onClick={saveData}
          >
            Inscribir
          </Button>
          <Button
            variant="contained"
            className={styles.black_button + " mt-2 ms-2"}
            onClick={onCancel}
          >
            {" "}
            Cancelar
          </Button>
        </>
      )}
    </>
  );
};
export default StudentsIncriptions;
