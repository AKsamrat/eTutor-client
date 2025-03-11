import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const steps = [
  {
    title: "Search for Tutors or Post your tuition requirements",
    description: "Post Tuition by creating an account or without an account.",
    icon: "📖",
  },
  {
    title: "Get one-to-one demo session for free",
    description: "Get a free one-day demo session with the tutor at your preferred location.",
    icon: "🎓",
  },
  {
    title: "Hire your tutor",
    description: "If you like the demo session, confirm the teacher.",
    icon: "📩",
  },
  {
    title: "Get results",
    description: "Gain knowledge, boost confidence, and improve overall academic performance.",
    icon: "📈",
  },
];

const StudentSteps: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full py-10 bg-white">
      <h2 className="text-3xl font-semibold text-gray-800 mb-8">
        Heres how it works for <span className="text-[#16935F]">Students/Guardians</span>
      </h2>

      <div className="relative w-full max-w-4xl ">
        {steps?.map((step, index) => (

          <div
            key={index}
            className={`relative flex items-center p-4 bg-white rounded-lg  mb-8 w-3/6 border-[2px] border-green-200 shadow-xl shadow-slate-400 hover:shadow-lg transition-all duration-300
              ${index % 2 === 0 ? "ml-0" : "ml-auto"} 
            `}
          >
            {/* Icon */}
            <div className="text-3xl mr-4">{step.icon}</div>


            {/* Content */}
            <div>
              <h3 className="font-semibold text-gray-700">{step.title}</h3>
              <p className="text-sm text-gray-500">{step.description}</p>
            </div>

            {/* Connector Line (except last step) */}
            {index < steps.length - 1 && (
              <div
                className="absolute w-12 h-12 border-l-2 border-dashed border-green-500 left-1/2 top-full"
                style={{ transform: "translateX(-50%)" }}
              ></div>
            )}
          </div>
        ))}
      </div>

      <Link href="/register">
        <Button>Register As Student</Button>
      </Link>
    </div>
  );
};

export default StudentSteps;
