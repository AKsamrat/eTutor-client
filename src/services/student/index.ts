"use server";

import { IBooking } from "@/types/booking";
import { IReview } from "@/types/review";
import { ITutor } from "@/types/tutor";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const getSingleStudent = async (email: string) => {
  // console.log(email)
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/students/${email}`,
      {
        next: {
          tags: ["STUDENT"],
        },
      }
    );
    const data = await res.json();
    // console.log(data)
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};
export const getRequestForTutor = async (id: string) => {
  // console.log(email)
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/booking/${id}`,
      {
        next: {
          tags: ["BOOKING"],
        },
      }
    );
    const data = await res.json();
    // console.log(data)
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};
export const getRequestForStudent = async (id: string) => {
  // console.log(email)
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/booking/student/${id}`,
      {
        next: {
          tags: ["BOOKING"],
        },
      }
    );
    const data = await res.json();
    // console.log(data)
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};
export const getAllPayment = async (studentId: string) => {
  console.log(studentId)
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/payment/student/${studentId}`,
      {
        next: {
          tags: ["STUDENT"],
        },
      }
    );
    const data = await res.json();
    // console.log(data)
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};
export const getMyReview = async (studentId: string) => {
  console.log(studentId)
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/review/${studentId}`,
      {
        next: {
          tags: ["STUDENT"],
        },
      }
    );
    const data = await res.json();
    // console.log(data)
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};

export const updateStudentProfile = async (data: ITutor, id: string) => {
  console.log("Sending update for ID:", id, "with data:", data);

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/students/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json", // ✅ Ensure Content-Type is set
      Authorization: (await cookies()).get("accessToken")?.value || "",
    },
    body: JSON.stringify(data), // ✅ Ensure data is stringified
  });

  return res.json();
};
export const createBooking = async (data: IBooking) => {
  console.log("with data:", data);

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/booking`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: (await cookies()).get("accessToken")?.value || "",
    },
    body: JSON.stringify(data),
  });
  revalidateTag("BOOKING");
  return res.json();
};


export const createReview = async (data: IReview) => {
  console.log("with data:", data);

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/review`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: (await cookies()).get("accessToken")?.value || "",
    },
    body: JSON.stringify(data),
  });
  revalidateTag("REVIEWTUTOR");
  return res.json();
};