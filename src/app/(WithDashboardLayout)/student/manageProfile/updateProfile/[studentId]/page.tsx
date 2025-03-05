

import UpdateStudentForm from "@/components/modules/dashBoardComponent/student/UpdateStudentForm";
import { getSingleStudent } from "@/services/student";



const updateProfile = async ({
  params,
}: {
  params: Promise<{ studentId: string }>;
}) => {
  const { studentId } = await params;
  console.log(studentId)

  const { data: tutor } = await getSingleStudent(studentId);
  console.log(tutor);
  return (
    <div>
      <UpdateStudentForm tutor={tutor}></UpdateStudentForm>
    </div>
  );
};

export default updateProfile;