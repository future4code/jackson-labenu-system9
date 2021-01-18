import { StudentInputDTO } from "../model/Student"
import { BaseDatabase } from "./BaseDatabase"

export class StudentDatabase extends BaseDatabase {
  private static TABLE_NAME = "students"

  public async createStudent(student: StudentInputDTO): Promise<void> {
    try {
      const {
        id,
        name,
        email,
        birth_date
      } = student
      await this.getConnection()
        .insert({
          id,
          name,
          email,
          birth_date
        })
        .into(StudentDatabase.TABLE_NAME)
      if (student.hobbies.length) {
        for (const hobby of student.hobbies) {
          const result = await this.getConnection()
            .select("id")
            .from("hobbies")
            .where({ name: hobby })
          const hobbyId = result[0] ? result[0].id : 0
          await this.getConnection()
            .insert({
              id,
              hobbyId
            })
            .into(StudentDatabase.TABLE_NAME)
        }
      }
    } catch (error) {
      throw new Error(error.sqlMessage || error.message)
    }
  }

  public async getStudents(): Promise<any> {
    try {
      const result =
        await this.getConnection()
          .select("*")
      return result
    } catch (error) {
      throw new Error(error.sqlMessage || error.message)
    }
  }

  public async getStudentAgeById(id: number): Promise<any> {
    try {
      const result =
        await this.getConnection()
          .from(StudentDatabase.TABLE_NAME)
          .select("birth_date")
          .where("id", id)
      return result
    } catch (error) {
      throw new Error(error.sqlMessage || error.message)
    }
  }

  public async editStudent(
    studentId: string,
    missionId: string
  ): Promise<void> {
    try {
      const result =
        await this.getConnection()
          .select("*")
          .from(StudentDatabase.TABLE_NAME)
          .where({ id: studentId })
      if (!result[0][0]) {
        throw new Error("Estudante não encontrado(a)!")
      }
      await this.getConnection()
        .from(StudentDatabase.TABLE_NAME)
        .update(missionId)
        .where({ id: studentId })
    } catch (error) {
      throw new Error(error.sqlMessage || error.message)
    }
  }
}

export const studentDatabase = new StudentDatabase()