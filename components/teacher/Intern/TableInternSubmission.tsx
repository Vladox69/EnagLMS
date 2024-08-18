import { enagApi } from "@/apis";
import { StudentModel, SubmissionInternModel, UserModel } from "@/models";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { CustomDialog } from "@/components/my/CustomDialog";

interface Props {
  submissions: SubmissionInternModel[];
}

interface StudentSubmission extends StudentModel {
  submission: SubmissionInternModel;
}

const InternDialog = ({ intern }: { intern: StudentSubmission }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <p onClick={handleOpen}>
        <PictureAsPdfIcon />
        {/* <span>{`${intern.names}${intern.last_names}.pdf`}</span> */}
      </p>
      <CustomDialog
        open={open}
        handleClose={handleClose}
        // title={`${intern.names}${intern.last_names}.pdf`}
        title=""
        url={intern.submission.url_resource}
      />
    </>
  );
};

export const TableInternSubmission: FC<Props> = ({ submissions }) => {
  const [students, setStudents] = useState<StudentSubmission[]>([]);
  const [user, setUser] = useState<UserModel>()
  useEffect(() => {
    getData();
  }, [submissions]);

  const getData = async () => {
    try {
      const inscription_ids = submissions.map((submission) => {
        return submission.student_id;
      });
      const { data } = await enagApi.post<StudentModel[]>(
        `/students/student_ids`,
        { inscription_ids }
      );
      const sts: StudentSubmission[] = data.map((student) => {
        let submission: SubmissionInternModel | undefined = submissions.find(
          (subm) => subm.student_id == student.id
        );
        if (submission != undefined) {
          return {
            ...student,
            submission,
          };
        } else {
          return {
            ...student,
            submission: {
              activity_id: submission!.activity_id,
              id: 0,
              student_id: student.id,
              url_resource: "",
            },
          };
        }
      });
      setStudents(sts);
    } catch (error) {
      
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 650 }}
        className="border rounded"
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell>Estudiante</TableCell>
            <TableCell>Reporte de actividades</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students &&
            students.map((student) => (
              <TableRow key={student.id}>
                <TableCell>
                  {" "}
                  {/* {student.names} {student.last_names}{" "} */}
                </TableCell>
                <TableCell>
                  {student.submission.url_resource != "" ? (
                    <InternDialog intern={student} />
                  ) : (
                    <Typography component='p' > Sin entregar reporte </Typography>
                  )}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
