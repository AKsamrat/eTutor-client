"use client";
import { FaUserPlus, FaSuitcase, FaCar, FaMoneyBillWave } from "react-icons/fa";

const steps = [
  {
    id: 1,
    title: "CREATE TUTOR PROFILE",
    description: "Create your profile in minutes with sign-up information.",
    icon: <FaUserPlus className="text-white text-xl" />,
  },
  {
    id: 2,
    title: "APPLY FOR JOBS",
    description:
      "Completing your profile, start browsing our latest TUITION JOBS page and start applying.",
    icon: <FaSuitcase className="text-white text-xl" />,
  },
  {
    id: 3,
    title: "GET FREE TUTORING JOB ALERT",
    description:
      "Get updated tutoring job alerts via SMS/CALL whenever new jobs are posted.",
    icon: <FaCar className="text-white text-xl" />,
  },
  {
    id: 4,
    title: "START TUTORING AND GROW YOUR INCOME",
    description:
      "If parents like the demo session, you can continue tutoring and start earning.",
    icon: <FaMoneyBillWave className="text-white text-xl" />,
  },
];

const HowItWorks = () => {
  return (
    <div className="py-12 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold text-gray-800">How it Works?</h2>
      <p className="text-gray-500 mt-2">
        Heres how it works for <span className="text-[#0E9560] font-semibold">Tutors</span>
      </p>

      <div className="mt-8 max-w-4xl mx-auto space-y-6">
        {steps.map((step) => (
          <div key={step.id} className="flex justify-center items-center gap-3">
            <div className="w-16 h-16 flex items-center justify-center bg-[#0E9560] rounded-full text-white text-lg font-bold shadow-xl shadow-slate-400">
              {step.id}
            </div>
            <div

              className="flex flex-col md:flex-row items-center bg-white shadow-xl   rounded-lg shadow-slate-400 p-6 gap-4 hover:shadow-lg transition-all duration-300 w-full"
            >

              <div className="flex-1 text-left">
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
              <div className="w-12 h-12 flex items-center justify-center bg-[#0E9560] rounded-lg">
                {step.icon}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
