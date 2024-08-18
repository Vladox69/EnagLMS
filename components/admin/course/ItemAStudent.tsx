import { InscriptionModel, StudentModel } from "@/models";
import { Box, IconButton, Typography } from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";
import { deleteInscription } from "@/utils/admin/inscription/deleteInscription";
import { enagApi } from "@/apis";
import styles from "@/styles/Custom.module.css";

interface Props {
  inscription: InscriptionModel;
  is_start: boolean;
  onDeleteStudent: (inscription: InscriptionModel) => void;
}

export const ItemAStudent: FC<Props> = ({
  onDeleteStudent,
  inscription,
  is_start,
}) => {
  const [student, setStudent] = useState<StudentModel>();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const { data: s } = await enagApi.get(
      `/students/student_id=${inscription.student_id}`
    );
    setStudent(s);
  };

  const handleDelete = () => {
    let res: any;
    Swal.fire({
      icon: "question",
      title: "¿Está seguro de eliminar?",
      showConfirmButton: true,
      showDenyButton: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        res = await deleteInscription(inscription);
        if (res.status == 200) {
          Swal.fire({
            icon: "success",
            title: "Datos eliminados",
          }).then(() => {
            onDeleteStudent(inscription);
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

  return (
    <Box
      className={
        styles.hover_effect +
        " d-flex justify-content-between border rounded py-1 mb-2"
      }
    >
      {/* <Typography component="p" className="ms-2">
        {" "}
        {student?.names}{" "}
        {student?.last_names}
      </Typography> */}
      <Box>
          <IconButton className={!is_start?'visible':'invisible'} onClick={handleDelete}>
            <DeleteIcon />
          </IconButton>
      </Box>
    </Box>
  );
};
