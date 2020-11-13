import { Request, Response } from "express"
import { Teacher } from "../types/Teacher"
import { selectTeachers } from "../data/selectTeachers"

export async function getTeachers (
   req: Request, 
   res: Response
) {
  try {
     const teachers: Teacher[] = await selectTeachers()
     if (!teachers.length) {
        res.statusCode = 404
        throw new Error("Instrutores não encontrados!")
     }
     res.status(200).send(teachers)
  } catch (error) {
     console.log(error)
     res.send(error.message)
  }
}