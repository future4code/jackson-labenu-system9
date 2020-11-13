import { connection } from "../index"

export async function selectStudentAgeById(
  id: number
): Promise<any> {
  try {
    const result = 
      await connection("students")
      .select("birth_date")
      .where("id", id)
    return result
  } catch (error) {
    throw new Error(error.sqlMessage || error.message)
  }
}