import AllTutors from "@/components/modules/dashBoardComponent/tutor/AllTutors";
import { getAllTutor } from "@/services/tutor";


type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;
const TutorPage = async ({
  searchParams,
}: {
  searchParams: SearchParams;
}) => {
  const query = await searchParams;
  const { data: tutors } = await getAllTutor(undefined, undefined, query);
  console.log(tutors);

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="font-bold text-4xl text-center mt-5"> All Tutors</h1>
      <p className="text-center text-slate-500">Find your favaurite tutor from here</p>
      <AllTutors tutors={tutors} ></AllTutors>
    </div>
  );
};

export default TutorPage;