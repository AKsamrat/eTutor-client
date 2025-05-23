
import FilterSidebar from "./FilterSidebar";
import { Pagination } from "./Pagination";
// import { ITutor } from "@/types/tutor";
import TutorCard from "./Tutorcard";


const AllTutors = ({ tutors }: any) => {
  const totalPages = tutors?.meta?.totalPage;
  const currentPages = tutors?.meta?.page;
  const limit = tutors?.meta?.limit;
  console.log(tutors)
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 my-10 max-w-[1150px] mx-auto ">
      <div className="w-full max-w-sm col-span-1">
        <FilterSidebar />
      </div>
      <div className="col-span-3">
        <div className="grid grid-cols-3 gap-4">
          {tutors?.result?.map((tutor: any, idx: number) => (
            <TutorCard key={idx} tutor={tutor} />
          ))}
        </div>
        <Pagination
          totalPages={totalPages}
          currentPage={currentPages}
          limit={limit}
        ></Pagination>
      </div>
    </div>
  );
};

export default AllTutors;