export interface ITutor {
  _id?: string;
  subject?: string;
  bio?: string;
  pic?: string;
  role?: string;
  email?: string;
  hourlyRate?: number;
  name: string;
  review?: number;
  lastLogin?: Date;
  availability?: string;
  createdAt: Date;
  updatedAt: Date;
  __v?: number
}
