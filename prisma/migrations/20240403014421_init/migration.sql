-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'USER', 'TEACHER', 'STUDENT');

-- CreateEnum
CREATE TYPE "StatusAsistance" AS ENUM ('PRESENTE', 'ATRASO', 'FALTA');

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "rol" "Role" NOT NULL DEFAULT 'USER',
    "photo_url" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "student" (
    "id" SERIAL NOT NULL,
    "names" TEXT NOT NULL,
    "last_names" TEXT NOT NULL,
    "ID_card_url" TEXT NOT NULL,
    "study_certificate_url" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "teacher" (
    "id" SERIAL NOT NULL,
    "names" TEXT NOT NULL,
    "last_names" TEXT NOT NULL,
    "ID_card_url" TEXT NOT NULL,
    "cv_url" TEXT NOT NULL,
    "third_level_degree" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "teacher_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "inscription" (
    "id" SERIAL NOT NULL,
    "student_id" INTEGER NOT NULL,
    "course_id" INTEGER NOT NULL,

    CONSTRAINT "inscription_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "course" (
    "id" SERIAL NOT NULL,
    "topic" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "start_at" TIMESTAMP(3) NOT NULL,
    "end_at" TIMESTAMP(3) NOT NULL,
    "modality" TEXT NOT NULL,
    "objective" TEXT NOT NULL,
    "periods" INTEGER NOT NULL,
    "qualification" TEXT NOT NULL,
    "requirements" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "visible" BOOLEAN NOT NULL,
    "img_url" TEXT NOT NULL,

    CONSTRAINT "course_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "module" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "hours" INTEGER NOT NULL,
    "img_url" TEXT NOT NULL,
    "teacher_id" INTEGER NOT NULL,
    "course_id" INTEGER NOT NULL,

    CONSTRAINT "module_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "module_resource" (
    "id" SERIAL NOT NULL,
    "url_resource" TEXT NOT NULL,
    "module_id" INTEGER NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "module_resource_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "section" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "module_id" INTEGER NOT NULL,

    CONSTRAINT "section_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "section_resource" (
    "id" SERIAL NOT NULL,
    "url_resource" TEXT NOT NULL,
    "section_id" INTEGER NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "section_resource_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "activity" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "time_due" TIMESTAMP(3) NOT NULL,
    "ponderation" INTEGER NOT NULL,
    "section_id" INTEGER NOT NULL,

    CONSTRAINT "activity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "activity_resource" (
    "id" SERIAL NOT NULL,
    "url_resource" TEXT NOT NULL,
    "activity_id" INTEGER NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "activity_resource_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "submission" (
    "id" SERIAL NOT NULL,
    "grade" DOUBLE PRECISION NOT NULL,
    "comment" TEXT NOT NULL,
    "state_sub" TEXT NOT NULL,
    "state_gra" TEXT NOT NULL,
    "student_id" INTEGER NOT NULL,
    "activity_id" INTEGER NOT NULL,

    CONSTRAINT "submission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "submission_resource" (
    "id" SERIAL NOT NULL,
    "url_resource" TEXT NOT NULL,
    "submission_id" INTEGER NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "submission_resource_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "asistance" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "module_id" INTEGER NOT NULL,

    CONSTRAINT "asistance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "asistance_register" (
    "id" SERIAL NOT NULL,
    "status" "StatusAsistance" NOT NULL DEFAULT 'PRESENTE',
    "student_id" INTEGER NOT NULL,
    "asistance_id" INTEGER NOT NULL,

    CONSTRAINT "asistance_register_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "intern_cv" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cv_url" TEXT NOT NULL,

    CONSTRAINT "intern_cv_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_username_key" ON "user"("username");

-- AddForeignKey
ALTER TABLE "student" ADD CONSTRAINT "student_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "teacher" ADD CONSTRAINT "teacher_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "inscription" ADD CONSTRAINT "inscription_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "inscription" ADD CONSTRAINT "inscription_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "module" ADD CONSTRAINT "module_teacher_id_fkey" FOREIGN KEY ("teacher_id") REFERENCES "teacher"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "module" ADD CONSTRAINT "module_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "module_resource" ADD CONSTRAINT "module_resource_module_id_fkey" FOREIGN KEY ("module_id") REFERENCES "module"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "section" ADD CONSTRAINT "section_module_id_fkey" FOREIGN KEY ("module_id") REFERENCES "module"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "section_resource" ADD CONSTRAINT "section_resource_section_id_fkey" FOREIGN KEY ("section_id") REFERENCES "section"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "activity" ADD CONSTRAINT "activity_section_id_fkey" FOREIGN KEY ("section_id") REFERENCES "section"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "activity_resource" ADD CONSTRAINT "activity_resource_activity_id_fkey" FOREIGN KEY ("activity_id") REFERENCES "activity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "submission" ADD CONSTRAINT "submission_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "submission" ADD CONSTRAINT "submission_activity_id_fkey" FOREIGN KEY ("activity_id") REFERENCES "activity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "submission_resource" ADD CONSTRAINT "submission_resource_submission_id_fkey" FOREIGN KEY ("submission_id") REFERENCES "submission"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "asistance" ADD CONSTRAINT "asistance_module_id_fkey" FOREIGN KEY ("module_id") REFERENCES "module"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "asistance_register" ADD CONSTRAINT "asistance_register_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "asistance_register" ADD CONSTRAINT "asistance_register_asistance_id_fkey" FOREIGN KEY ("asistance_id") REFERENCES "asistance"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
