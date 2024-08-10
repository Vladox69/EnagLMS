import {
  ActivityModel,
  CourseModel,
  ModuleModel,
  SectionModel,
  StudentModel,
} from "@/models";

export interface StudentCourse {
  student: StudentModel;
  course: CourseModel;
}

export interface StudentCourseActivity {
  student: StudentModel;
  course: CourseModel;
  activity: ActivityModel;
}

export interface CourseActivity {
  course: CourseModel;
  activity: ActivityModel;
}

export interface ModuleActivity {
  module: ModuleModel;
  activity: ActivityModel;
}

export interface StudentModule {
  module: ModuleModel;
  student: StudentModel;
}

export interface StudentModuleActivity {
  module: ModuleModel;
  student: StudentModel;
  activity: ActivityModel;
}

export interface StudenSection {
  student: StudentModel;
  section: SectionModel;
}

export interface SectionActivity {
  section: SectionModel;
  activity: ActivityModel;
}

export interface StudenSectionActivity {
  section: SectionModel;
  activity: ActivityModel;
  student: StudentModel;
}

export interface StudentActivity {
  activity: ActivityModel;
  student: StudentModel;
}

export interface StudentModuleCourse {
  module: ModuleModel;
  student: StudentModel;
  course: CourseModel;
}

export interface StudentModuleCourseActivity {
  module: ModuleModel;
  student: StudentModel;
  course: CourseModel;
  actividad: ActivityModel;
}

export interface StudentSectionCourses{
  student: StudentModel;
  course: CourseModel;
  section:SectionModel;
}

export interface StudentSectionCourseActivity{
  student: StudentModel;
  course: CourseModel;
  section:SectionModel;
  activity:ActivityModel;
}

export interface StudentCourseModuleSection{
  student: StudentModel;
  course: CourseModel;
  section:SectionModel;
  module:ModuleModel;
}

export interface StudentCourseModuleSectionActivity{
  student: StudentModel;
  course: CourseModel;
  section:SectionModel;
  module:ModuleModel;
  activity:ActivityModel;
}

export interface StudentModuleSection{
  student: StudentModel;
  section:SectionModel;
  module:ModuleModel;
}

export interface StudentModuleSectionActivity{
  student: StudentModel;
  section:SectionModel;
  module:ModuleModel;
  activity:ActivityModel;
}