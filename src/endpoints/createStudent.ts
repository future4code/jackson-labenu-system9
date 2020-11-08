import { Request, Response } from "express";
import { insertStudent } from "../data/insertStudent";

export const createStudent = async (req: Request, res: Response) => {
  try {
    const { id, name, email, birth_date, mission_id } = req.body
    await insertStudent(id, name, email, birth_date, mission_id)
    res.status(200).send("Novo estudante criado!")
  } catch (error) {
    res.status(400).send({ message: error.message })
  }
}