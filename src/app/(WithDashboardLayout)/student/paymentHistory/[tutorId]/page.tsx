import ReviewForm from "@/components/modules/dashBoardComponent/student/ReviewForm";
import { getSingleTutorById } from "@/services/tutor";


const reviewTutor = async ({
  params,
}: {
  params: Promise<{ tutorId: string }>;
}) => {
  const { tutorId }: { tutorId: string } = await params;
  const { data: tutor } = await getSingleTutorById(tutorId);
  console.log(tutorId, tutor);

  return (
    <div>
      <ReviewForm tutor={tutor}></ReviewForm>
    </div>
  );
};

export default reviewTutor;