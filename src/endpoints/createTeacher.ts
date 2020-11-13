import { Request, Response } from "express"
import { insertTeacher } from "../data/insertTeacher"
import { convertFormat } from "../services/convertFormat"
import { generateId } from "../services/generateId"
import { Teacher } from "../types/Teacher"

export const createTeacher = async (
  req: Request,
  res: Response
) => {
  try {
    const {
      name,
      birth_date,
      email,
      specialties
    } = req.body
    const newTeacher: Teacher = {
      id: generateId(),
      name,
      birth_date: convertFormat(birth_date),
      email,
      specialties: specialties || []
    }
    await insertTeacher(newTeacher)
    res.status(200).send("Novo(a) intrutor(a) criado(a)!")
  } catch (error) {
    res.status(400).send({ message: error.message })
  }
}