import { StudentInputDTO } from "./Student";
import { TeacherInputDTO } from "./Teacher";

export class Mission {
   constructor(
      private id: string,
      private name: string,
      private start_date: string,
      private end_date: string,
      private teachers: TeacherInputDTO[],
      private students: StudentInputDTO[],
      private module: number,
      private shift: SHIFTS
   ) { }

   getId() {
       return this.id
   }
   getName() {
       return this.name
   }
   getStartDate() {
       return this.start_date
   }
   getEndDate() {
       return this.end_date
   }
   getTeachers() {
       return this.teachers
   }
   getStudents() {
       return this.students
   }
   getModule() {
       return this.module
   }
   getShift() {
       return this.shift
   }
   setId(id: string) {
       this.id = id
   }
   setName(name: string) {
       this.name = name
   }
   setStartDate(startDate: string) {
       this.start_date = startDate
   }
   setEndDate(endDate: string) {
       this.end_date = endDate
   }
   setTeachers(teachers: TeacherInputDTO[]) {
       this.teachers = teachers
   }
   setStudents(students: StudentInputDTO[]) {
       this.students = students
   }
   setModule(module: number) {
       this.module = module
   }
   setShift(shift: SHIFTS) {
       this.shift = shift
   }
}

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