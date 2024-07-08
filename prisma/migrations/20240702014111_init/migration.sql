/*
  Warnings:

  - Added the required column `is_start` to the `course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `is_start` to the `intern_course` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "course" ADD COLUMN     "is_start" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "intern_course" ADD COLUMN     "is_start" BOOLEAN NOT NULL;

-- CreateTable
CREATE TABLE "resources" (
    "id" SERIAL NOT NULL,
    "url_resource" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "resources_pkey" PRIMARY KEY ("id")
);
