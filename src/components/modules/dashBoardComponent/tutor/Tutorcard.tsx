"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { useRouter } from "next/navigation";

interface TutorCardProps {
  tutor: {
    email: string;
    name: string;
    pic: string;
    institute: string;
    subject: string;
    location: string;

  };
}

const TutorCard: React.FC<TutorCardProps> = ({ tutor }) => {
  const router = useRouter();
  return (
    <div className="border rounded-2xl shadow-md p-4 w-[270] text-center bg-white">
      {/* Profile Image */}
      <div className="flex justify-center h-52 ">
        <Image
          src={tutor?.pic}
          alt={tutor?.name}
          width={220}
          height={300}
          className="rounded-lg object-cover height-full "
        />
      </div>

      {/* Tutor Name */}
      <h3 className="text-lg font-semibold mt-2">{tutor?.name}</h3>

      {/* University */}
      <p className="text-sm text-gray-500">{tutor?.institute}</p>

      {/* Subject */}
      <p className="font-semibold text-gray-700">{tutor?.subject}</p>

      {/* Location */}
      <div className="flex items-center justify-center text-primary mt-2">
        <MapPin size={16} className="mr-1 text-pink-500" />
        <span className="text-sm">{tutor.location}</span>
      </div>

      {/* View Details Button */}
      <Button onClick={() =>
        router.push(
          `/tutors/${tutor?.email}`
        )
      } className="mt-4 bg-[#0E9560] hover:bg-[#26ce8b] text-white w-full">
        View Details
      </Button>
    </div>
  );
};

export default TutorCard;
