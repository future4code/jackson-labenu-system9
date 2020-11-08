import { connection } from "../index";

export async function createHobbiesTable(): Promise<void> {
  try {
    await connection.raw(`
      CREATE TABLE hobbies (
        id INT PRIMARY KEY NOT NULL,
        name VARCHAR(40) NOT NULL
      )
    `)
    console.log("Sucesso!")
  } catch (error) {
    console.error(error)
  }
}

createHobbiesTable()