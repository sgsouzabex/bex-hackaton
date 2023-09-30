import "dotenv/config";
import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSourceDBBEX = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST_BEX,
  port: Number(process.env.DB_PORT_BEX) ?? 5432,
  username: process.env.DB_USER_NAME_BEX,
  password: process.env.DB_PASSWORD_BEX,
  database: process.env.DB_DATABASE_BEX,
  synchronize: false,
  logging: false,
  entities: [__dirname + "/entities_bex/*.{js,ts}"],
  // migrations: [__dirname + "/migrations_bex/*.{js,ts}"],
});
