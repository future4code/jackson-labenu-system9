import { BaseDatabase } from "./BaseDatabase"

export class HobbyDatabase extends BaseDatabase {
  private static TABLE_NAME = "hobbies"

  public async createHobby(
    id: string,
    name: string
  ): Promise<void> {
    await this.getConnection()
      .insert({
        id,
        name,
      })
      .into(HobbyDatabase.TABLE_NAME)
  }
}

export const hobbyDatabase = new HobbyDatabase()