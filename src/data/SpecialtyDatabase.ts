import { BaseDatabase } from "./BaseDatabase"

export class SpecialtyDatabase extends BaseDatabase {
  private static TABLE_NAME = "specialties"

  async createSpecialty(
    id: number, 
    name: string
  ): Promise<void> {
    await this.getConnection()
      .insert({
        id,
        name,
      })
      .into(SpecialtyDatabase.TABLE_NAME)
  }
 
}

export const specialtyDatabase = new SpecialtyDatabase()