import Client from "../database";
import dotenv from "dotenv";
import { Query, QueryResult } from "pg";
// dotenv.config();
export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  gender: string;
};
export type UserC = {
  name: string;
  email: string;
  password: string;
  gender: string;
};
export class Users {
  async index(): Promise<User[]> {
    try {
      const conn = await Client.connect();
      const sql = "SELECT * FROM users";
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`Could not get all plants. Error: ${err}`);
    }
  }
  async show(id: number): Promise<User> {
    try {
      const conn = await Client.connect();
      const sql = `SELECT * FROM users WHERE id = $1`;
      const result = await conn.query(sql, [id]);
      conn.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(`Could not get user by username. Error: ${err}`);
    }
  }

  async create(user: UserC): Promise<User> {
    try {
      const { name, email, password, gender } = user;
      const conn = await Client.connect();
      const sql: string = `INSERT INTO users(name, email, password,gender) VALUES($1, $2, $3, $4)`;

      const result: QueryResult<User> = await conn.query(sql, [
        name,
        email,
        password,
        gender,
      ]);

      conn.release();
      //@ts-ignore
      return result.rows[0];
    } catch (err) {
      throw new Error(`Could not create user. Error: ${err}`);
    }
  }
  async delete(userId: number): Promise<User> {
    try {
      const conn = await Client.connect();
      const sql = `delete FROM users WHERE id = $1`;
      const result = await conn.query(sql, [userId]);
      conn.release();

      return result.rows[0];
    } catch (err) {
      throw new Error(`Could not get user by id. Error: ${err}`);
    }
  }
  async update(id: number, Auser: UserC): Promise<User> {
    try {
      const conn = await Client.connect();
      const sql = `update users set name=($1), email=($2), password=($3), gender=($4) WHERE id = $5`;
      const result = await conn.query(sql, [
        Auser.name,
        Auser.email,
        Auser.password,
        Auser.gender,
        id,
      ]);
      conn.release();
      //@ts-ignore
      return result;
    } catch (err) {
      throw new Error(`Could not get user by id. Error: ${err}`);
    }
  }
}
