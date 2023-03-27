-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Action" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "startDate" DATETIME NOT NULL,
    "orderDate" DATETIME NOT NULL,
    "collectDate" DATETIME NOT NULL,
    "payDate" DATETIME NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT,
    "rules" TEXT,
    "collection" TEXT,
    "payment" TEXT,
    "paylock" BOOLEAN NOT NULL DEFAULT false,
    "productsListOpen" BOOLEAN NOT NULL DEFAULT false,
    "constantPrice" INTEGER NOT NULL DEFAULT 0,
    "discount" INTEGER NOT NULL DEFAULT 0,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Action_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Action" ("collectDate", "description", "id", "image", "name", "orderDate", "payDate", "startDate", "userId") SELECT "collectDate", "description", "id", "image", "name", "orderDate", "payDate", "startDate", "userId" FROM "Action";
DROP TABLE "Action";
ALTER TABLE "new_Action" RENAME TO "Action";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
