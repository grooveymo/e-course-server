-- CreateTable
CREATE TABLE "Course" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "totalModules" INTEGER NOT NULL,
    "totalModulesCompleted" INTEGER NOT NULL
);
