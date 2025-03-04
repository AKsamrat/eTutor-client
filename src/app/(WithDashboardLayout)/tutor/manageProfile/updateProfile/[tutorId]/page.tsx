
import UpdateTutorForm from "@/components/modules/dashBoardComponent/tutor/UpdateTutorForm";
import { getSingleTutor } from "@/services/tutor";


const updateProfile = async ({
  params,
}: {
  params: Promise<{ tutorId: string }>;
}) => {
  const { tutorId } = await params;
  console.log(tutorId)

  const { data: tutor } = await getSingleTutor(tutorId);
  console.log(tutor);
  return (
    <div>
      <UpdateTutorForm tutor={tutor}></UpdateTutorForm>
    </div>
  );
};

export default updateProfile;