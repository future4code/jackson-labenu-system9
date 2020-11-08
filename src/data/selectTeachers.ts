import { connection } from "../index";

export async function selectTeachers(): Promise<any> {
  try {
    const result = await connection("teachers").select("*")
    return result
  } catch (error) {
    console.error(error)
  }
}