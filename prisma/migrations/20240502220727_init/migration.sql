-- CreateTable
CREATE TABLE "intern_course" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "start_at" TIMESTAMP(3) NOT NULL,
    "end_at" TIMESTAMP(3) NOT NULL,
    "img_url" TEXT NOT NULL,
    "teacher_id" INTEGER NOT NULL,

    CONSTRAINT "intern_course_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "intern_inscription" (
    "id" SERIAL NOT NULL,
    "student_id" INTEGER NOT NULL,
    "course_id" INTEGER NOT NULL,

    CONSTRAINT "intern_inscription_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "activity_intern" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "course_id" INTEGER NOT NULL,

    CONSTRAINT "activity_intern_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "submission_intern" (
    "id" SERIAL NOT NULL,
    "url_resource" TEXT NOT NULL,
    "student_id" INTEGER NOT NULL,
    "activity_id" INTEGER NOT NULL,

    CONSTRAINT "submission_intern_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "intern_course" ADD CONSTRAINT "intern_course_teacher_id_fkey" FOREIGN KEY ("teacher_id") REFERENCES "teacher"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "intern_inscription" ADD CONSTRAINT "intern_inscription_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "intern_inscription" ADD CONSTRAINT "intern_inscription_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "intern_course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "activity_intern" ADD CONSTRAINT "activity_intern_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "intern_course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "submission_intern" ADD CONSTRAINT "submission_intern_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "submission_intern" ADD CONSTRAINT "submission_intern_activity_id_fkey" FOREIGN KEY ("activity_id") REFERENCES "activity_intern"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
