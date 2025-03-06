export interface IBooking {
  date: Date;
  duration: string;
  price: number;
  studentId: string;
  tutorId: string;
  status: "pending" | "completed" | "canceled";
  createdAt: Date;
  updatedAt: Date;
}