import { connection } from "../index"
import { Mission } from "../types/Mission"

export async function insertMission (
  mission: Mission
): Promise<void> {
  const { 
    id, 
    name, 
    start_date, 
    end_date, 
    module, 
    shift 
  } = mission
  await connection
    .insert({
      id,
      name,
      start_date,
      end_date,
      module,
      shift
    })
    .into("missions")
}