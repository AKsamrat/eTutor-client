import ReviewForm from "@/components/modules/dashBoardComponent/student/ReviewForm";
import { getSingleTutor } from "@/services/tutor";


const reviewTutor = async ({
  params,
}: {
  params: Promise<{ tutorId: string }>;
}) => {
  const { tutorId }: { tutorId: string } = await params;
  const { data: tutor } = await getSingleTutor(tutorId);
  console.log(tutor);

  return (
    <div>
      <ReviewForm tutor={tutor}></ReviewForm>
    </div>
  );
};

export default reviewTutor;