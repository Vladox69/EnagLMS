import { enagApi } from "@/apis";
import {
  AsistanceModel,
  AsistanceRegisterModel,
  StudentModel,
  UserModel,
} from "@/models";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "@/styles/Custom.module.css";
import Swal from "sweetalert2";
import { StudentAsistance, UserStudent } from "@/interface/models_combine";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Link from "next/link";
import {
  Box,
  Button,
  CircularProgress,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { updateRegister } from "@/utils/asistance/updateRegister";

const getUserNames = (user: any) => {
  return user === undefined ? "N/A" : user.names;
};

const getUserLastNames = (user: any) => {
  return user === undefined ? "N/A" : user.last_names;
};

const getUserName = (user: any) => {
  return user === undefined ? "N/A" : user.username;
};

interface Props {}

export const MyAsistanceRegisterById: NextPage<Props> = ({}) => {
  const router = useRouter();
  const [asistance, setAsistance] = useState<AsistanceModel>();
  const [students, setStudents] = useState<StudentModel[]>([]);
  const [users, setUsers] = useState<UserModel[]>([]);
  const [registers, setRegisters] = useState<AsistanceRegisterModel[]>([]);
  const [asistancesStudents, setAsistancesStudents] = useState<
    StudentAsistance[]
  >([]);
  const [isLoading, setIsLoading] = useState(true);
  const [rows, setRows] = useState<any[]>([]);
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "username",
      headerName: "Usuario",
      width: 150,
      renderCell: (params) => (
        <Link
          href={`/admin/users/edit?user_id=${params.row.user.id}`}
          passHref
          target="_blank"
          className="text-decoration-none"
        >
          {params.row.user.username}
        </Link>
      ),
      valueGetter: (value, row) => getUserName(row.user),
    },
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
    {
      field: "estado",
      renderHeader: () => (
        <Grid container spacing={1}>
          <Grid item xs={4}>
            P
          </Grid>
          <Grid item xs={4}>
            A
          </Grid>
          <Grid item xs={4}>
            F
          </Grid>
        </Grid>
      ),
      width: 150,
      sortable:false,
      filterable:false,
      hideable:false,
      renderCell: (params) => {
        return (
          <div>
            <Grid container>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                className="d-flex"
                name="estado"
                id="estado"
                value={params.row.register.status}
                onChange={(event) =>
                  handleChange(event, params.row.register.student_id)
                }
              >
                <FormControlLabel
                  value="PRESENTE"
                  className="col-md-2"
                  control={<Radio color="error" />}
                  label=""
                />
                <FormControlLabel
                  value="ATRASO"
                  className="col-md-2"
                  control={<Radio color="error" />}
                  label=""
                />
                <FormControlLabel
                  value="FALTA"
                  className="col-md-2"
                  control={<Radio color="error" />}
                  label=""
                />
              </RadioGroup>
            </Grid>
          </div>
        );
      },
    },
  ];

  useEffect(() => {
    if (router.isReady) {
      getData();
    }
  }, [router.isReady]);

  useEffect(() => {
    if (!isLoading) {
      buildData();
    }
  }, [isLoading]);

  const transformDate = (dateString: string) => {
    return dateString.split("T")[0];
  };

  const getData = async () => {
    try {
      const { register } = router.query;
      const qp = (register ?? "").toString().split("&");
      const [q1, q2] = qp;
      const asistance_id = q1.substring(q1.indexOf("=") + 1);
      const { data: asis } = await enagApi.get<AsistanceModel>(
        `/asistances/asistance_id=${asistance_id}`
      );
      setAsistance(asis);
      const { data: regis } = await enagApi.get<AsistanceRegisterModel[]>(
        `/asistances/registers/asistance_id=${asistance_id}`
      );
      setRegisters(regis);
      const { data: usr } = await enagApi.get<UserModel[]>(
        `/users/user_rol=STUDENT`
      );
      setUsers(usr);
      const { data: sts } = await enagApi.get<StudentModel[]>(`/students`);
      setStudents(sts);

      setIsLoading(false);
    } catch (error) {
      Swal.fire({
        icon: "info",
        title: "Tenemos porblemas al cargar los datos",
      });
      setIsLoading(false);
    }
  };
  const buildData = () => {
    let studentsAsistancesTemp: StudentAsistance[] = [];
    let rowsIndex: any[] = [];
    registers.map((register) => {
      const student = students.find((st) => st.id == register.student_id);
      const user = users.find((usr) => usr.id == student?.user_id);
      if (student != undefined && user != undefined && asistance != undefined) {
        const studentAsistanceTemp: StudentAsistance = {
          register,
          asistance,
          student,
          user,
        };
        studentsAsistancesTemp = [
          ...studentsAsistancesTemp,
          studentAsistanceTemp,
        ];
      }
    });
    setAsistancesStudents(studentsAsistancesTemp);
    rowsIndex = studentsAsistancesTemp.map((data, index) => ({
      ...data,
      id: index + 1,
    }));
    setRows(rowsIndex);
  };
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    student_id: number
  ) => {
    const updatedAsistances = asistancesStudents.map((asistanceStudent) => {
      if (asistanceStudent.student.id === student_id) {
        return {
          ...asistanceStudent,
          register: {
            ...asistanceStudent.register,
            status: event.target.value,
          },
        };
      }
      return asistanceStudent;
    });
    setAsistancesStudents(updatedAsistances);

    // Actualiza las filas para reflejar el cambio en el DataGrid
    const updatedRows = updatedAsistances.map((data, index) => ({
      ...data,
      id: index + 1,
    }));
    setRows(updatedRows);
  };

  const saveData = async () => {
    try {
      let resgistersPromise: any[] = [];
      rows.map((row) => {
        resgistersPromise.push(updateRegister(row.register));
      });
      await Promise.all(resgistersPromise);
      Swal.fire({
        icon: "success",
        title: "Los datos de guardaron",
      }).then(() => {
        goBack()
      });
    } catch (error) {
      goBack()
    }
  };
  const goBack=()=>{
    router.back()
  }
  return (
    <>
      {isLoading && (
        <Box
          position="absolute"
          display="flex"
          width="100%"
          height="100vh"
          justifyContent="center"
          alignItems="center"
          zIndex={999}
          bgcolor="rgba(255, 255, 255, 0.8)"
        >
          <CircularProgress size={100} color="error" />
        </Box>
      )}
      <Typography component="p" fontSize={22} fontWeight={700}>
        {asistance?.description} {transformDate(asistance?.date.toString()||" ")}
      </Typography>
      <div className="mt-2">
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
            pageSizeOptions={[10]}
            disableRowSelectionOnClick
          />
        </Box>
      </div>
      <Button
        variant="contained"
        className="mt-2"
        color="error"
        onClick={saveData}
      >
        Guardar
      </Button>
      <Button
        variant="contained"
        className={styles.black_button + " ms-2 mt-2"}
        onClick={goBack}
      >
        Cancelar
      </Button>
    </>
  );
};

export default MyAsistanceRegisterById;
