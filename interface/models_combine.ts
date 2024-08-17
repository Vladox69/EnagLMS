import {
  ActivityModel,
  AsistanceModel,
  AsistanceRegisterModel,
  CourseModel,
  InscriptionModel,
  InternCourseModel,
  InternInscriptionModel,
  ModuleModel,
  SectionModel,
  StudentModel,
  SubmissionModel,
  TeacherModel,
  UserModel,
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

export interface StudentSectionCourses {
  student: StudentModel;
  course: CourseModel;
  section: SectionModel;
}

export interface StudentSectionCourseActivity {
  student: StudentModel;
  course: CourseModel;
  section: SectionModel;
  activity: ActivityModel;
}

export interface StudentCourseModuleSection {
  student: StudentModel;
  course: CourseModel;
  section: SectionModel;
  module: ModuleModel;
}

export interface StudentCourseModuleSectionActivity {
  student: StudentModel;
  course: CourseModel;
  section: SectionModel;
  module: ModuleModel;
  activity: ActivityModel;
}

export interface StudentModuleSection {
  student: StudentModel;
  section: SectionModel;
  module: ModuleModel;
}

export interface StudentModuleSectionActivity {
  student: StudentModel;
  section: SectionModel;
  module: ModuleModel;
  activity: ActivityModel;
}

export interface StudentCourseAsistance {
  student: StudentModel;
  course: CourseModel;
  asistance: AsistanceModel;
  register: AsistanceRegisterModel;
}

export interface StudentCourseModuleAsistance {
  student: StudentModel;
  course: CourseModel;
  asistance: AsistanceModel;
  register: AsistanceRegisterModel;
  module: ModuleModel;
}

export interface StudentModuleAsistance {
  student: StudentModel;
  asistance: AsistanceModel;
  register: AsistanceRegisterModel;
  module: ModuleModel;
}

export interface StudentAsistance {
  student: StudentModel;
  asistance: AsistanceModel;
  register: AsistanceRegisterModel;
  user:UserModel;
}

export interface StudentActivitySubmission {
  student: StudentModel;
  activity: ActivityModel;
  submission: SubmissionModel;
}

export interface StudentModuleActivitySubmission {
  student: StudentModel;
  activity: ActivityModel;
  submission: SubmissionModel;
  module: ModuleModel;
}

export interface SectionSubmissionsActivities {
  section: SectionModel;
  activities_submissions: StudentActivitySubmission[];
}

export interface StudentModuleSections {
  student: StudentModel;
  module: ModuleModel;
  sections: SectionSubmissionsActivities[];
}

export interface StudentActivitySubmission {
  student: StudentModel;
  activity: ActivityModel;
  submission: SubmissionModel;
}

export interface SectionActivitySubmission {
  section: SectionModel;
  activity: ActivityModel;
  submission: SubmissionModel;
}

export interface AsistanceRegister {
  asistance: AsistanceModel;
  register: AsistanceRegisterModel;
}

export interface StudentInscriptionCourse {
  inscription: InscriptionModel;
  course: CourseModel;
  student: StudentModel;
  user:UserModel;
}

export interface StudentInscriptionIntern {
  inscription: InternInscriptionModel;
  intern: InternCourseModel;
  student: StudentModel;
  user:UserModel;
}

export interface InternTeacherUser{
  intern: InternCourseModel;
  teacher:TeacherModel;
  user:UserModel;
}

export interface UserStudent {
  user: UserModel;
  student: StudentModel;
}

export interface UserTeacher {
  user: UserModel;
  teacher: TeacherModel;
}

export interface InscriptionUserStudent {
  user: UserModel;
  student: StudentModel;
  inscription: InscriptionModel;
}

export interface ModuleUserTeacher {
  user: UserModel;
  teacher: TeacherModel;
  module: ModuleModel;
}

export interface InternInscriptionUserStudent{
  user: UserModel;
  student: StudentModel;
  inscription:InternInscriptionModel;
}
