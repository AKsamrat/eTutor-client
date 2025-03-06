"use client";

import { Button } from "@/components/ui/button";
import { MapPin, Star } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface TutorDetailsProps {
  tutor: {
    email: string;
    name: string;
    bio: string;
    hourlyRate: number;
    review: number;
    availability: string;
    institute: string;
    location: string;
    subject: string;
    pic: string;
    preferredClass: string;
    preferredArea: string;

  };
}

const TutorDetails: React.FC<TutorDetailsProps> = ({ tutor }) => {
  const router = useRouter()
  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6 md:p-10">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center gap-6">
        {/* Profile Image */}
        <Image
          src={tutor?.pic}
          alt={tutor?.name}
          width={150}
          height={150}
          className="rounded-full object-cover border-4 border-gray-300"
        />
        {/* Tutor Info */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-semibold">{tutor?.name}</h2>
          <p className="text-gray-600">{tutor?.institute}</p>
          <div className="flex items-center justify-center md:justify-start gap-2 mt-1">
            <MapPin size={16} className="text-pink-500" />
            <span className="text-sm text-gray-500">{tutor?.location}</span>
          </div>
        </div>
      </div>

      {/* Tutor Details */}
      <div className="mt-6 space-y-4">
        <p className="text-gray-700 text-sm md:text-base">{tutor?.bio}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
          <p><strong>Subject:</strong> {tutor?.subject}</p>
          <p><strong>Hourly Rate:</strong> ${tutor?.hourlyRate}/hr</p>
          <p><strong>Availability:</strong> {tutor?.availability}</p>
          <div className="flex items-center">
            <strong>Reviews:</strong>
            <Star size={16} className="text-yellow-500 ml-2" />
            <span className="ml-1">{tutor?.review} Stars</span>
          </div>
          <p><strong>Preferred Class:</strong> {tutor?.preferredClass}</p>
          <p><strong>Preferred Area:</strong> {tutor?.preferredArea}</p>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-6 flex flex-col md:flex-row gap-4">
        <Button className="w-full md:w-1/2 bg-blue-600 hover:bg-blue-700 text-white">
          📞 Contact
        </Button>
        <Button onClick={() => router.push(`/tutors/booking/${tutor?.email}`)} className="w-full md:w-1/2 bg-green-600 hover:bg-green-700 text-white">
          📅 Booking Request
        </Button>
      </div>
    </div>
  );
};

export default TutorDetails;
