import { connection } from "../index";
import { Main } from "../types";

export const insertTeacher = async (teacher: Main): Promise<void> => {
  const { id, name, email, birth_date, mission_id } = teacher;
  await connection
    .insert({
      id,
      name,
      email,
      birth_date,
      mission_id
    })
    .into("teachers");
};