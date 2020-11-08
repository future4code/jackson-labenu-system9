import { connection } from '../index'

export async function selectAgeStudentById(id: number): Promise<any> {
  try {
    const result = await connection("students").select("birth_date").where("id", id)
    return result
  } catch (error) {
    console.error(error)
  }
}