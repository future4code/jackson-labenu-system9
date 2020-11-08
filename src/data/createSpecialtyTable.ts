import { connection } from "../index";

export async function createSpecialtiesTable(): Promise<void> {
  try {
    await connection.raw(`
      CREATE TABLE specialties (
        id INT PRIMARY KEY NOT NULL,
        name VARCHAR(40) NOT NULL
      )
    `)
    console.log("Sucesso!")
  } catch (error) {
    console.error(error)
  }
}

createSpecialtiesTable()