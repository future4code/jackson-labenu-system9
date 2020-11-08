import { connection } from "../index";

export async function createStudentsTable(): Promise<void> {
  try {
    await connection.raw(`
      CREATE TABLE students (
        id INT PRIMARY KEY NOT NULL,
        name VARCHAR(50) NOT NULL,
        email VARCHAR(50) NOT NULL UNIQUE,
        birth_date DATE NOT NULL,
        mission_id INT,
        FOREIGN KEY (mission_id ) REFERENCES missions(id)
      )
    `)
    console.log("Sucesso!")
  } catch (error) {
    console.error(error)
  }
}

createStudentsTable()