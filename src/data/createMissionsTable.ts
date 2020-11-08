import { connection } from "../index";

export async function createMissionsTable(): Promise<void> {
  try {
    await connection.raw(`
      CREATE TABLE missions (
        id INT PRIMARY KEY NOT NULL,
        name VARCHAR(40) NOT NULL,
        start_date DATE NOT NULL,
        end_date DATE NOT NULL,
        module INT NOT NULL
      )
    `)
    console.log("Sucesso!")
  } catch (error) {
    console.error(error)
  }
}

createMissionsTable()