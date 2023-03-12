import Client from "../database";

export type Patient = {
  name: string;
  gender: string;
};

export class Patients {
  async index(): Promise<Patient[]> {
    try {
      const conn = await Client.connect();
      const sql = "SELECT * FROM patient";
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`Could not get all plants. Error: ${err}`);
    }
  }
  async create(beer: Patient): Promise<Patient> {
    try {
      const { name, gender } = beer;
      const conn = await Client.connect();
      const sql: string = `INSERT INTO patient(name, gender) VALUES($1, $2) RETURNING *`;
      // @ts-ignore
      const result: User = await conn.query(sql, [name, gender]);
      conn.release();
      //@ts-ignore
      return result.rows[0];
    } catch (err) {
      throw new Error(`Could not create user. Error: ${err}`);
    }
  }
  async show(patientname: string): Promise<Patient> {
    try {
      const conn = await Client.connect();
      const sql = `SELECT * FROM patient WHERE name = $1`;
      const result = await conn.query(sql, [patientname]);
      conn.release();

      return result.rows[0];
    } catch (err) {
      throw new Error(`Could not get user by id. Error: ${err}`);
    }
  }
  async delete(patientId: number): Promise<Patient> {
    try {
      const conn = await Client.connect();
      const sql = `delete FROM patient WHERE id = $1`;
      const result = await conn.query(sql, [patientId]);
      conn.release();

      return result.rows[0];
    } catch (err) {
      throw new Error(`Could not get user by id. Error: ${err}`);
    }
  }
  async update(id: number, patient: Patient) {
    try {
      const conn = await Client.connect();
      const sql = `update patient set name=($1), gender($2) WHERE id = $3`;
      const result = await conn.query(sql, [patient.name, patient.gender, id]);
      conn.release();
    } catch (err) {
      throw new Error(`Could not get user by id. Error: ${err}`);
    }
  }
}
