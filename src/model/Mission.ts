import { StudentInputDTO } from "./Student";
import { TeacherInputDTO } from "./Teacher";

export enum SHIFTS {
   INTEGRAL = "INTEGRAL",
   NOTURNA = "NOTURNA"
}

export interface MissionInputDTO {
   id: string,
   name: string,
   start_date: string,
   end_date: string
   teachers: TeacherInputDTO[],
   students: StudentInputDTO[]
   module: number,
   shift: SHIFTS
}