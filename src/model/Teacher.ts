export class Specialties {
   constructor(
      private id: string,
      private name: string,
      private email: string,
      private birth_date: string,
      private specialties: SPECIALTIES[]
   ) { }

   getId() {
       return this.id
   }
   getName() {
       return this.name
   }
   getEmail() {
       return this.email
   }
   getBirthDate() {
       return this.birth_date
   }
   getSpecialties() {
       return this.specialties
   }
   setId(id: string) {
       this.id = id
   }
   setName(name: string) {
       this.name = name
   }
   setEmail(email: string) {
       this.email = email
   }
   setBirthDate(birthDate: string) {
       this.birth_date = birthDate
   }
   setSpecialties(specialties: SPECIALTIES[]) {
       this.specialties = specialties
   }
}

export enum SPECIALTIES {
   REACT = 'REACT',
   REDUX = 'REDUX',
   CSS = 'CSS',
   TESTES = 'TESTES',
   TYPESCRIPT = 'TYPESCRIPT',
   POO = 'PROGRAMAÇÃO ORIENTADA A OBJETOS',
   BACKEND = 'BACKEND'
}

export interface TeacherInputDTO {
   id: string,
   name: string,
   email: string,
   birth_date: string,
   specialties: SPECIALTIES[]
}