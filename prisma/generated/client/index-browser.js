
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  detectRuntime,
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.4.2
 * Query Engine version: ac9d7041ed77bcc8a8dbd2ab6616b39013829574
 */
Prisma.prismaVersion = {
  client: "5.4.2",
  engine: "ac9d7041ed77bcc8a8dbd2ab6616b39013829574"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  username: 'username',
  password: 'password',
  email: 'email',
  rol: 'rol',
  photo_url: 'photo_url'
};

exports.Prisma.StudentScalarFieldEnum = {
  id: 'id',
  names: 'names',
  last_names: 'last_names',
  ID_card_url: 'ID_card_url',
  study_certificate_url: 'study_certificate_url',
  user_id: 'user_id'
};

exports.Prisma.TeacherScalarFieldEnum = {
  id: 'id',
  names: 'names',
  last_names: 'last_names',
  ID_card_url: 'ID_card_url',
  cv_url: 'cv_url',
  third_level_degree: 'third_level_degree',
  user_id: 'user_id'
};

exports.Prisma.InscriptionScalarFieldEnum = {
  id: 'id',
  student_id: 'student_id',
  course_id: 'course_id'
};

exports.Prisma.CourseScalarFieldEnum = {
  id: 'id',
  topic: 'topic',
  content: 'content',
  start_at: 'start_at',
  end_at: 'end_at',
  modality: 'modality',
  objective: 'objective',
  periods: 'periods',
  qualification: 'qualification',
  requirements: 'requirements',
  type: 'type',
  visible: 'visible',
  img_url: 'img_url'
};

exports.Prisma.ModuleScalarFieldEnum = {
  id: 'id',
  title: 'title',
  content: 'content',
  hours: 'hours',
  img_url: 'img_url',
  teacher_id: 'teacher_id',
  course_id: 'course_id'
};

exports.Prisma.Module_resourceScalarFieldEnum = {
  id: 'id',
  url_resource: 'url_resource',
  module_id: 'module_id',
  title: 'title'
};

exports.Prisma.SectionScalarFieldEnum = {
  id: 'id',
  title: 'title',
  content: 'content',
  module_id: 'module_id'
};

exports.Prisma.Section_resourceScalarFieldEnum = {
  id: 'id',
  url_resource: 'url_resource',
  section_id: 'section_id',
  title: 'title'
};

exports.Prisma.ActivityScalarFieldEnum = {
  id: 'id',
  title: 'title',
  content: 'content',
  time_due: 'time_due',
  section_id: 'section_id'
};

exports.Prisma.Activity_resourceScalarFieldEnum = {
  id: 'id',
  url_resource: 'url_resource',
  activity_id: 'activity_id',
  title: 'title'
};

exports.Prisma.SubmissionScalarFieldEnum = {
  id: 'id',
  grade: 'grade',
  comment: 'comment',
  state_sub: 'state_sub',
  state_gra: 'state_gra',
  student_id: 'student_id',
  activity_id: 'activity_id'
};

exports.Prisma.Submission_resourceScalarFieldEnum = {
  id: 'id',
  url_resource: 'url_resource',
  submission_id: 'submission_id',
  title: 'title'
};

exports.Prisma.AsistanceScalarFieldEnum = {
  id: 'id',
  description: 'description',
  date: 'date',
  module_id: 'module_id'
};

exports.Prisma.Asistance_registerScalarFieldEnum = {
  id: 'id',
  status: 'status',
  student_id: 'student_id',
  asistance_id: 'asistance_id'
};

exports.Prisma.Intern_cvScalarFieldEnum = {
  id: 'id',
  name: 'name',
  phone: 'phone',
  email: 'email',
  cv_url: 'cv_url'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};
exports.Role = exports.$Enums.Role = {
  ADMIN: 'ADMIN',
  USER: 'USER',
  TEACHER: 'TEACHER',
  STUDENT: 'STUDENT'
};

exports.StatusAsistance = exports.$Enums.StatusAsistance = {
  PRESENTE: 'PRESENTE',
  ATRASO: 'ATRASO',
  FALTA: 'FALTA'
};

exports.Prisma.ModelName = {
  user: 'user',
  student: 'student',
  teacher: 'teacher',
  inscription: 'inscription',
  course: 'course',
  module: 'module',
  module_resource: 'module_resource',
  section: 'section',
  section_resource: 'section_resource',
  activity: 'activity',
  activity_resource: 'activity_resource',
  submission: 'submission',
  submission_resource: 'submission_resource',
  asistance: 'asistance',
  asistance_register: 'asistance_register',
  intern_cv: 'intern_cv'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        const runtime = detectRuntime()
        const edgeRuntimeName = {
          'workerd': 'Cloudflare Workers',
          'deno': 'Deno and Deno Deploy',
          'netlify': 'Netlify Edge Functions',
          'edge-light': 'Vercel Edge Functions',
        }[runtime]

        let message = 'PrismaClient is unable to run in '
        if (edgeRuntimeName !== undefined) {
          message += edgeRuntimeName + '. As an alternative, try Accelerate: https://pris.ly/d/accelerate.'
        } else {
          message += 'this browser environment, or has been bundled for the browser (running in `' + runtime + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://github.com/prisma/prisma/issues`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
