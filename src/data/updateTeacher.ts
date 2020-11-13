import { connection } from "../index"

export async function updateTeacher(
   teacherId: string,
   missionId: string
): Promise<void> {
   try {
      const result = 
         await connection
         .select("*")
         .from("teachers")
         .where({ id: teacherId })
      if (!result[0][0]) { 
         throw new Error("Instrutor(a) não encontrado(a)!")
      }
      await connection("teachers")
         .update(missionId)
         .where({ id: teacherId })
   } catch (error) {
      throw new Error(error.sqlMessage || error.message)
   }
}