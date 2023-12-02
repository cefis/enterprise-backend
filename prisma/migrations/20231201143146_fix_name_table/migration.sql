/*
  Warnings:

  - You are about to drop the column `coursePriceAnswer` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `coursePriceHour` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "coursePriceAnswer",
DROP COLUMN "coursePriceHour",
ADD COLUMN     "courseAnswerPrice" INTEGER,
ADD COLUMN     "courseHourPrice" INTEGER;
