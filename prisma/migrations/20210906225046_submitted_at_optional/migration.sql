/*
  Warnings:

  - You are about to drop the `Form` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Form";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "FormData" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email" TEXT NOT NULL,
    "submittedAt" DATETIME,
    "companyName" TEXT NOT NULL,
    "projectName" TEXT NOT NULL,
    "projectAddress" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "FormData.email_unique" ON "FormData"("email");
