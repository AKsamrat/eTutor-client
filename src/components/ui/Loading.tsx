import TutorSkeletonLoading from "@/app/loading";
import React from "react";


const Loading = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <TutorSkeletonLoading></TutorSkeletonLoading>
    </div>
  );
};

export default Loading;