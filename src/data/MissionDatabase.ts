import { MissionInputDTO } from "../model/Mission"
import { BaseDatabase } from "./BaseDatabase"

export class MissionDatabase extends BaseDatabase {
  private static TABLE_NAME = "hobbies"

  public async createMission(mission: MissionInputDTO): Promise<void> {
    const {
      id,
      name,
      start_date,
      end_date,
      module,
      shift
    } = mission
    await this.getConnection()
      .insert({
        id,
        name,
        start_date,
        end_date,
        module,
        shift
      })
      .into(MissionDatabase.TABLE_NAME)
  }
}

export const missionDatabase = new MissionDatabase()