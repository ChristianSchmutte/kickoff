/*
  Warnings:

  - A unique constraint covering the columns `[oauthId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `oauthId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "oauthId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User.oauthId_unique" ON "User"("oauthId");
