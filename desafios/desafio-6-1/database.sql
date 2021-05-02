CREATE TABLE "customers" (
  "id" SERIAL PRIMARY KEY,
  "name" int NOT NULL,
  "cpf" int NOT NULL,
  "rg" int NOT NULL,
  "telefone" int NOT NULL,
  "created_at" timestamp DEFAULT (now()),
  "updated_at" timestamp DEFAULT (now())
);

CREATE TABLE "agencies" (
  "id" SERIAL PRIMARY KEY,
  "address_id" int UNIQUE,
  "name" text NOT NULL,
  "description" text NOT NULL,
  "created_at" timestamp DEFAULT (now()),
  "updated_at" timestamp DEFAULT (now())
);

CREATE TABLE "addresses" (
  "id" SERIAL PRIMARY KEY,
  "rua" text NOT NULL,
  "bairro" text NOT NULL,
  "numero" int NOT NULL,
  "estado" text NOT NULL,
  "cidade" text NOT NULL,
  "complemento" text,
  "created_at" timestamp DEFAULT (now()),
  "updated_at" timestamp DEFAULT (now())
);

CREATE TABLE "cars" (
  "id" SERIAL PRIMARY KEY,
  "model_id" int UNIQUE,
  "cor" text NOT NULL,
  "placa" text NOT NULL UNIQUE,
  "created_at" timestamp DEFAULT (now()),
  "updated_at" timestamp DEFAULT (now())
);

CREATE TABLE "models" (
  "id" SERIAL PRIMARY KEY,
  "marca" text NOT NULL,
  "modelo" text NOT NULL,
  "categoria" text NOT NULL,
  "quantity" int DEFAULT 0,
  "status" int DEFAULT 1,
  "created_at" timestamp DEFAULT (now()),
  "updated_at" timestamp DEFAULT (now())
);

CREATE TABLE "orders" (
  "id" SERIAL PRIMARY KEY,
  "agency_id" int UNIQUE,
  "car_id" int UNIQUE,
  "customer_id" int UNIQUE,
  "price" int NOT NULL,
  "description" text NOT NULL,
  "created_at" timestamp DEFAULT (now()),
  "updated_at" timestamp DEFAULT (now())
);

ALTER TABLE "addresses" ADD FOREIGN KEY ("id") REFERENCES "agencies" ("address_id");

ALTER TABLE "cars" ADD FOREIGN KEY ("model_id") REFERENCES "models" ("id");

ALTER TABLE "orders" ADD FOREIGN KEY ("agency_id") REFERENCES "agencies" ("id");

ALTER TABLE "orders" ADD FOREIGN KEY ("car_id") REFERENCES "cars" ("id");

ALTER TABLE "orders" ADD FOREIGN KEY ("customer_id") REFERENCES "customers" ("id");
