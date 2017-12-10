CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
COMMIT;

CREATE TABLE "users" (
    "id" UUID
        DEFAULT uuid_generate_v4()
        CONSTRAINT "users_pkey"
        PRIMARY KEY,
    "login" VARCHAR(50) NOT NULL,
    "password" VARCHAR(100) NOT NULL,
    "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    "updatedAt" TIMESTAMP WITH TIME ZONE DEFAULT NOW()
)
