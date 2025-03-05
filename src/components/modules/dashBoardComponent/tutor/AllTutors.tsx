
import FilterSidebar from "./FilterSidebar";
import { ITutor } from "@/types/tutor";
import TutorCard from "./Tutorcard";


const AllTutors = ({ tutors }: { tutors: ITutor[] }) => {
  console.log(tutors)
  return (
    <div className="flex gap-8 my-10">
      <div className="w-full max-w-sm">
        <FilterSidebar />
      </div>
      <div>
        <div className="grid grid-cols-3 gap-8">
          {tutors?.result?.map((tutor: ITutor, idx: number) => (
            <TutorCard key={idx} tutor={tutor} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllTutors;