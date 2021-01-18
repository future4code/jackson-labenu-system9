import { BaseDatabase } from "./BaseDatabase";
import { SPECIALTIES, TeacherInputDTO } from "./../model/Teacher"

export class TeacherDatabase extends BaseDatabase {
  private static TABLE_NAME = "teachers"

  public async createTeacher(
    teacher: TeacherInputDTO
  ): Promise<void> {
    try {
      const {
        id,
        name,
        email,
        birth_date
      } = teacher
      await this.getConnection()
        .insert({
          id,
          name,
          email,
          birth_date
        })
        .into(TeacherDatabase.TABLE_NAME)
      if (teacher.specialties.length) {
        for (const specialty of teacher.specialties) {
          const result = await this.getConnection()
            .select("id")
            .from("specialties")
            .where({ name: specialty })
          const specialtyId = result[0] ? result[0].id : 0
          await this.getConnection()
            .insert({
              id,
              specialtyId
            })
            .into(TeacherDatabase.TABLE_NAME)
        }
      }
    } catch (error) {
      throw new Error(error.sqlMessage || error.message)
    }
  }

  public async getTeachers(): Promise<any> {
    try {
      const result =
        await this.getConnection()
          .select("*")
          .from(TeacherDatabase.TABLE_NAME)
      return result
    } catch (error) {
      throw new Error(error.sqlMessage || error.message)
    }
  }

  public async editTeacher(
    teacherId: string,
    missionId: string
  ): Promise<void> {
    try {
      const result =
        await this.getConnection()
          .select("*")
          .from(TeacherDatabase.TABLE_NAME)
          .where({ id: teacherId })
      if (!result[0][0]) {
        throw new Error("Instrutor(a) não encontrado(a)!")
      }
      await this.getConnection()
        .from(TeacherDatabase.TABLE_NAME)
        .update(missionId)
        .where({ id: teacherId })
    } catch (error) {
      throw new Error(error.sqlMessage || error.message)
    }
  }
}