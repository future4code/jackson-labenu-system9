import express, { Express } from "./controller/node_modules/express"
import cors from "cors"
import { AddressInfo } from "net"
import knex from "knex"
import dotenv from "dotenv"
import { createStudent } from "./controller/createStudent"
import { getStudents } from "./controller/getStudents"
import { createTeacher } from "./controller/createTeacher"
import { getTeachers } from "./controller/getTeachers"
import { getStudentAgeById } from "./controller/getStudentAgeById"
import { createHobby } from "./controller/createHobby"
import { addTeacherToMission } from "./controller/addTeacherToMission"
import { addStudentToMission } from "./controller/addStudentToMission"

const app: Express = express()

app.use(express.json())
app.use(cors())

dotenv.config()

export const connection = knex({ 
  client: "mysql",
  connection: {
     host:process.env.DB_HOST,
     port: Number(process.env.DB_PORT || "3306"),
     user: process.env.DB_USER,
     password: process.env.DB_PASSWORD,
     database: process.env.DB_DATABASE
  }
})

app.post("/student/new", createStudent)
app.get("/students/all", getStudents)
app.patch("/students/:studentId/join/:missionId", addStudentToMission)
app.get("/student/age/:id", getStudentAgeById)
app.post("/teacher/new", createTeacher)
app.get("/teachers/all", getTeachers)
app.patch("/teachers/:teacherId/join/:missionId", addTeacherToMission)
app.post("/hobby/new", createHobby)

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
     const address = server.address() as AddressInfo;
     console.log(`Server is running in http://localhost:${address.port}...`)
  } else {
     console.error(`Failure upon starting server!`)
  }
})