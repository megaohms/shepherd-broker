-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_FormData" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "companyName" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email" TEXT,
    "formTypeId" TEXT NOT NULL DEFAULT 'genLiability',
    "submittedAt" DATETIME,
    "projectName" TEXT,
    "projectAddress" TEXT,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_FormData" ("companyName", "createdAt", "email", "id", "projectAddress", "projectName", "submittedAt", "updatedAt") SELECT "companyName", "createdAt", "email", "id", "projectAddress", "projectName", "submittedAt", "updatedAt" FROM "FormData";
DROP TABLE "FormData";
ALTER TABLE "new_FormData" RENAME TO "FormData";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
