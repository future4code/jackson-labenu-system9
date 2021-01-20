import { Request, Response } from "express"
import { hobbyDatabase } from "../data/HobbyDatabase";
import { idGenerator } from "../services/generateId";

export const createHobby = async (
  req: Request, 
  res: Response
) => {
  try {
    const id = idGenerator.generate();
    const { name } = req.body
    await hobbyDatabase.createHobby(id, name)
    res.status(200).send("Novo hobby criado!")
  } catch (error) {
    res.status(400).send({ message: error.message })
  }
}