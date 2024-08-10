import { enagApi } from "@/apis";
import { Layout } from "@/components/layouts";
import {
  ActivityModel,
  CourseModel,
  InscriptionModel,
  ModuleModel,
  SectionModel,
  StudentModel,
} from "@/models";
import SearchIcon from "@mui/icons-material/Search";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { gradeBySection } from "@/utils/grades/gradeBySection";
import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { DataGrid, GridColDef,gridFilteredSortedRowIdsSelector,GridToolbar,useGridApiContext, useGridApiRef} from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import { gradeByModule } from "@/utils/grades/gradeByModule";
import { gradeByCouse } from "@/utils/grades/gradeByCourse";
import { CourseActivity, ModuleActivity, StudenSection, StudenSectionActivity, StudentActivity, StudentCourse, StudentCourseActivity, StudentCourseModuleSection, StudentCourseModuleSectionActivity, StudentModule, StudentModuleActivity, StudentModuleCourse, StudentModuleCourseActivity, StudentModuleSection, StudentModuleSectionActivity, StudentSectionCourseActivity, StudentSectionCourses } from "@/interface/models_combine";
import { gradeByCourseActivity } from "@/utils/grades/gradeByCourseActivity";
import { gradeByModuleActivity } from "@/utils/grades/gradeByModuleActivity";
import { gradeBySectionActivity } from "@/utils/grades/gradeBySectionActivity";
import { gradeByActivity } from "@/utils/grades/gradeByActivity";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import { utils, WorkSheet, writeFile } from "xlsx";

const checkGrade = (grade: any) => {
  return (grade === undefined || isNaN(grade)|| grade ==-1) ? "N/A" : grade;
};

const getStudentName=(student:any)=>{
  return student===undefined ?"N/A":student.names
}

const getStudentLasName=(student:any)=>{
  return student===undefined ?"N/A":student.last_names
}

const getCourseName=(course:any)=>{
  return course===undefined?"N/A":course.topic
}

const getActivityName=(activity:any)=>{
  return activity===undefined?"N/A":activity.title
}

const getPonderation=(activity:any)=>{
  return activity===undefined?"N/A":activity.ponderation
}

const getGradeSubmission=(submission:any)=>{
  return (submission ===undefined || submission.grade==-1)?"N/A":submission.grade
}

const getSectionName=(section:any)=>{
  return section==undefined?"N/A":section.title
}

const getModuleName=(module:any)=>{
  return module==undefined?"N/A":module.title
}

const getStateGradeActivity=(submission:any)=>{
  console.log(submission);
  
  return submission==undefined?"N/A":submission.state_gra
}

const getStateSubmissionActivity=(submission:any)=>{
  console.log(submission);
  
  return submission==undefined?"N/A":submission.state_sub
}

const columnCourse: GridColDef[] = [
  {
    field: "id",
    headerName: "ID",
    width: 50,
  },
  {
    field: "names",
    headerName: "Nombres",
    width: 200,
    valueGetter: (value,row) =>getStudentName(row.student),
  },
  {
    field: "lastnames",
    headerName: "Apellidos",
    width: 200,
    valueGetter: (value,row) =>getStudentLasName(row.student),
  },
  {
    field: "course",
    headerName: "Curso",
    width: 200,
    valueGetter: (value,row)=>getCourseName(row.course),
  },
  {
    field: "total",
    headerName: "Calificación",
    width: 150,
    valueGetter: (params) => checkGrade(params),
  },
];

const columnCourseActivity:GridColDef[]=[
  {
    field: "id",
    headerName: "ID",
    width: 50,
  },
  {
    field: "names",
    headerName: "Nombres",
    width: 200,
    valueGetter: (value,row) =>getStudentName(row.student),
  },
  {
    field: "lastnames",
    headerName: "Apellidos",
    width: 200,
    valueGetter: (value,row) =>getStudentLasName(row.student),
  },
  {
    field: "course",
    headerName: "Curso",
    width: 200,
    valueGetter: (value,row)=>getCourseName(row.course),
  },
  {
    field: "activityname",
    headerName: "Nombre de actividad",
    width: 200,
    valueGetter: (value,row)=>getActivityName(row.activity)
  },
  {
    field: "ponderation",
    headerName: "Ponderación",
    width: 100,
    valueGetter: (value,row)=>getPonderation(row.activity)
  },
  {
    field:"stategrade",
    headerName:"Calificado",
    width:150,
    valueGetter:(value,row)=>getStateGradeActivity(row.submission)
  },
  {
    field:"statesubmission",
    headerName:"Entregado",
    width:150,
    valueGetter:(value,row)=>getStateSubmissionActivity(row.submission)
  },
  {
    field: "grade",
    headerName: "Calificación",
    width: 100,
    valueGetter: (value,row) => getGradeSubmission(row.submission),
  },
]

const columnModule:GridColDef[]=[
  {
    field: "id",
    headerName: "ID",
    width: 50,
  },
  {
    field: "names",
    headerName: "Nombres",
    width: 200,
    valueGetter: (value,row) =>getStudentName(row.student),
  },
  {
    field: "lastnames",
    headerName: "Apellidos",
    width: 200,
    valueGetter: (value,row) =>getStudentLasName(row.student),
  },
  {
    field:"modulename",
    headerName:"Módulo",
    width:200,
    valueGetter:(value,row)=>getModuleName(row.module)
  },
  {
    field:"total",
    headerName:"Calificación",
    width:100,
    valueGetter:(params) => checkGrade(params),
  }
]

const columnModuleActivity:GridColDef[]=[
  {
    field: "id",
    headerName: "ID",
    width: 50,
  },
  {
    field: "names",
    headerName: "Nombres",
    width: 200,
    valueGetter: (value,row) =>getStudentName(row.student),
  },
  {
    field: "lastnames",
    headerName: "Apellidos",
    width: 200,
    valueGetter: (value,row) =>getStudentLasName(row.student),
  },
  {
    field:"modulename",
    headerName:"Módulo",
    width:200,
    valueGetter:(value,row)=>getModuleName(row.module)
  },
  {
    field: "activityname",
    headerName: "Nombre de actividad",
    width: 200,
    valueGetter: (value,row)=>getActivityName(row.activity)
  },
  {
    field: "ponderation",
    headerName: "Ponderación",
    width: 100,
    valueGetter: (value,row)=>getPonderation(row.activity)
  },
  {
    field:"stategrade",
    headerName:"Calificado",
    width:150,
    valueGetter:(value,row)=>getStateGradeActivity(row.submission)
  },
  {
    field:"statesubmission",
    headerName:"Entregado",
    width:150,
    valueGetter:(value,row)=>getStateSubmissionActivity(row.submission)
  },
  {
    field: "grade",
    headerName: "Calificación",
    width: 100,
    valueGetter: (value,row) => getGradeSubmission(row.submission),
  },
]

const columnSection:GridColDef[]=[
  {
    field: "id",
    headerName: "ID",
    width: 50,
  },
  {
    field: "names",
    headerName: "Nombres",
    width: 200,
    valueGetter: (value,row) =>getStudentName(row.student),
  },
  {
    field: "lastnames",
    headerName: "Apellidos",
    width: 200,
    valueGetter: (value,row) =>getStudentLasName(row.student),
  },
  {
    field:"sectionname",
    headerName:"Sección",
    width:200,
    valueGetter:(value,row)=>getSectionName(row.section)
  },
  {
    field:"total",
    headerName:"Calificación",
    width:100,
    valueGetter:(params) => checkGrade(params),
  }
]

const columnSectionActivity:GridColDef[]=[
  {
    field: "id",
    headerName: "ID",
    width: 50,
  },
  {
    field: "names",
    headerName: "Nombres",
    width: 200,
    valueGetter: (value,row) =>getStudentName(row.student),
  },
  {
    field: "lastnames",
    headerName: "Apellidos",
    width: 200,
    valueGetter: (value,row) =>getStudentLasName(row.student),
  },
  {
    field:"sectionname",
    headerName:"Sección",
    width:200,
    valueGetter:(value,row)=>getSectionName(row.section)
  },
  {
    field: "activityname",
    headerName: "Nombre de actividad",
    width: 200,
    valueGetter: (value,row)=>getActivityName(row.activity)
  },
  {
    field: "ponderation",
    headerName: "Ponderación",
    width: 100,
    valueGetter: (value,row)=>getPonderation(row.activity)
  },
  {
    field:"stategrade",
    headerName:"Calificado",
    width:150,
    valueGetter:(value,row)=>getStateGradeActivity(row.submission)
  },
  {
    field:"statesubmission",
    headerName:"Entregado",
    width:150,
    valueGetter:(value,row)=>getStateSubmissionActivity(row.submission)
  },
  {
    field: "grade",
    headerName: "Calificación",
    width: 100,
    valueGetter: (value,row) => getGradeSubmission(row.submission),
  },
]

const columnActivity:GridColDef[]=[
  {
    field: "id",
    headerName: "ID",
    width: 50,
  },
  {
    field: "names",
    headerName: "Nombres",
    width: 200,
    valueGetter: (value,row) =>getStudentName(row.student),
  },
  {
    field: "lastnames",
    headerName: "Apellidos",
    width: 200,
    valueGetter: (value,row) =>getStudentLasName(row.student),
  },
  {
    field: "activityname",
    headerName: "Nombre de actividad",
    width: 200,
    valueGetter: (value,row)=>getActivityName(row.activity)
  },
  {
    field: "ponderation",
    headerName: "Ponderación",
    width: 100,
    valueGetter: (value,row)=>getPonderation(row.activity)
  },
  {
    field:"stategrade",
    headerName:"Calificado",
    width:150,
    valueGetter:(value,row)=>getStateGradeActivity(row.submission)
  },
  {
    field:"statesubmission",
    headerName:"Entregado",
    width:150,
    valueGetter:(value,row)=>getStateSubmissionActivity(row.submission)
  },
  {
    field: "grade",
    headerName: "Calificación",
    width: 100,
    valueGetter: (value,row) => getGradeSubmission(row.submission),
  },
]

export default function ReportCourse() {
  const apiRef = useGridApiRef();
  //Datagrid
  const [columns, setColumns] = useState<GridColDef[]>(columnCourse);
  const [rows, setRows] = useState<any[]>([]);
  //Data loaded
  const [isLoaded, setIsLoaded] = useState(false)
  //Select
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  //Selects
  const [selectedCourse, setSelectedCourse] = useState<number>(0);
  const [selectedModule, setSelectedModule] = useState<number>(0);
  const [selectedSection, setSelectedSection] = useState<number>(0);
  const [selectedActivity, setSelectedActivity] = useState<number>(0);
  //Data
  const [students, setStudents] = useState<StudentModel[]>([]);
  const [inscriptions, setInscriptions] = useState<InscriptionModel[]>([]);
  const [courses, setCourses] = useState<CourseModel[]>([]);
  const [modules, setModules] = useState<ModuleModel[]>([]);
  const [sections, setSections] = useState<SectionModel[]>([]);
  const [activities, setActivities] = useState<ActivityModel[]>([]);
  //Data aux
  const [auxCourses, setAuxCourses] = useState<CourseModel[]>([])
  const [auxModules, setAuxModules] = useState<ModuleModel[]>([])
  const [auxSections, setAuxSections] = useState<SectionModel[]>([])
  const [auxActivities, setAuxActivities] = useState<ActivityModel[]>([])
  //Datacombine
  const [studentCourse, setStudentCourse] = useState<StudentCourse[]>([])
  const [studentCourseActivity, setStudentCourseActivity] = useState<StudentCourseActivity[]>([])
  const [studentModule, setStudentModule] = useState<StudentModule[]>([])
  const [studentModuleActivity, setStudentModuleActivity] = useState<StudentModuleActivity[]>([])
  const [studentSection, setStudentSection] = useState<StudenSection[]>([])
  const [studentSectionActivity, setStudentSectionActivity] = useState<StudenSectionActivity[]>([])
  const [studentActivity, setStudentActivity] = useState<StudentActivity[]>([])
  const [studentModuleCourse, setStudentModuleCourse] = useState<StudentModuleCourse[]>([])
  const [studentModuleCourseActivity, setStudentModuleCourseActivity] = useState<StudentModuleCourseActivity[]>([])
  const [studentSectionCourse, setStudentSectionCourse] = useState<StudentSectionCourses[]>([])
  const [studentSectionCourseActivity, setStudentSectionCourseActivity] = useState<StudentSectionCourseActivity[]>([])
  const [studentCourseSectionModule, setStudentCourseSectionModule] = useState<StudentCourseModuleSection[]>([])
  const [studentCourseModuleSectionActivity, setStudentCourseModuleSectionActivity] = useState<StudentCourseModuleSectionActivity[]>([])
  const [studentModuleSection, setStudentModuleSection] = useState<StudentModuleSection[]>([])
  const [studentModuleSectionActivity, setStudentModuleSectionActivity] = useState<StudentModuleSectionActivity[]>([])

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if(isLoaded){
      buildData()
    }
  }, [isLoaded])
  

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleChangeCourse = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    try {
      const courseId = Number(event.target.value);
      setSelectedCourse(courseId);

      // Reset modules, sections, and activities when course changes
      setModules([]);
      setSections([]);
      setActivities([]);
      setSelectedModule(0);
      setSelectedSection(0);
      setSelectedActivity(0);

      if (courseId !== 0) {
        const { data: mdls } = await enagApi.get<ModuleModel[]>(
          `/modules/course_id=${courseId}`
        );
        setModules(mdls);
        const { data: acts } = await enagApi.get<ActivityModel[]>(
          `/activities/course_id=${courseId}`
        );
        setActivities(acts);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleChangeModule = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    try {
      const moduleId = Number(event.target.value);
      setSelectedModule(moduleId);

      // Reset sections and activities when module changes
      setSections([]);
      setActivities([]);
      setSelectedSection(0);
      setSelectedActivity(0);

      if (moduleId !== 0) {
        const { data: scs } = await enagApi.get<SectionModel[]>(
          `/sections/module_id=${moduleId}`
        );
        setSections(scs);
        const { data: acts } = await enagApi.get<ActivityModel[]>(
          `/activities/module_id=${moduleId}`
        );
        setActivities(acts);
      } else {
        // If no module is selected, load activities for the selected course
        if (selectedCourse !== 0) {
          const { data: acts } = await enagApi.get<ActivityModel[]>(
            `/activities/course_id=${selectedCourse}`
          );
          setActivities(acts);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleChangeSection = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    try {
      const sectionId = Number(event.target.value);
      setSelectedSection(sectionId);

      // Reset activities when section changes
      setActivities([]);
      setSelectedActivity(0);

      if (sectionId !== 0) {
        const { data: acts } = await enagApi.get<ActivityModel[]>(
          `/activities/section_id=${sectionId}`
        );
        setActivities(acts);
      } else {
        // If no section is selected, load activities for the selected module
        if (selectedModule !== 0) {
          const { data: acts } = await enagApi.get<ActivityModel[]>(
            `/activities/module_id=${selectedModule}`
          );
          setActivities(acts);
        } else {
          // If no module is selected, load activities for the selected course
          if (selectedCourse !== 0) {
            const { data: acts } = await enagApi.get<ActivityModel[]>(
              `/activities/course_id=${selectedCourse}`
            );
            setActivities(acts);
          }
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleChangeActivity = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    try {
      setSelectedActivity(Number(event.target.value));
    } catch (error) {
      console.error(error);
    }
  };

  const buildData=()=>{

    //estudiante curso
    let studentsCourses: StudentCourse[] = [];
    inscriptions.map((inscription) => {
      const course = courses.find((course) => course.id == inscription.course_id);
      const student = students.find((student) => student.id == inscription.student_id);
      if (student != undefined && course != undefined) {
        const tempStudentCourse: StudentCourse = {
          course,
          student,
        };
        studentsCourses = [...studentsCourses, tempStudentCourse];
      }
    });
    setStudentCourse(studentsCourses)
    
    let studentsCoursesActivities:StudentCourseActivity[]=[]
    let auxCourseActivity:CourseActivity[]=[]
    auxActivities.map((activity)=>{
      const section=auxSections.find((sec)=>sec.id==activity.section_id)
      const modul=auxModules.find((mdl)=>mdl.id==section?.module_id)
      const course=courses.find((crs)=>crs.id==modul?.course_id)
      
      if(course!=undefined){
        const tempActivityCourse:CourseActivity={
          course,
          activity
        }
        auxCourseActivity=[...auxCourseActivity,tempActivityCourse]
      }
    })

    //estudiante curso actividad
    auxCourseActivity.map((cract)=>{
      const auxStudentsCourses=studentsCourses.filter((stscrs)=>stscrs.course.id==cract.course.id)
      auxStudentsCourses.map((auxStsCrs)=>{
        const tempStudentCourseActivity:StudentCourseActivity={
          activity:cract.activity,
          course:auxStsCrs.course,
          student:auxStsCrs.student
        }
        studentsCoursesActivities=[...studentsCoursesActivities,tempStudentCourseActivity]
      })
    })
    setStudentCourseActivity(studentsCoursesActivities)

    //estudiante modulo
    let studentsModules:StudentModule[]=[]
    studentsCourses.map((stscr)=>{
      const moduls=auxModules.filter((auxmd)=>auxmd.course_id==stscr.course.id)
      moduls.map((mds)=>{
        const tempStudentModul:StudentModule={
          module:mds,
          student:stscr.student
        }
        studentsModules=[...studentsModules,tempStudentModul]
      })
    })
    setStudentModule(studentsModules)
    
    //estudiante module actividad
    let studentsModulesActivities:StudentModuleActivity[]=[]
    studentsCoursesActivities.map((stcrsact)=>{
      const auxSection=auxSections.find((sec)=>sec.id===stcrsact.activity.section_id)
      const modul=auxModules.find((mdl)=>mdl.id==auxSection?.module_id )
      if(modul!=undefined){
        const tempStudentModulActivity:StudentModuleActivity={
          module:modul,
          student:stcrsact.student,
          activity:stcrsact.activity
        }
        studentsModulesActivities=[...studentsModulesActivities,tempStudentModulActivity]
      }
    })
    setStudentModuleActivity(studentsModulesActivities)
    
    //estudiante seccion
    let studentsSections:StudenSection[]=[]
    studentsModules.map((stmdl)=>{
      const secs = auxSections.filter((sect)=>sect.module_id==stmdl.module.id)
      secs.map((sec)=>{
        const tempStudentSection:StudenSection={
          section:sec,
          student:stmdl.student
        }
        studentsSections=[...studentsSections,tempStudentSection]
      })
    })
    setStudentSection(studentsSections)

    //estudiante seccion actividad
    let studentsSectionsActivities:StudenSectionActivity[]=[]
    studentsModulesActivities.map((stsmdlact)=>{
      const section=auxSections.find((sec)=>sec.id ==stsmdlact.activity.section_id)
      if(section!=undefined){
        const studentSectionActivityTemp:StudenSectionActivity={
          activity:stsmdlact.activity,
          student:stsmdlact.student,
          section
        }
        studentsSectionsActivities=[...studentsSectionsActivities,studentSectionActivityTemp]
      }
    })
    setStudentSectionActivity(studentsSectionsActivities)
    
    //estudiante actividad
    let studentsActivities:StudentActivity[]=[]
    studentsSectionsActivities.map((stssecact)=>{
      const studentActivityTemp:StudentActivity={
        activity:stssecact.activity,
        student:stssecact.student
      }
      studentsActivities=[...studentsActivities,studentActivityTemp]
    })
    setStudentActivity(studentsActivities)
    
    //estudiante modulo curso
    let studentsModulesCourses:StudentModuleCourse[]=[]
    studentsModules.map((stmdl)=>{
      const courseTemp=courses.find((cr)=>cr.id==stmdl.module.course_id)
      if(courseTemp!=undefined){
        const studentModuleCourseTemp:StudentModuleCourse={
          course:courseTemp,
          module:stmdl.module,
          student:stmdl.student
        }
        studentsModulesCourses=[...studentsModulesCourses,studentModuleCourseTemp]
      }
    })
    setStudentModuleCourse(studentsModulesCourses)

    //estudiante modulo curso actividad
    let studentsModulesCoursesActivities:StudentModuleCourseActivity[]=[]
    studentsModulesActivities.map((stmdlact)=>{
      const courseTemp=courses.find((cr)=>cr.id==stmdlact.module.course_id)
      if(courseTemp!=undefined){
        const studentModuleCourseActivityTemp:StudentModuleCourseActivity={
          course:courseTemp,
          module:stmdlact.module,
          student:stmdlact.student,
          actividad:stmdlact.activity
        }
        studentsModulesCoursesActivities=[...studentsModulesCoursesActivities,studentModuleCourseActivityTemp]
      }
    })
    setStudentModuleCourseActivity(studentsModulesCoursesActivities)

    //estudiante seccion curso
    let studentsSectionsCourses:StudentSectionCourses[]=[]
    studentsSections.map((stdsec)=>{
      const mdl=auxModules.find((m)=>m.id==stdsec.section.module_id)
      const crs=courses.find((c)=>c.id==mdl?.course_id)
      if(crs!=undefined){
        const studentSectionTemp:StudentSectionCourses={
          course:crs,
          section:stdsec.section,
          student:stdsec.student
        }
        studentsSectionsCourses=[...studentsSectionsCourses,studentSectionTemp]
      }
    })
    setStudentSectionCourse(studentsSectionsCourses)

    //estudiante seccion curso actividad
    let studentsSectionsCoursesActivities:StudentSectionCourseActivity[]=[]
    studentsSectionsActivities.map((stdsecact)=>{
      const mdl=auxModules.find((m)=>m.id==stdsecact.section.module_id)
      const crs=courses.find((c)=>c.id==mdl?.course_id)
      if(crs!=undefined){
        const studentSectionActivityTemp:StudentSectionCourseActivity={
          activity:stdsecact.activity,
          course:crs,
          section:stdsecact.section,
          student:stdsecact.student
        }
        studentsSectionsCoursesActivities=[...studentsSectionsCoursesActivities,studentSectionActivityTemp]
      }
    })
    setStudentSectionCourseActivity(studentsSectionsCoursesActivities)

    //estudiante seccion modulo curso
    let studentsCoursesModulesSections:StudentCourseModuleSection[]=[]
    studentsSectionsCourses.map((stcrsc)=>{
      const mdl=auxModules.find((md)=>md.id==stcrsc.section.module_id)
      if(mdl!=undefined){
        const studentCourseModuleSectionTemp:StudentCourseModuleSection={
          course:stcrsc.course,
          module:mdl,
          section:stcrsc.section,
          student:stcrsc.student
        }
        studentsCoursesModulesSections=[...studentsCoursesModulesSections,studentCourseModuleSectionTemp]
      }
    })
    setStudentCourseSectionModule(studentsCoursesModulesSections)

    //estudiante actividad seccion modulo curso
    let studentsCoursesModulesSectionsActivities:StudentCourseModuleSectionActivity[]=[]
    studentsSectionsCoursesActivities.map((stsccrac)=>{
      const mdl=auxModules.find((md)=>md.id==stsccrac.section.module_id)
      if(mdl!=undefined){
        const studentCourseModuleSectionActivityTemp:StudentCourseModuleSectionActivity={
          activity:stsccrac.activity,
          course:stsccrac.course,
          module:mdl,
          section:stsccrac.section,
          student:stsccrac.student
        }
        studentsCoursesModulesSectionsActivities=[...studentsCoursesModulesSectionsActivities,studentCourseModuleSectionActivityTemp]
      }
    })
    setStudentCourseModuleSectionActivity(studentsCoursesModulesSectionsActivities)

    //estudiante modulo seccion
    let studentsModulesSections:StudentModuleSection[]=[]
    studentsCoursesModulesSections.map((stcrmdsec)=>{
      const studentModuleSectionTemp:StudentModuleSection={
        module:stcrmdsec.module,
        section:stcrmdsec.section,
        student:stcrmdsec.student
      }
      studentsModulesSections=[...studentsModulesSections,studentModuleSectionTemp]
    })
    setStudentModuleSection(studentsModulesSections)

    //estudiante modulo seccion actividad
    let studentsModulesSectionsActivities:StudentModuleSectionActivity[]=[]
    studentsCoursesModulesSectionsActivities.map((stcrmdscac)=>{
      const studentModuleSectionActivityTemp:StudentModuleSectionActivity={
        activity:stcrmdscac.activity,
        module:stcrmdscac.module,
        section:stcrmdscac.section,
        student:stcrmdscac.student
      }
      studentsModulesSectionsActivities=[...studentsModulesSectionsActivities,studentModuleSectionActivityTemp]
    })
    setStudentModuleSectionActivity(studentsModulesSectionsActivities)

  }

  const getData = async () => {
    try {
      
      const { data: sts } = await enagApi.get<StudentModel[]>(`/students`);
      setStudents(sts);

      const { data: insc } = await enagApi.get<InscriptionModel[]>(`/inscriptions`);
      setInscriptions(insc);
      
      const { data: crs } = await enagApi.get<CourseModel[]>(`/courses`);
      setCourses(crs);

      const {data:moduls}=await enagApi.get<ModuleModel[]>(`/modules`)
      setAuxModules(moduls)
      
      const {data:secs}=await enagApi.get<SectionModel[]>(`/sections`)
      setAuxSections(secs)
      
      const {data:acts}=await enagApi.get<ActivityModel[]>(`/activities`)
      setAuxActivities(acts)

      setIsLoaded(true)
    } catch (error) {
      console.error(error);
    }
  };

  //Notas por curso
  const getGradesByCourse = async () => {
    setColumns(columnCourse)
    let auxStudentCourse: StudentCourse[] = [];
    let studentCoursePromiseGet: any[] = [];
    let studentCoursePromise: any[] = [];
    let rowsIndex: any[] = [];
    if(selectedCourse==-1){
      auxStudentCourse=studentCourse;
    }else{
      auxStudentCourse=studentCourse.filter((stscr)=>stscr.course.id==selectedCourse)
    }
    auxStudentCourse.map((sc) => {
      studentCoursePromiseGet.push(gradeByCouse(sc.course, sc.student));
    });
    studentCoursePromise = await Promise.all(studentCoursePromiseGet);
    rowsIndex = studentCoursePromise.map((data, index) => ({
      ...data,
      id: index + 1,
    }));
    setRows(rowsIndex);
  };

  //Notas por curso por actividad
  const getGradesActivityByCourse=async()=>{
    setColumns(columnCourseActivity)
    let auxStudentsCoursesActivity: StudentCourseActivity[] = [];
    let studentCourseActivityPromiseGet: any[] = [];
    let studentCourseActivityPromise: any[] = [];
    let rowsIndex: any[] = [];
    if(selectedCourse==-1&&selectedActivity==-1){
      auxStudentsCoursesActivity=studentCourseActivity
    }else if(selectedCourse>0&&selectedActivity==-1){
      auxStudentsCoursesActivity=studentCourseActivity.filter((stcract)=>stcract.course.id==selectedCourse)
    }else if(selectedCourse>0&&selectedActivity>0){
      auxStudentsCoursesActivity=studentCourseActivity.filter((stcract)=>stcract.course.id==selectedCourse)
      auxStudentsCoursesActivity=auxStudentsCoursesActivity.filter((stcract)=>stcract.activity.id==selectedActivity)
    }
    auxStudentsCoursesActivity.map((stcract)=>{
      studentCourseActivityPromiseGet.push(gradeByCourseActivity(stcract.activity,stcract.student,stcract.course))
    })
    studentCourseActivityPromise=await Promise.all(studentCourseActivityPromiseGet)
    rowsIndex = studentCourseActivityPromise.map((data, index) => ({
      ...data,
      id: index + 1,
    }));
    setRows(rowsIndex);
  }

  //Notas por curso por modulo
  const getGradesModule=async()=>{
    setColumns(columnModule)
    let auxStudentModule: StudentModule[] = [];
    let studentModulePromiseGet:any[]=[]
    let studentModulePromise:any[]=[]
    let rowsIndex: any[] = [];
    if(selectedCourse==0&&selectedModule==-1){
      auxStudentModule=studentModule
    }else if(selectedCourse==-1&&selectedModule==-1){
      auxStudentModule=studentModule
    }else if(selectedCourse>0&&selectedModule==-1){
      auxStudentModule=studentModule.filter((stmdl)=>stmdl.module.course_id==selectedCourse)
    }else if(selectedCourse>0&&selectedModule>0){
      auxStudentModule=studentModule.filter((stmdl)=>stmdl.module.course_id==selectedCourse)
      auxStudentModule=auxStudentModule.filter((stmdl)=>stmdl.module.id==selectedModule)
    }
    auxStudentModule.map((stmdl)=>{
      studentModulePromiseGet.push(gradeByModule(stmdl.module,stmdl.student))
    })
    studentModulePromise=await Promise.all(studentModulePromiseGet)
    rowsIndex = studentModulePromise.map((data, index) => ({
      ...data,
      id: index + 1,
    }));
    setRows(rowsIndex)
  }

  //Notas por curso por modulo por actividad
  const getGradesModuleActivity=async()=>{
    setColumns(columnModuleActivity)
    let auxStudentModuleActivity:StudentModuleActivity[]=[];
    let studentModuleActivityPromiseGet:any[]=[]
    let studentModuleActivityPromise:any[]=[]
    let rowsIndex: any[] = [];
    if(selectedCourse==-1&&selectedModule==-1&&selectedActivity==-1){
      auxStudentModuleActivity=studentModuleActivity
    }else if(selectedCourse==0&&selectedModule==-1&&selectedActivity==-1){
      auxStudentModuleActivity=studentModuleActivity
    }else if(selectedCourse>0&&selectedModule==-1&&selectedActivity==-1){
      auxStudentModuleActivity=studentModuleActivity.filter((stmdac)=>stmdac.module.course_id==selectedCourse)
    }else if(selectedCourse>0&&selectedModule>0&&selectedActivity==-1){
      auxStudentModuleActivity=studentModuleActivity.filter((stmdac)=>stmdac.module.id==selectedModule)
    }else if(selectedCourse>0&&selectedModule>0&&selectedActivity>0){
      auxStudentModuleActivity=studentModuleActivity.filter((stmdac)=>stmdac.activity.id==selectedActivity)
    }
    auxStudentModuleActivity.map((stmdac)=>{
      studentModuleActivityPromiseGet.push(gradeByModuleActivity(stmdac.activity,stmdac.student,stmdac.module))
    })
    studentModuleActivityPromise=await Promise.all(studentModuleActivityPromiseGet)
    rowsIndex = studentModuleActivityPromise.map((data, index) => ({
      ...data,
      id: index + 1,
    }));
    setRows(rowsIndex)
  }

  //Notas por curso por modulo por seccion
  const getGradesSection=async()=>{
    setColumns(columnSection)
    let auxStudentSection:StudenSection[]=[]
    let modulesTemp:ModuleModel[]=[]
    let studentSectionPromiseGet:any[]=[]
    let studentSectionPromise:any[]=[]
    let rowsIndex: any[] = [];
    if(selectedCourse==0&&selectedModule==0&&selectedSection==-1){
      auxStudentSection=studentSection
    }else if(selectedCourse==-1&&selectedModule==-1&&selectedSection==-1){
      auxStudentSection=studentSection
    }else if(selectedCourse==-1&&selectedModule==0&&selectedSection==-1){
      auxStudentSection=studentSection
    }else if(selectedCourse>0&&selectedModule==0&&selectedSection==-1){
      modulesTemp=auxModules.filter((md)=>md.course_id==selectedCourse)
      modulesTemp.map((md)=>{
        const auxStudentSectionTemp=studentSection.filter((stsec)=>stsec.section.module_id==md.id)
        auxStudentSection=[...auxStudentSection,...auxStudentSectionTemp]
      })
    }else if(selectedCourse>0&&selectedModule==-1&&selectedSection==-1){
      modulesTemp=auxModules.filter((md)=>md.course_id==selectedCourse)
      modulesTemp.map((md)=>{
        const auxStudentSectionTemp=studentSection.filter((stsec)=>stsec.section.module_id==md.id)
        auxStudentSection=[...auxStudentSection,...auxStudentSectionTemp]
      })
    }else if(selectedCourse>0&&selectedModule>0&&selectedSection==-1){
      auxStudentSection=studentSection.filter((stsec)=>stsec.section.module_id==selectedModule)
    }else if(selectedCourse>0&&selectedModule>0&&selectedSection>0){
      auxStudentSection=studentSection.filter((stsec)=>stsec.section.id==selectedSection)
    }else if(selectedCourse==0&&selectedModule==-1&&selectedSection==-1){
      auxStudentSection=studentSection
    }
    auxStudentSection.map((stsec)=>{
      studentSectionPromiseGet.push(gradeBySection(stsec.section,stsec.student))
    })
    studentSectionPromise=await Promise.all(studentSectionPromiseGet)
    rowsIndex = studentSectionPromise.map((data, index) => ({
      ...data,
      id: index + 1,
    }));
    setRows(rowsIndex)
  }

  //Notas por curso por modulo por seccion por actividad
  const getGradesSectionActivity=async()=>{
    setColumns(columnSectionActivity)
    let auxStudentSectionActivity:StudenSectionActivity[]=[]
    let modulesTemp:ModuleModel[]=[]
    let studentSectionActivityPromiseGet:any[]=[]
    let studentSectionActivityPromise:any[]=[]
    let rowsIndex: any[] = [];
    if(selectedCourse==-1&&selectedModule==-1&&selectedSection==-1&&selectedActivity==-1){
      auxStudentSectionActivity=studentSectionActivity
    }else if(selectedCourse==0&&selectedModule==-1&&selectedSection==-1&&selectedActivity==-1){
      auxStudentSectionActivity=studentSectionActivity
    }else if(selectedCourse==0&&selectedModule==0&&selectedSection==-1&&selectedActivity==-1){
      auxStudentSectionActivity=studentSectionActivity
    }else if(selectedCourse>0&&selectedModule==0&&selectedSection==-1&&selectedActivity==-1){
      modulesTemp=auxModules.filter((md)=>md.course_id==selectedCourse)
      modulesTemp.map((md)=>{
        const auxStudentSectionActivityTemp=studentSectionActivity.filter((stsec)=>stsec.section.module_id==md.id)
        auxStudentSectionActivity=[...auxStudentSectionActivity,...auxStudentSectionActivityTemp]
      })
    }else if(selectedCourse>0&&selectedModule==-1&&selectedSection==-1&&selectedActivity==-1){
      modulesTemp=auxModules.filter((md)=>md.course_id==selectedCourse)
      modulesTemp.map((md)=>{
        const auxStudentSectionActivityTemp=studentSectionActivity.filter((stsec)=>stsec.section.module_id==md.id)
        auxStudentSectionActivity=[...auxStudentSectionActivity,...auxStudentSectionActivityTemp]
      })
    }else if(selectedCourse>0&&selectedModule>0&&selectedSection==-1&&selectedActivity==-1){
      auxStudentSectionActivity=studentSectionActivity.filter((stscact)=>stscact.section.module_id==selectedModule)
    }else if(selectedCourse>0&&selectedModule>0&&selectedSection>0&&selectedActivity==-1){
      auxStudentSectionActivity=studentSectionActivity.filter((stscact)=>stscact.section.id==selectedSection)
    }else if(selectedCourse>0&&selectedModule>0&&selectedSection>0&&selectedActivity>0){
      auxStudentSectionActivity=studentSectionActivity.filter((stscact)=>stscact.activity.id==selectedActivity)
    }
    auxStudentSectionActivity.map((stsec)=>{
      studentSectionActivityPromiseGet.push(gradeBySectionActivity(stsec.activity,stsec.student,stsec.section))
    })
    studentSectionActivityPromise=await Promise.all(studentSectionActivityPromiseGet)
    rowsIndex = studentSectionActivityPromise.map((data, index) => ({
      ...data,
      id: index + 1,
    }));
    setRows(rowsIndex)
  }

  //Notas por actividad
  const getGradeActivity=async()=>{
    setColumns(columnActivity)
    let studentActivityPromiseGet:any[]=[]
    let studentActivityPromise:any[]=[]
    let rowsIndex: any[] = [];
    studentActivity.map((stact)=>{
      studentActivityPromiseGet.push(gradeByActivity(stact.activity,stact.student))
    })
    studentActivityPromise=await Promise.all(studentActivityPromiseGet)
    rowsIndex = studentActivityPromise.map((data, index) => ({
      ...data,
      id: index + 1,
    }));
    setRows(rowsIndex)
  }

  const searchData = async () => {
    try {
      //Notas por curso de todos los cursos
      if(selectedCourse==-1&&selectedModule==0&&selectedSection==0&&selectedActivity==0){
        console.log("1.Notas por curso de todos los cursos");
        getGradesByCourse()
      //Notas por todos los cursos de los modulos
      }else if(selectedCourse==-1&&selectedModule==-1&&selectedSection==0&&selectedActivity==0){
        console.log("2.Notas por todos los cursos de los modulos");
        getGradesModule()
      //Notas por todas las actividades todas las secciones por todos los modulos por todos los cursos
      }else if(selectedCourse==-1&&selectedModule==-1&&selectedSection==-1&&selectedActivity==-1){
        console.log("3.Notas por todas las actividades todas las secciones por todos los modulos por todos los cursos");
        getGradesSectionActivity()
      //Notas por todas las actividades por todas las secciones por todos los modulos por todas las actividades
      }else if(selectedCourse==-1&&selectedModule==-1&&selectedSection==0&&selectedActivity==-1){
        console.log("4.Notas por todas las actividades por todos los modulos por todas las actividades");
        getGradesModuleActivity()
      //Notas de curso especifico
      }else if(selectedCourse>0&&selectedModule==0&&selectedSection==0&&selectedActivity==0){
        console.log("5.Notas de curso especifico");
        getGradesByCourse()
      //Notas de todos los modulos por curso especifico
      }else if(selectedCourse>0&&selectedModule==-1&&selectedSection==0&&selectedActivity==0){
        console.log("6.Notas de todos los modulos por curso especifico");
        getGradesModule()
      //Notas de modulo especifico por curso especifico
      }else if(selectedCourse>0&&selectedModule>0&&selectedSection==0&&selectedActivity==0){
        console.log("7.Notas de modulo especifico por curso especifico");
        getGradesModule()
      //Notas de todas las secciones por modulo especifico por curso especifico
      }else if(selectedCourse>0&&selectedModule>0&&selectedSection==-1&&selectedActivity==0){
        console.log("8.Notas de todas las secciones por modulo especifico por curso especifico");
        getGradesSection()
      //Notas de seccion especifica de modulo especifico por curso especifico
      }else if(selectedCourse>0&&selectedModule>0&&selectedSection>0&&selectedActivity==0){
        console.log("9.Notas de seccion especifica de modulo especifico por curso especifico");
        getGradesSection()
      //Notas de todas las actividades de seccion especifica de modulo especifico por curso especifico
      }else if(selectedCourse>0&&selectedModule>0&&selectedSection>0&&selectedActivity==-1){
        console.log("10.Notas de todas las actividades de seccion especifica de modulo especifico por curso especifico");
        getGradesSectionActivity()
      //Notas de actividad de seccion especifica de modulo especifico por curso especifico
      }else if(selectedCourse>0&&selectedModule>0&&selectedSection>0&&selectedActivity>0){
        console.log("11.Notas de actividad de seccion especifica de modulo especifico por curso especifico");
        getGradesSectionActivity()
      //Notas de todas las actividades de todos los cursos
      }else if(selectedCourse==-1&&selectedModule==0&&selectedSection==0&&selectedActivity==-1){
        console.log("12.Notas de todas las actividades de todos los cursos");
        getGradesActivityByCourse()
      //Notas de todas las actividades de todos los modulos
      }else if(selectedCourse==0&&selectedModule==-1&&selectedSection==0&&selectedActivity==-1){
        console.log("13.Notas de todas las actividades de todos los modulos");
        getGradesModuleActivity()
      //Notas de todas las actividades de todos las secciones
      }else if(selectedCourse==0&&selectedModule==0&&selectedSection==-1&&selectedActivity==-1){
        console.log("14.Notas de todas las actividades de todos las secciones");
        getGradesSectionActivity()
      //Notas de todas las actividades de todos los modulos de curso especifico
      }else if(selectedCourse>0&&selectedModule==-1&&selectedSection==0&&selectedActivity==-1){
        console.log("15.Notas de todas las actividades de todos los modulos de curso especifico");
        getGradesModuleActivity()
      //Notas de todas las actividades de modulo especifico de curso especifico
      }else if(selectedCourse>0&&selectedModule>0&&selectedSection==0&&selectedActivity==-1){
        console.log("16.Notas de todas las actividades de modulo especifico de curso especifico");
        getGradesModuleActivity()
      //Notas de actividad especifica de modulo especifico de curso especifico
      }else if(selectedCourse>0&&selectedModule>0&&selectedSection==0&&selectedActivity>0){
        console.log("17.Notas de actividad especifica de modulo especifico de curso especifico");
        getGradesModuleActivity()
      //Notas de todas las actividades de todas las secciones de modulo especifico de curso especifico
      }else if(selectedCourse>0&&selectedModule>0&&selectedSection==-1&&selectedActivity==-1){
        console.log("18.Notas de todas las actividades de todas las secciones de modulo especifico de curso especifico");
        getGradesSectionActivity()
      //Notas de todas las secciones de todos los modulos de todos los cursos
      }else if(selectedCourse==-1&&selectedModule==-1&&selectedSection==-1&&selectedActivity==0){
        console.log("19.Notas de todas las secciones de todos los modulos de todos los cursos");
        getGradesSection()
      //Notas de todas las secciones de todos los modulo de curso especifico
      }else if(selectedCourse>0&&selectedModule==-1&&selectedSection==-1&&selectedActivity==0){
        console.log("20.Notas de todas las secciones de todos los modulo de curso especifico");
        getGradesSection()
      //Notas de todas las actividades de todos las secciones de todos los modulos de curso especifico 
      }else if(selectedCourse>0&&selectedModule==-1&&selectedSection==-1&&selectedActivity==-1){
        console.log("21.Notas de todas las actividades de todos las secciones de todos los modulos de curso especifico");
        getGradesActivityByCourse()
      //Notas de secciones por curso
      }else if(selectedCourse>0&&selectedModule==0&&selectedSection==-1&&selectedActivity==0){
        console.log("22.Notas de secciones por curso");
        getGradesSection()
      //Notas de actividades de secciones por curso
      }else if(selectedCourse>0&&selectedModule==0&&selectedSection==-1&&selectedActivity==-1){
        console.log("23.Notas de actividades de secciones por curso");
        getGradesSectionActivity()
      //Notas curso especifico todas las actividades
      }else if(selectedCourse>0&&selectedModule==0&&selectedSection==0&&selectedActivity==-1){
        console.log("24.Notas curso especifico todas las actividades");
        getGradesActivityByCourse()
      
      //Notas curso especifico actividad especifico
      }else if(selectedCourse>0&&selectedModule==0&&selectedSection==0&&selectedActivity>0){
        console.log("25.Notas curso especifico actividad especifica");
        getGradesActivityByCourse()

      //Notas de todos los modulos
      }else if(selectedCourse==0&&selectedModule==-1&&selectedSection==0&&selectedActivity==0){
        console.log("26.Notas de todos los modulos");
        getGradesModule()

      //Notas de todos los modulos de todas las secciones
      }else if(selectedCourse==0&&selectedModule==-1&&selectedSection==-1&&selectedActivity==0){
        console.log("27.Notas de todos los modulos de todas las secciones");
        getGradesSection()

      //Notas de todas las secciones
      }else if(selectedCourse==0&&selectedModule==0&&selectedSection==-1&&selectedActivity==0){
        console.log("28.Notas de todas las secciones");
        getGradesSection()

      //Notas de todos los cursos de todas las secciones
      }else if(selectedCourse==-1&&selectedModule==0&&selectedSection==-1&&selectedActivity==0){
        console.log("29.Notas de los cursos de todas las secciones");
        getGradesSection()

      //Notas de todos los modulos todas las secciones todas las actividades
      }else if(selectedCourse==0&&selectedModule==-1&&selectedSection==-1&&selectedActivity==-1){
        console.log("29.Notas de todos los modulos todas las secciones todas las actividades");
        getGradesSectionActivity()
      
      //Notas de todas las actividades
      }else if(selectedCourse==0&&selectedModule==0&&selectedSection==0&&selectedActivity==-1){
        console.log("30.Notas de todas las actividades");
        getGradeActivity()

      }else{
        console.log("Nada");
      }
    
    } catch (error) {
      return error;
    }
  };

  const exportPDF=()=>{
    const doc = new jsPDF({
      orientation: "landscape",
    });
    let head:any=[]
    const asCSV=apiRef.current.getDataAsCsv()
    const rowsArray = asCSV.split(/\r?\n/);
    head = rowsArray.shift()?.split(',').map(header => header.trim())
    const body = rowsArray.map(row => row.split(',').map(cell => cell.trim()));
    autoTable(doc, {
      startY: 20,
      head:[head],
      body:body,
    });
    doc.save("registro-de-calificaciones.pdf");
    handleClose();
  }

  const exportExcel=()=>{
    let head:any=[]
    const asCSV=apiRef.current.getDataAsCsv()
    const rowsArray = asCSV.split(/\r?\n/);
    head = rowsArray.shift()?.split(',').map(header => header.trim())
    const body = rowsArray.map(row => row.split(',').map(cell => cell.trim()));
    const data=[head,...body]
    const ws:WorkSheet =utils.aoa_to_sheet(data)
    ws['!cols'] = head.map(() => ({ wch: 22 }));
    const wb = utils.book_new();
    utils.book_append_sheet(wb, ws, 'Sheet1');
    writeFile(wb, 'registro-de-calificaciones.xlsx');
    handleClose()
  }

  return (
    <Layout>
      <Typography variant="h4" className="mb-2">
        Reportes por curso
      </Typography>
      <Box display="flex" gap={2} alignItems="center">
        <TextField
          select
          variant="outlined"
          value={selectedCourse}
          onChange={handleChangeCourse}
          label="Curso"
        >
          <MenuItem value={0}>No seleccionado</MenuItem>
          <MenuItem value={-1}>Todas </MenuItem>
          {courses.map((course) => (
            <MenuItem value={course.id} key={course.id}>
              {course.topic}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          label="Módulo"
          select
          variant="outlined"
          value={selectedModule}
          onChange={handleChangeModule}
        >
          <MenuItem value={0}>No seleccionado</MenuItem>
          <MenuItem value={-1}>Todas </MenuItem>
          {modules.map((module) => (
            <MenuItem value={module.id} key={module.id}>
              {module.title}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          label="Secciones"
          select
          variant="outlined"
          value={selectedSection}
          onChange={handleChangeSection}
        >
          <MenuItem value={0}>No seleccionado</MenuItem>
          <MenuItem value={-1}>Todas </MenuItem>
          {sections.map((section) => (
            <MenuItem value={section.id} key={section.id}>
              {section.title}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          label="Actividades"
          select
          variant="outlined"
          value={selectedActivity}
          onChange={handleChangeActivity}
        >
          <MenuItem value={0}>No seleccionado</MenuItem>
          <MenuItem value={-1}>Todas</MenuItem>
          {activities.map((activity) => (
            <MenuItem value={activity.id} key={activity.id}>
              {activity.title}
            </MenuItem>
          ))}
        </TextField>
        <Box mb={2}>
          <Button
            variant="outlined"
            onClick={handleClick}
            color="inherit"
            className="m-0"
            startIcon={<FileDownloadIcon />}
          >
            Exportar
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={exportExcel}>Excel</MenuItem>
            <MenuItem onClick={exportPDF} >PDF</MenuItem>
          </Menu>
        </Box>
        <IconButton onClick={searchData}>
          <SearchIcon />
        </IconButton>
      </Box>
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
    </Layout>
  );
}
