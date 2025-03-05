"use server";

import { ITutor } from "@/types/tutor";
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