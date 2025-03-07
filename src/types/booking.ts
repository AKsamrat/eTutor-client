import { IStudent } from "./student";

export interface IBooking {
  _id: string;
  date: Date;
  duration: string;
  price: number;
  studentId: IStudent;
  tutorId: string;
  status: "pending" | "completed" | "canceled";
  createdAt: Date;
  updatedAt: Date;
}