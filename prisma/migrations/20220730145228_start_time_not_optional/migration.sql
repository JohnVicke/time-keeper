/*
  Warnings:

  - Made the column `workDayId` on table `WorkDayTimeEntry` required. This step will fail if there are existing NULL values in that column.
  - Made the column `startTime` on table `WorkDayTimeEntry` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "WorkDayTimeEntry" ALTER COLUMN "workDayId" SET NOT NULL,
ALTER COLUMN "startTime" SET NOT NULL;
