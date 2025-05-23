"use server";

import { ITutor } from "@/types/tutor";
import { revalidateTag } from "next/cache";
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
export const getSingleTutorById = async (tutorId: string) => {
  console.log("tutor", tutorId)
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/tutors/review/${tutorId}`,
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
  revalidateTag("TUTOR");

  return res.json();
};

// get all tutor
export const getAllTutor = async (
  page?: string | number,
  limit?: string | number,
  query?: { [key: string]: string | string[] | undefined }
) => {
  try {
    const params = new URLSearchParams();

    // Add price filter
    if (query?.price) {
      params.append("minPrice", "0");
      params.append("maxPrice", query.price.toString());
    }

    // Add availability filter
    if (query?.availability) {
      params.append("availability", query.availability.toString());
    }

    // Add review filter
    if (query?.review) {
      params.append("review", query.review.toString());
    }

    // Construct URL with string conversion
    const url = `${process.env.NEXT_PUBLIC_BASE_API}/tutors?page=${page?.toString() || "1"}&limit=${limit?.toString() || "10"}&${params}`;

    const res = await fetch(url, {
      next: {
        tags: ["TUTORS"],
      },
    });

    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};


export const approveRequest = async (id: string) => {
  console.log("Sending update for ID:", id);

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/booking/approve/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json", // ✅ Ensure Content-Type is set
      Authorization: (await cookies()).get("accessToken")?.value || "",
    },
    // ✅ Ensure data is stringified
  });
  revalidateTag("BOOKING");
  return res.json();
};
export const cancelRequest = async (id: string) => {
  console.log("Sending update for ID:", id);

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/booking/cancel/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json", // ✅ Ensure Content-Type is set
      Authorization: (await cookies()).get("accessToken")?.value || "",
    },
    // ✅ Ensure data is stringified
  });
  revalidateTag("BOOKING");
  return res.json();
};
export const getMyEarn = async (tutorId: string) => {
  console.log(tutorId)
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/order/${tutorId}`,
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