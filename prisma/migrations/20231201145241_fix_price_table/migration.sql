/*
  Warnings:

  - You are about to drop the column `courseAnswerPrice` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `courseHourPrice` on the `users` table. All the data in the column will be lost.
  - Changed the type of `type` on the `users` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "TypeUser" AS ENUM ('Teacher', 'Student');

-- AlterTable
ALTER TABLE "courses" ADD COLUMN     "courseAnswerPrice" INTEGER,
ADD COLUMN     "courseHourPrice" INTEGER;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "courseAnswerPrice",
DROP COLUMN "courseHourPrice",
DROP COLUMN "type",
ADD COLUMN     "type" "TypeUser" NOT NULL;

-- DropEnum
DROP TYPE "Type";
