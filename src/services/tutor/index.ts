"use server";

import { cookies } from "next/headers";

export const getSingleTutor = async (email: string) => {
  console.log(email)
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/tutors/${email}`,
      {
        next: {
          tags: ["TUTOR"],
        },
      }
    );
    const data = await res.json();
    console.log(data)
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};

export const updateProfile = async (data: FormData, id: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/tutors/${id}`, {
      method: "PATCH",
      headers: {
        Authorization: (await cookies()).get("accessToken")!.value,
      },
      body: data,
    });

    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};