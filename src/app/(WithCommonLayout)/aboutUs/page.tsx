"use client";
import Image from "next/image";
import { GraduationCap, Users, BookOpen, Star, Target, Zap, Award } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-[#EEFCF3] to-[#aff2d3] text-gray-800 py-20">
        <div className="absolute inset-0 "></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            About Us
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90">
            Connecting minds, transforming futures through personalized education
          </p>
        </div>
        {/* Wave shape at bottom */}
        <div className="absolute -bottom-1 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full">
            <path
              fill="#ffffff"
              fillOpacity="100"
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"
            ></path>
          </svg>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Our Mission
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light">
                Our goal is to connect students with highly qualified tutors, making learning
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-semibold"> accessible</span>,
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-semibold"> effective</span>, and
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-red-600 font-semibold"> enjoyable</span> for everyone.
              </p>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">500+</h3>
              <p className="text-gray-600 font-medium">Expert Tutors</p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">10K+</h3>
              <p className="text-gray-600 font-medium">Students Helped</p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">50+</h3>
              <p className="text-gray-600 font-medium">Subjects Covered</p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            {/* <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mb-6">
              <Heart className="h-8 w-8 text-white" />
            </div> */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The passionate minds behind your educational success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden ring-4 ring-gradient-to-r from-blue-400 to-purple-500 p-1">
                    <div className="w-full h-full rounded-full overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={128}
                        height={128}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center">
                    <Award className="h-4 w-4 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-semibold mb-4">
                  {member.role}
                </p>
                <div className="flex justify-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mb-6">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real experiences from our amazing community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {successStories.map((story, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-gradient-to-r from-[#b6f4c93b] via-[#ccf4e1] to-[#aff2d3]"
              >
                <div className="flex items-start mb-6">
                  <div className="flex space-x-1 mr-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <blockquote className="text-lg text-gray-700 mb-6 italic leading-relaxed">
                  {story.feedback}
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#b6f4c9] via-[#ccf4e1] to-[#aff2d3] rounded-full flex items-center justify-center mr-4">
                    <span className="text-[#109261] font-bold text-lg">
                      {story.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{story.name}</p>
                    <p className="text-gray-600">{story.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="py-20 bg-gradient-to-b from-[#b6f4c93b] via-[#ccf4e1] to-[#aff2d3] text-gray-800 relative">
        <div className="absolute inset-0 "></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-8">
            <Target className="h-8 w-8 text-[#109261]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Our Vision
          </h2>
          <p className="text-xl md:text-2xl leading-relaxed font-light opacity-90">
            We aim to expand our platform to offer a wider range of subjects, reaching students
            worldwide and making quality education accessible to all. Together, we are building
            the future of personalized learning.
          </p>
          <div className="mt-12">
            <button className="bg-white text-gray-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg">
              Join Our Mission
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const teamMembers = [
  {
    name: "Afrina",
    role: "Founder & CEO",
    image: "https://course.tutorsheba.com/uploads/teacher/1628832655.jpg"
  },
  {
    name: "Ashik Billal",
    role: "Co-Founder & CTO",
    image: "https://course.tutorsheba.com/uploads/teacher/1632680274.jpg"
  },
  {
    name: "Syed Faruk",
    role: "Head of Education",
    image: "https://course.tutorsheba.com/uploads/teacher/1626287618.jpg"
  }
];

const successStories = [
  {
    name: "Sarzis Alam Mim",
    role: "Student",
    feedback: "This platform helped me find the perfect tutor! My grades have improved tremendously and I now feel confident in my studies."
  },
  {
    name: "Al Imran",
    role: "Tutor",
    feedback: "I've been able to connect with amazing students and grow my teaching career. The platform makes it easy to share knowledge and make a real impact."
  }
];

export default AboutUs;