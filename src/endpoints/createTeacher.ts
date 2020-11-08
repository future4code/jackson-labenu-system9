import { Request, Response } from "express";
import { insertTeacher } from "../data/insertTeacher";

export const createTeacher = async (req: Request, res: Response) => {
  try {
    const { id, name, email, birth_date, mission_id } = req.body
    await insertTeacher(id, name, email, birth_date, mission_id)
    res.status(200).send("Novo(a) intrutor(a) criado(a)!")
  } catch (error) {
    res.status(400).send({ message: error.message })
  }
}