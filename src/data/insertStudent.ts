import { connection } from "../index"
import { Student } from "../types/Student"

export const insertStudent = async (
  student: Student
): Promise<void> => {
  try {
    const { 
      id, 
      name, 
      email, 
      birth_date 
    } = student
    await connection
      .insert({
        id,
        name,
        email,
        birth_date
      })
      .into("students")
    if (student.hobbies.length) {
      for (const hobby of student.hobbies) {
        const result = await connection
          .select("id")
          .from("hobbies")
          .where({ name: hobby })
        const hobbyId = result[0] ? result[0].id : 0
        await connection
          .insert({
            id,
            hobbyId
          })
          .into("students")
      }
    }
  } catch (error) {
    throw new Error(error.sqlMessage || error.message)
  }
}