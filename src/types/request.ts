export interface IRequest {
  date?: Date;
  duration?: string;
  price?: number;
  studentId?: string;
  tutorId?: string;
  status: "pending" | "completed" | "canceled";

}