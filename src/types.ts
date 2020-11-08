export type Main = {
  id: number,
  name: string,
  email: string,
  birth_date: Date,
  mission_id: number
}

export type Mission = {
  id: number,
  name: string,
  start_date: Date,
  end_date: Date,
  module: number
}

