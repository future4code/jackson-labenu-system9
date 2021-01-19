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