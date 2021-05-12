/*
  Warnings:

  - You are about to alter the column `timestamp` on the `Activity` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `ends` on the `Activity` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.

*/
-- AlterTable
ALTER TABLE "Activity" ALTER COLUMN "timestamp" SET DATA TYPE INTEGER,
ALTER COLUMN "ends" SET DATA TYPE INTEGER;
