import { Request, Response } from "express"
import { Student } from "../types/Student"
import { selectStudents } from "../data/selectStudents"

export async function getStudents (
   req: Request, 
   res: Response
) {
  try {
     const students: Student[] = await selectStudents()
     if (!students.length) {
        res.statusCode = 404
        throw new Error("Estudantes não encontrados!")
     }
     res.status(200).send(students)
  } catch (error) {
     console.log(error)
     res.send(error.message)
  }
}