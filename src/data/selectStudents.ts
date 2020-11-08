import { connection } from "../index";

export async function selectStudents(): Promise<any> {
  try {
    const result = await connection("students").select("*")
    return result
  } catch (error) {
    console.error(error)
  }
}