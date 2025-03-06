"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const tuitionTypes = [
  {
    title: "Home Tutoring",
    subtitle: "Looking for one-to-one classes?",
    description:
      "It's a unique opportunity to learn in the home with your expected future in different categories. Everything is in favor of your need.",
    image: "https://i.pinimg.com/736x/b2/34/4e/b2344eb9fc661f35ce30858428e3571d.jpg", // Replace with actual image path
  },
  {
    title: "Online Tutoring",
    subtitle: "Are you left with any doubts?",
    description:
      "Connect with the best tutors from anywhere and take online classes using different tools. Make your life easier with this process.",
    image: "https://i.pinimg.com/736x/05/58/93/055893a091a26ad245ea6895e7d21ac7.jpg", // Replace with actual image path
  },
  {
    title: "Group Tutoring",
    subtitle: "Need the Competitive & Affordable experience?",
    description:
      "A group of students can fulfill their hunger for learning within more affordable tuition fees. Get the opportunity of learning with knowledge sharing!",
    image: "https://i.pinimg.com/736x/57/fb/3e/57fb3e67c8a42f5ae9e60b55198d2f64.jpg", // Replace with actual image path
  },
];

const TuitionTypes = () => {
  return (
    <div className="py-12 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold text-gray-800">Tuition Types</h2>
      <p className="text-gray-500 mt-2">
        Find the Best Tuition Type which suits you most
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {tuitionTypes.map((type, index) => (
          <div
            key={index}
            className="bg-white  rounded-lg p-6 flex flex-col items-center text-center shadow-xl shadow-slate-400 hover:shadow-lg duration-500 transition-all hover:translate-x-3 "
          >
            <motion.div
              initial={{ y: -10 }}
              animate={{ y: 10 }}
              whileHover={{ y: 0 }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 1.5,
                ease: "easeInOut",
              }}
            >
              <Image
                src={type.image}
                alt={type.title}
                width={200}
                height={200}
              />
            </motion.div>
            <h3 className="text-xl font-semibold mt-4">{type.title}</h3>
            <p className="text-gray-500 text-sm mt-1">{type.subtitle}</p>
            <p className="text-gray-600 text-sm mt-2">{type.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TuitionTypes;
