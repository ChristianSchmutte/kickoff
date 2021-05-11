/*
  Warnings:

  - Added the required column `timestamp` to the `Activity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ends` to the `Activity` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Activity" ADD COLUMN     "timestamp" BIGINT NOT NULL,
ADD COLUMN     "ends" BIGINT NOT NULL;
