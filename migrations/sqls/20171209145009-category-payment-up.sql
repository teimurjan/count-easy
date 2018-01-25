CREATE TABLE "categories" (
    "id" UUID
        DEFAULT uuid_generate_v4()
        CONSTRAINT "categories_pkey"
        PRIMARY KEY,
    "name" VARCHAR(100) NOT NULL,
    "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    "updatedAt" TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
CREATE TABLE "payments" (
    "id" UUID
        DEFAULT uuid_generate_v4()
        CONSTRAINT "payments_pkey"
        PRIMARY KEY,
    "amount" INTEGER NOT NULL,
    "date" TIMESTAMP WITH TIME ZONE DEFAULT NOW(),    
    "categoryId" UUID
        CONSTRAINT payments_categories_fkey
        REFERENCES "categories",
    "userId" UUID
        CONSTRAINT payments_users_fkey
        REFERENCES "users",
    "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    "updatedAt" TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
