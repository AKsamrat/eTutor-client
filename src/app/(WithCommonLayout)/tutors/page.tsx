import AllTutors from "@/components/modules/dashBoardComponent/tutor/AllTutors";
import { getAllTutor } from "@/services/tutor";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

const TutorPage = async ({ searchParams }: { searchParams: SearchParams }) => {
  const query = await searchParams;

  // Parse `page` and `limit` from query (fallback to default values)
  const page = parseInt(query.page as string) || 1;
  const limit = parseInt(query.limit as string) || 10;

  // Send them to the backend API
  const { data: tutors } = await getAllTutor(page, limit, query);

  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-bold text-4xl text-center pt-5">All Tutors</h1>
        <p className="text-center text-slate-500">Find your favourite tutor from here</p>
        <AllTutors tutors={tutors} />
      </div>
    </div>
  );
};

export default TutorPage;
