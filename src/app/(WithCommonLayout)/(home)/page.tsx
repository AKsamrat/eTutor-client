import Banner from "@/components/modules/home/banner";
import HowItWorks from "@/components/modules/home/howItWork";
import StudentSteps from "@/components/modules/home/studentreq";
import SubjectSpecialist from "@/components/modules/home/subject";
import TestimonialSlider from "@/components/modules/home/testimonial";
import TuitionTypes from "@/components/modules/home/tutionType";

// import HeroSection from "@/components/modules/home/HeroSection";


const HomePage = async () => {


  return (
    <div>
      {/* <HeroSection /> */}
      <Banner ></Banner>
      <TuitionTypes></TuitionTypes>
      <HowItWorks></HowItWorks>
      <TestimonialSlider />
      <SubjectSpecialist></SubjectSpecialist>
      <StudentSteps></StudentSteps>

    </div>
  );
};

export default HomePage;