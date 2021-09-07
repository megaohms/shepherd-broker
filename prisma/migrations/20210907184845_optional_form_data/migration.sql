/*
  Warnings:

  - You are about to drop the column `title` on the `FormData` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "FormData.email_unique";

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_FormData" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email" TEXT,
    "submittedAt" DATETIME,
    "companyName" TEXT NOT NULL,
    "projectName" TEXT,
    "projectAddress" TEXT
);
INSERT INTO "new_FormData" ("companyName", "createdAt", "email", "id", "projectAddress", "projectName", "submittedAt", "updatedAt") SELECT "companyName", "createdAt", "email", "id", "projectAddress", "projectName", "submittedAt", "updatedAt" FROM "FormData";
DROP TABLE "FormData";
ALTER TABLE "new_FormData" RENAME TO "FormData";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
