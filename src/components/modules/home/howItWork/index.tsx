"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
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
        Here is how it works for <span className="text-green-600 font-semibold">Tutors</span>
      </p>

      <div className="mt-8 max-w-4xl mx-auto space-y-6">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className={`flex items-center gap-6 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
          >
            {/* Animated Number + Title (Left-Right Movement) */}
            <motion.div
              initial={{ x: -10 }}
              animate={{ x: 10 }}
              whileHover={{ x: 0 }} // Stops moving on hover
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 1.5,
                ease: "easeInOut",
              }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-[#a0e8cb] rounded-full text-[#0E9560] text-lg font-bold shadow-xl shadow-slate-400">
                {step.id}
              </div>

            </motion.div>

            {/* Step Box (Zig-Zag Layout) */}
            <div
              className="flex flex-col md:flex-row justify-between  items-center bg-white shadow-xl rounded-lg shadow-slate-400 p-6 gap-4 hover:shadow-lg transition-all duration-300 w-full"
            >
              {/* If index is even, icon is at right; if odd, icon is at left */}
              {index % 2 !== 0 && (
                <div className="w-12 h-12 flex items-center justify-center bg-[#0E9560] rounded-lg shadow-xl shadow-slate-400">
                  {step.icon}
                </div>
              )}
              <div>

                <h3 className="text-md font-semibold mt-2">{step.title}</h3>

                <p className="text-gray-600 text-sm ">{step.description}</p>
              </div>

              {index % 2 === 0 && (
                <div className="w-12 h-12 flex items-center justify-center bg-[#0E9560] rounded-lg shadow-xl shadow-slate-400">
                  {step.icon}
                </div>
              )}
            </div>
          </div>
        ))}

      </div>
      <div className="mt-10">
        <Link href="/register" className="">
          <Button>Register As Tutor</Button>
        </Link>
      </div>
    </div>
  );
};

export default HowItWorks;
