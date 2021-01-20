import { Request, Response } from "express";
import { studentDatabase } from "../data/StudentDatabase";
import { convertFormat } from "../services/convertFormat";
import { idGenerator } from "../services/generateId";
import { StudentInputDTO } from "../model/Student";

export const createStudent = async (
  req: Request, 
  res: Response
) => {
  try {
    const id = idGenerator.generate();
    const { 
      name, 
      birth_date, 
      email, 
      hobbies 
    } = req.body
    const newStudent: StudentInputDTO = {
      id,
      name,
      birth_date: convertFormat(birth_date),
      email,
      hobbies: hobbies || []
   }
    await studentDatabase.createStudent(newStudent)
    res.status(200).send("Novo(a) estudante criado(a)!")
  } catch (error) {
    res.status(400).send({ message: error.message })
  }
}