/*
  Warnings:

  - You are about to drop the column `ID_card_url` on the `student` table. All the data in the column will be lost.
  - You are about to drop the column `last_names` on the `student` table. All the data in the column will be lost.
  - You are about to drop the column `names` on the `student` table. All the data in the column will be lost.
  - You are about to drop the column `ID_card_url` on the `teacher` table. All the data in the column will be lost.
  - You are about to drop the column `last_names` on the `teacher` table. All the data in the column will be lost.
  - You are about to drop the column `names` on the `teacher` table. All the data in the column will be lost.
  - Added the required column `date` to the `inscription` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date` to the `intern_cv` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date` to the `intern_inscription` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date` to the `submission` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date` to the `submission_intern` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ID_card_url` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `last_names` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `names` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "inscription" ADD COLUMN     "date" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "intern_cv" ADD COLUMN     "date" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "intern_inscription" ADD COLUMN     "date" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "student" DROP COLUMN "ID_card_url",
DROP COLUMN "last_names",
DROP COLUMN "names";

-- AlterTable
ALTER TABLE "submission" ADD COLUMN     "date" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "submission_intern" ADD COLUMN     "date" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "teacher" DROP COLUMN "ID_card_url",
DROP COLUMN "last_names",
DROP COLUMN "names";

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "ID_card_url" TEXT NOT NULL,
ADD COLUMN     "last_names" TEXT NOT NULL,
ADD COLUMN     "names" TEXT NOT NULL;
