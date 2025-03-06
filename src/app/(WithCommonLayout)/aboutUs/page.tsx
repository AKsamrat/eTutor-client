"use client";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Mission Statement */}
      <section className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#0E9560]">--- Our Mission ---</h2>
        <p className="mt-4 text-gray-600 text-lg">
          Our goal is to connect students with highly qualified tutors, making learning accessible, effective, and enjoyable for everyone.
        </p>
      </section>

      {/* Team Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 text-center">Meet Our Team</h2>
        <div className="flex flex-wrap justify-center gap-8 mt-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white border-[2px] border-[#bde3d4] p-6 shadow-lg rounded-lg text-center w-64">
              <Image src={member.image} alt={member.name} width={100} height={100} className="rounded-full mx-auto" />
              <h3 className="text-lg font-semibold mt-4">{member.name}</h3>
              <p className="text-gray-500 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Success Stories */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 text-center">Success Stories</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {successStories.map((story, index) => (
            <div key={index} className="bg-[#bde3d4] p-6 shadow-lg rounded-lg">
              <p className="text-gray-600">{story.feedback}</p>
              <h3 className="text-lg font-semibold mt-4">- {story.name}, {story.role}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Vision Section */}
      <section className="text-center">
        <h2 className="text-3xl font-bold text-gray-800">Our Vision</h2>
        <p className="mt-4 text-gray-600 text-lg">
          We aim to expand our platform to offer a wider range of subjects, reaching students worldwide and making quality education accessible to all.
        </p>
      </section>
    </div>
  );
};

const teamMembers = [
  { name: "Afrina", role: "Founder & CEO", image: "https://course.tutorsheba.com/uploads/teacher/1628832655.jpg" },
  { name: "Ashik Billal", role: "Co-Founder & CTO", image: "https://course.tutorsheba.com/uploads/teacher/1632680274.jpg" },
  { name: "Syed faruk", role: "Head of Education", image: "https://course.tutorsheba.com/uploads/teacher/1626287618.jpg" }
];

const successStories = [
  { name: "Sarzis Alam Mim", role: "Student", feedback: "This platform helped me find the perfect tutor! My grades have improved tremendously." },
  { name: "Al imran", role: "Tutor", feedback: "I've been able to connect with amazing students and grow my teaching career." }
];

export default AboutUs;
