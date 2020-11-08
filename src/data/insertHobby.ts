import { connection } from '../index';

export async function insertHobby(
  id: number, 
  name: string
): Promise<void> {
  await connection
    .insert({
      id,
      name,
    })
    .into("hobbies")
}