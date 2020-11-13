import { connection } from "../index"

export async function updateStudent(
   studentId: string,
   missionId: string
): Promise<void> {
   try {
      const result = 
         await connection
         .select("*")
         .from("students")
         .where({ id: studentId })
      if (!result[0][0]) {
         throw new Error("Estudante não encontrado(a)!")
      }
      await connection("students")
         .update(missionId)
         .where({ id: studentId })
   } catch (error) {
      throw new Error(error.sqlMessage || error.message)
   }
}