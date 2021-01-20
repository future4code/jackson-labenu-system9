export class Student {
   constructor(
      private id: string,
      private name: string,
      private email: string,
      private birth_date: string,
      private hobbies: string[]
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
   getHobbies() {
       return this.hobbies
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
   setHobbies(hobbies: string[]) {
       this.hobbies = hobbies
   }
}

export interface StudentInputDTO {
   id: string,
   name: string,
   email: string,
   birth_date: string,
   hobbies: string[]
}