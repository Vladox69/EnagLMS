import { enagApi } from "@/apis";
import { AsistanceModel, AsistanceRegisterModel } from "@/models";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { DataGrid, GridColDef, useGridApiRef } from "@mui/x-data-grid";
import { AsistanceRegister } from "@/interface/models_combine";
const getStudentName = (student: any) => {
  return student === undefined ? "N/A" : student.names;
};

const getStudentLasName = (student: any) => {
  return student === undefined ? "N/A" : student.last_names;
};

const getDescriptionAsistance = (asistance: any) => {
  return asistance === undefined ? "N/A" : asistance.description;
};

const getDateAsistance = (asistance: any) => {
  return asistance === undefined ? "N/A" : asistance.date.split("T")[0];
};

const getRegisterState = (register: any) => {
  return register === undefined ? "N/A" : register.status;
};

const getCourseName = (course: any) => {
  return course === undefined ? "N/A" : course.topic;
};

const getModuleName = (module: any) => {
  return module === undefined ? "N/A" : module.title;
};

const columnAsistance: GridColDef[] = [
  {
    field: "id",
    headerName: "ID",
    width: 50,
  },
  {
    field: "description",
    headerName: "Descripción",
    width: 250,
    valueGetter: (value, row) => getDescriptionAsistance(row.asistance),
  },
  {
    field: "date",
    headerName: "Fecha",
    width: 250,
    valueGetter: (value, row) => getDateAsistance(row.asistance),
  },
  {
    field: "status",
    headerName: "Estado",
    width: 150,
    valueGetter: (value, row) => getRegisterState(row.register),
  },
];

export const MyAsistanceById = () => {
  const router = useRouter();
  const apiRef = useGridApiRef();
  const [columns, setColumns] = useState<GridColDef[]>(columnAsistance);
  const [rows, setRows] = useState<any[]>([]);
  const [registers, setRegisters] = useState<AsistanceRegisterModel[]>([]);
  const [asistances, setAsistances] = useState<AsistanceModel[]>([]);
  const [asistanceRegister, setAsistanceRegister] = useState<
    AsistanceRegister[]
  >([]);
  const [isLoading, setIsLoading] = useState(false);
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

  const getData = async () => {
    setIsLoading(true);
    try {
      const { asistance } = router.query;
      const qp = (asistance ?? "").toString().split("&");
      const [q1, q2] = qp;
      const student_id = q1.substring(q1.indexOf("=") + 1);
      const module_id = q2.substring(q2.indexOf("=") + 1);
      const { data: ass } = await enagApi.get<AsistanceModel[]>(
        `/asistances/module_id=${module_id}`
      );
      let registerPromises: any[] = [];
      ass.map((asistance) => {
        registerPromises.push(
          enagApi.get(
            `/asistances/registers/asistance_id=${asistance.id}&student_id=${student_id}`
          )
        );
      });
      const rgs = await Promise.all(registerPromises);
      const registers=rgs.map((rg)=>(rg.data))
      setRegisters(registers);
      setAsistances(ass);
      setIsLoading(false);
    } catch (error) {
      Swal.fire({
        icon: "info",
        title: "Tenemos porblemas al cargar los datos",
      });
      setIsLoading(false);
    }
  };

  const buildData = async () => {
    let asistancesRegistersTemp: AsistanceRegister[] = [];
    let rowsIndex: any[] = [];
    registers.map((register) => {
      const asistance = asistances.find(
        (ast) => ast.id == register.asistance_id
      );
      if (asistance != undefined) {
        const asistanceRegisterTemp: AsistanceRegister = {
          asistance,
          register,
        };
        asistancesRegistersTemp = [
          ...asistancesRegistersTemp,
          asistanceRegisterTemp,
        ];
      }
    });
    rowsIndex = asistancesRegistersTemp.map((data, index) => ({
      ...data,
      id: index + 1,
    }));
    setRows(rowsIndex);
  };

  return (
    <>
      <Typography component="p" fontSize={22} fontWeight={700}>
        Reportes de calificaciones
      </Typography>
      <div className="mt-2"></div>

      <Box sx={{ height: 450, width: "100%" }}>
        <DataGrid
          apiRef={apiRef}
          rows={rows}
          columns={columns}
          // slots={{toolbar:GridToolbar}}
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
};

export default MyAsistanceById;
