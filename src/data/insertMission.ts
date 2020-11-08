import { connection } from '../index';
import { Mission } from "../types"

export async function insertMission (mission: Mission): Promise<void> {
  const { id, name, start_date, end_date, module } = mission;
  await connection
    .insert({
      id,
      name,
      start_date,
      end_date,
      module
    })
    .into("missions")
}