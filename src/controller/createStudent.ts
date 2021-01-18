import { Request, Response } from "express"
import { insertStudent } from "../data/insertStudent"
import { convertFormat } from "../services/convertFormat"
import { generateId } from "../services/generateId"
import { Student } from "../types/Student"

export const createStudent = async (
  req: Request, 
  res: Response
) => {
  try {
    const { 
      name, 
      birth_date, 
      email, 
      hobbies 
    } = req.body
    const newStudent: Student = {
      id: generateId(),
      name,
      birth_date: convertFormat(birth_date),
      email,
      hobbies: hobbies || []
   }
    await insertStudent(newStudent)
    res.status(200).send("Novo(a) estudante criado(a)!")
  } catch (error) {
    res.status(400).send({ message: error.message })
  }
}