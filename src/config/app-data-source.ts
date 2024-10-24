import "dotenv/config";
import { DataSource } from "typeorm";

export const myDataSouce = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  database: process.env.DB_NAME,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  entities: ["src/entities/*.ts"],
  migrations: ["db/migrations/*.ts"],
  ssl: true,
  logging: true,
});
