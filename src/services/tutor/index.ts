"use server";

import { ITutor } from "@/types/tutor";
import { cookies } from "next/headers";

export const getSingleTutor = async (email: string) => {
  // console.log(email)
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
    // console.log(data)
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};

export const updateProfile = async (data: ITutor, id: string) => {
  console.log("Sending update for ID:", id, "with data:", data);

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/tutors/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json", // ✅ Ensure Content-Type is set
      Authorization: (await cookies()).get("accessToken")?.value || "",
    },
    body: JSON.stringify(data), // ✅ Ensure data is stringified
  });

  return res.json();
};

// get all tutor
export const getAllTutor = async (page?: string, limit?: string, query?: { [key: string]: string | string[] | undefined }) => {
  try {

    const params = new URLSearchParams();
    if (query?.price) {
      params.append("minPrice", "0")
      params.append("maxPrice", query?.price.toString())
    }
    if (query?.brand) {
      params.append("brands", query?.brand.toString())
    }
    if (query?.availability) {
      params.append("availability", query?.availability.toString())
    }
    if (query?.review) {
      params.append("review", query?.review.toString())
    }
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/tutors?page=${page}&limit=${limit}&${params}`,
      {
        next: {
          tags: ["TUTOR"],
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};