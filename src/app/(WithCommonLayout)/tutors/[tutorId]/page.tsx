
import TutorDetails from "@/components/modules/dashBoardComponent/tutor/TutorDetailscard";
import NMContainer from "@/components/ui/core/NMContainer";

import { getSingleTutor } from "@/services/tutor";

const TutorDetailsPage = async ({
  params,
}: {
  params: Promise<{ tutorId: string }>;
}) => {
  const { tutorId } = await params;

  console.log(tutorId);
  const { data: tutor } = await getSingleTutor(tutorId);

  return (
    <NMContainer>
      <TutorDetails tutor={tutor} />
    </NMContainer>
  );
};

export default TutorDetailsPage;