import { Request, Response } from "express"
import { insertHobby } from "../data/insertHobby"

export const createHobby = async (
  req: Request, 
  res: Response
) => {
  try {
    const { 
      id, 
      name 
    } = req.body
    await insertHobby(id, name)
    res.status(200).send("Novo hobby criado!")
  } catch (error) {
    res.status(400).send({ message: error.message })
  }
}