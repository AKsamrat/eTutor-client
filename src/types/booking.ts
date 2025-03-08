import { IStudent } from "./student";
import { ITutor } from "./tutor";

export interface IBooking {
  _id: string;
  date: Date;
  duration: string;
  price: number;
  studentId: IStudent;
  tutorId: ITutor;
  status: "pending" | "completed" | "canceled";
  createdAt: Date;
  updatedAt: Date;
  orderQuantity?: number;
}