import "dotenv/config";
import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSourceDBBERN = new DataSource({
  type: "sqlserver",
  host: process.env.DB_HOST_BERN,
  port: Number(process.env.DB_PORT_BERN) ?? 1433,
  username: process.env.DB_USER_NAME_BERN,
  password: process.env.DB_PASSWORD_BERN,
  database: process.env.DB_DATABASE_BERN,
  synchronize: false,
  logging: false,
  / entities: [__dirname + "/entities_bex/*.{js,ts}"],
  // migrations: [__dirname + "/migrations_bex/*.{js,ts}"],
});
