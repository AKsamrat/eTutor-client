"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useUser } from "@/context/UserContext"; // Update with your actual context path
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { getSingleTutor } from "@/services/tutor";
import { ITutor } from "@/types/tutor";

const Profile = () => {
  const { user } = useUser(); // Assuming user context provides user data
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [tutors, setTutors] = useState<ITutor>();
  const tEmail: any = (user?.email)
  useEffect(() => {
    const fetchData = async (tEmail) => {
      const [tutorData] = await Promise.all([
        getSingleTutor(tEmail),

      ]);
      // console.log(user?.email)
      setTutors(tutorData.data);
    };

    fetchData(tEmail);
  }, []);
  console.log(tutors)


  if (!user) {
    return <p className="text-center">Loading...</p>;
  }

  // const handleUpdate = () => {
  //   setLoading(true);
  //   router.push("/profile/edit"); 
  // };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
      <div className="flex flex-col items-center">
        <div className="relative w-32 h-32">
          <Image
            src={user.pic || "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D"}

            alt="Profile Picture"
            layout="fill"
            className="rounded-full border border-gray-300"
          />
        </div>
        <h2 className="text-xl font-semibold mt-4">{tutors?.name}</h2>
        <p className="text-gray-600">{tutors?.email}</p>
        <p className="mt-1 px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
          {user?.role?.toUpperCase()}
        </p>
        {/* Additional User Details */}
        <div className="mt-4 w-full text-center">
          <h3 className="font-semibold">Bio:</h3>
          <p className="text-gray-700">{tutors?.bio || "No bio available"}</p>

          <h3 className="font-semibold mt-3">Subjects:</h3>
          <p className="text-gray-700">
            {tutors?.subject || "No subjects listed"}
          </p>

          <h3 className="font-semibold mt-3">Availability:</h3>
          <p className={`text-sm ${tutors?.availability ? "text-green-600" : "text-red-600"}`}>
            {tutors?.availability ? "Available for tutoring" : "Not available"}
          </p>

          <h3 className="font-semibold mt-3">Reviews:</h3>
          <p className="text-gray-700">{tutors?.review || "No reviews yet"}</p>
        </div>

        <Button className="mt-4" onClick={() =>
          router.push(
            `/tutor/manageProfile/updateProfile/${tutors?.email}`
          )
        } disabled={loading}>
          {loading ? "Updating..." : "Update Profile"}
        </Button>
      </div>
    </div>
  );
};

export default Profile;
