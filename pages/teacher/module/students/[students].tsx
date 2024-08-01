import { enagApi } from "@/apis";
import { Layout } from "@/components/layouts";
import {
  ActivityModel,
  ModuleModel,
  SectionModel,
  StudentModel,
  SubmissionModel,
} from "@/models";
import {
  Accordion,
  AccordionSummary,
  Box,
  CircularProgress,
  Container,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { TableStudentGrade } from "@/components/teacher/Grade/TableStudentGrade";
import Swal from "sweetalert2";

export interface StudentQualif extends StudentModel {
  sections: SectionActivities[];
}

interface SectionActivities extends SectionModel {
  activities: ActivitySubmission[];
  total:number;
}

interface ActivitySubmission extends ActivityModel {
  submission: SubmissionModel;
}

export const StudentsModuleById = () => {
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      getData();
    }
  }, [router.isReady]);

  const [studentQualification, setStudentQualification] = useState<StudentQualif[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const getData = async () => {
    const { students: id } = router.query;
    setIsLoading(true)
    try {
      const { data: mdl } = await enagApi.get<ModuleModel>(
        `/modules/module_id=${id}`
      );

      const { data: stds } = await enagApi.get<StudentModel[]>(
        `/students/course_id=${mdl.course_id}`
      );
      const { data: acts } = await enagApi.get<ActivityModel[]>(
        `/activities/module_id=${id}`
      );
      const { data: sect } = await enagApi.get<SectionModel[]>(
        `/sections/module_id=${id}`
      );

      const body=acts.map((act)=> act.id)
      const {data:submissions} = await enagApi.post<SubmissionModel[]>(
        `/submissions/activity`,body
      )

      const studentQualification: StudentQualif[] = stds.map((st) => {
        const sections = sect.map((sec) => {
          const activitiesFilter = acts.filter((act)=>act.section_id==sec.id);
          let total=0;
          const activities = activitiesFilter.map((act) => {
            const submission: any = submissions.find(
              (sb) => sb.activity_id == act.id && sb.student_id == st.id
            );
            const grade = (submission.grade * act.ponderation)/10;
            total = total + grade;
            return {
              ...act,
              submission,
            };
          });
          return {
            ...sec,
            activities,
            total
          };
        });
        return {
          ...st,
          sections,
        };
      });
      setStudentQualification(studentQualification)
      setIsLoading(false)
    } catch (error) {
      Swal.fire({
        icon: "info",
        title: "Tenemos porblemas al cargar los datos",
      });
      setIsLoading(false)
    }

  };

  return (
    <Layout>
      <h3>Calificaciones</h3>
      {(studentQualification==undefined) ? (
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
        {
          studentQualification.map((student) => (
            <Accordion key={student.id} className="p-0 m-0">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}

              >
                <h5 > {student.names} </h5>
              </AccordionSummary>
              <TableStudentGrade student={student} />
            </Accordion>
          ))
        }
        </>
      )}
    </Layout>
  );
};

export default StudentsModuleById;
