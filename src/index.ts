// Import libs
import express, { Express } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import knex from "knex";
import dotenv from "dotenv";
// Import functions
import { createStudent } from "./endpoints/createStudent";
import { getStudents } from "./endpoints/getStudents";
import { createTeacher } from "./endpoints/createTeacher";
import { getTeachers } from "./endpoints/getTeachers";
import { getAgeStudentById } from "./endpoints/getAgeStudentById";
import { createHobby } from "./endpoints/createHobby";

// Configurations
dotenv.config()
const app: Express = express();
app.use(express.json());
app.use(cors())

// Connection 
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

// Endpoints
app.post("/student/new", createStudent)
app.get("/students/all", getStudents)
app.post("/teacher/new", createTeacher)
app.get("/teachers/all", getTeachers)
app.get("/student/age/:id", getAgeStudentById)
app.post("/hobby/new", createHobby)

// Function rotate
const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
     const address = server.address() as AddressInfo;
     console.log(`Server is running in http://localhost:${address.port}`);
  } else {
     console.error(`Failure upon starting server.`);
  }
})