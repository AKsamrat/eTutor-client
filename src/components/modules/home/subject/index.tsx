"use client";
// import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

const subjects = ["Bangla", "Math", "Physics", "Chemistry", "Biology", "English", "ICT", "Economics", "CSE"];

const SubjectSpecialist = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10 mx-w-7xl bg-[#F3F4F6] h-[400]">
      <h2 className="text-2xl font-semibold text-center text-gray-900">
        Find Your Subject <span className="text-[#149160]">Specialist </span>
      </h2>
      <p className="text-gray-500 text-center mb-6">
        Find Our Specialist to reach your dream goal
      </p>
      <div className="overflow-hidden w-full">
        <Marquee>



          {subjects.map((subject, index) => (
            <div
              key={index}
              className=" px-10 py-3 rounded-lg hover:shadow-md font-semibold text-gray-800 mx-2 border-2  shadow-xl bg-white shadow-green-200"
            >


              {subject}
            </div>
          ))}

        </Marquee>
      </div>
    </div>
  );
};

export default SubjectSpecialist;
