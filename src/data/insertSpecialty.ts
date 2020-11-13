import { connection } from "../index"

export async function insertSpecialty(
  id: number, 
  name: string
): Promise<void> {
  await connection
    .insert({
      id,
      name,
    })
    .into("specialties")
}