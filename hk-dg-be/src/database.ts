import pkg from "pg";
import * as dotenv from "dotenv";
const { Pool } = pkg;
dotenv.config();
const { DB_HOST, DB_NAME, DB_USER, DB_PASS } =
  process.env;

export default new Pool({
  host: DB_HOST?.trim(),
  database: DB_NAME?.trim(),
  user: DB_USER?.trim(),
  password: DB_PASS?.trim(),
});
