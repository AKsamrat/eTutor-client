
import BookingForm from "@/components/modules/dashBoardComponent/student/BookingForm";
import { getSingleTutor } from "@/services/tutor";


const BookingPage = async ({
  params,
}: {
  params: Promise<{ tutorId: string }>;
}) => {
  const { tutorId } = await params;


  const { data: tutor } = await getSingleTutor(tutorId);
  console.log(tutor);
  return (
    <div>
      <BookingForm tutor={tutor}></BookingForm>
    </div>
  );
};

export default BookingPage;