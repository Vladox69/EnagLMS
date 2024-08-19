import { enagApi } from "@/apis";
import { StudentModel, SubmissionInternModel, UserModel } from "@/models";
import {
  Box,
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
import { DataGrid } from "@mui/x-data-grid";

interface Props {
  submissions: SubmissionInternModel[];
}

interface StudentSubmission extends StudentModel {
  submission: SubmissionInternModel;
}



export const TableInternSubmission: FC<Props> = ({ submissions }) => {
  const [students, setStudents] = useState<StudentSubmission[]>([]);
  const [users, setUsers] = useState<UserModel[]>([])

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
      console.log(submissions);
      
    } catch (error) {
      
    }
  };

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

  return (
    <Box sx={{ height: 450, width: "100%" }}>
      {/* <DataGrid
      
      /> */}
    </Box>
  );
};
