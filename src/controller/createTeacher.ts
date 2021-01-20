import { Request, Response } from "express";
import { teacherDatabase } from "../data/TeacherDatabase";
import { convertFormat } from "../services/convertFormat";
import { idGenerator } from "../services/generateId";
import { TeacherInputDTO } from "../model/Teacher";

export const createTeacher = async (
  req: Request,
  res: Response
) => {
  try {
    const id = idGenerator.generate();
    const {
      name,
      birth_date,
      email,
      specialties
    } = req.body
    const newTeacher: TeacherInputDTO = {
      id,
      name,
      birth_date: convertFormat(birth_date),
      email,
      specialties: specialties || []
    }
    await teacherDatabase.createTeacher(newTeacher)
    res.status(200).send("Novo(a) intrutor(a) criado(a)!")
  } catch (error) {
    res.status(400).send({ message: error.message })
  }
}