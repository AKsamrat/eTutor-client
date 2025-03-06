"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import Image from "next/image";

const testimonials = [
  {
    name: "Sumon Sheikh",
    role: "Father to Grade 4 Student",
    text: "Being part of eTutor has been a rewarding experience. The platform offers opportunities for tutors to connect with students and enhance their teaching skills. I’ve gained confidence and professional growth while helping students succeed. It’s a fantastic service for both learners and educators looking for a structured learning environment.",
    image: "https://www.tutorsheba.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fp2.b8f93b1d.jpg&w=256&q=75", // Replace with actual path
  },
  {
    name: "Tafsiruzzaman",
    role: "Mathematics Teacher (UAP - Dept. of Civil Eng.)",
    text: "eTutor has been a lifesaver for my child's education. The tutors are dedicated, knowledgeable, and engaging, helping my child excel in studies. I've seen a remarkable improvement in grades and confidence. I highly recommend their services to any parent looking for reliable and quality tutoring.",
    image: "https://www.tutorsheba.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fp3.545ab73a.jpg&w=256&q=75", // Replace with actual path
  },
  {
    name: "Sadia Naznin",
    role: "Mother to Grade 4 Student",
    text: "I have been using eTutor since 2019, and it has helped me tremendously. Not only has it provided extra income, but it has also allowed me to grow my network, improve my skills, and gain confidence. It's a great platform for both students and tutors seeking quality education.",
    image: "https://www.tutorsheba.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fp6.ec401a39.jpg&w=256&q=75", // Replace with actual path
  },
  {
    name: "Sumon Sheik",
    role: "Mathematics Teacher (UAP - Dept. of Civil Eng.)",
    text: "eTutor has been an excellent platform for my child’s education. The tutors are professional, supportive, and committed to student success. I have noticed significant academic improvement in my child. The personalized approach makes learning easier and more effective. I strongly recommend Tutorsheba to other parents seeking quality tutoring.",
    image: "https://www.tutorsheba.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fp5.92cb79a8.jpg&w=256&q=75", // Replace with actual path
  },
];

const TestimonialSlider = () => {
  return (
    <>
      <p className=" text-2xl lg:text-5xl font-bold text-center mt-10 text-[#13925E]">Testimonials</p>
      <p className="text-gray-600 text-center mb-10">
        See what our satisfied parents and students are saying about eTutor.
      </p>
      <div className="max-w-5xl mx-auto py-10">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={2} // Shows 2 slides at a time
          autoplay={{ delay: 3000 }}

          loop
          dir="rtl" // Enables right-to-left sliding
          breakpoints={{
            640: { slidesPerView: 1 }, // Show 1 slide on small screens
            1024: { slidesPerView: 2 }, // Show 2 slides on larger screens
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center text-center p-6 border rounded-lg shadow-md bg-white">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={100}
                  height={100}
                  className="rounded-full mb-4"
                />
                <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
                <p className="mt-3 text-gray-700">{testimonial.text.slice(0, 200)}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default TestimonialSlider;
