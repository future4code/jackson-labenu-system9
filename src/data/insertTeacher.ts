import { connection } from "../index"
import { Teacher } from "../types/Teacher"

export const insertTeacher = async (
  teacher: Teacher
): Promise<void> => {
  try {
    const {
      id,
      name,
      email,
      birth_date
    } = teacher
    await connection
      .insert({
        id,
        name,
        email,
        birth_date
      })
      .into("teachers")
    if (teacher.specialties.length) {
      for (const specialty of teacher.specialties) {
        const result = await connection
          .select("id")
          .from("specialties")
          .where({ name: specialty })
        const specialtyId = result[0] ? result[0].id : 0
        await connection
          .insert({
            id,
            specialtyId
          })
          .into("teachers")
      }
    }
  } catch (error) {
    throw new Error(error.sqlMessage || error.message)
  }
}