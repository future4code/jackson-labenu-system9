import { connection } from "../index";
import { Main } from "../types";

export const insertStudent = async (student: Main): Promise<void> => {
  const { id, name, email, birth_date, mission_id } = student;
  await connection
    .insert({
      id,
      name,
      email,
      birth_date,
      mission_id
    })
    .into("students");
};