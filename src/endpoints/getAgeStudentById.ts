import { Request, Response } from "express"
import { selectAgeStudentById } from "../data/selectAgeStudentById";

export const getAgeStudentById = async (req: Request, res: Response): Promise<any> => {
  try {
    const id = Number(req.params.id);
    const student = (await (selectAgeStudentById(id)))[0];
    if (!student) {
      res.statusCode = 400;
      throw new Error("Estudante não encontrado. Insira um ID válido!");
    }
    const studentBirthdate = student.birth_date;
    const date: Date = new Date(studentBirthdate)
    const ageInMilisseconds: number = Date.now() - date.getTime();
    const age: number = Math.floor(ageInMilisseconds / 1000 / 60 / 60 / 24 / 365);
    res.status(200).send({ message: `${student.name}:  ${age} years` });
  } catch (error) {
    res.status(400).send({ message: error.message || error.sqlMessage });
  }
}