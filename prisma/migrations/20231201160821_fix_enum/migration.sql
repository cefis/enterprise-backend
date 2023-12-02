/*
  Warnings:

  - The values [Teacher,Student] on the enum `TypeUser` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "TypeUser_new" AS ENUM ('TEACHER', 'STUDENT');
ALTER TABLE "users" ALTER COLUMN "type" TYPE "TypeUser_new" USING ("type"::text::"TypeUser_new");
ALTER TYPE "TypeUser" RENAME TO "TypeUser_old";
ALTER TYPE "TypeUser_new" RENAME TO "TypeUser";
DROP TYPE "TypeUser_old";
COMMIT;

-- AlterTable
ALTER TABLE "courses" ADD COLUMN     "deletedAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "deletedAt" TIMESTAMP(3);
