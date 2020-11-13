import { Student } from "./Student"
import { Teacher } from "./Teacher"

export enum SHIFTS {
   INTEGRAL = "INTEGRAL",
   NOTURNA = "NOTURNA"
}

export type Mission = {
   id: string,
   name: string,
   start_date: string,
   end_date: string
   teachers: Teacher[],
   students: Student[]
   module: number,
   shift: SHIFTS
}