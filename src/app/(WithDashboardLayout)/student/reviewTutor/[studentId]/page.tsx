import ReviewDetails from '@/components/modules/dashBoardComponent/student/ReviewDetails';
import { getMyReview } from '@/services/student';
import React from 'react';

const ReviewTutorPage = async ({
  params,
}: {
  params: Promise<{ studentId: string }>
}) => {
  const { studentId }: { studentId: string } = await params;
  const { data: reviews } = await getMyReview(studentId);
  console.log(studentId, reviews);
  return (
    <div className="py-8  mx-auto lg:px-6">
      <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
          <table className="min-w-full leading-normal">
            <thead>
              <tr>

                <th
                  scope="col"
                  className="px-5 py-3 bg-[#109361] border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-5 py-3 bg-[#109361] border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold"
                >
                  Rating
                </th>


                <th
                  scope="col"
                  className="px-5 py-3 bg-[#109361] border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold"
                >
                  Review
                </th>
                <th
                  scope="col"
                  className="px-5 py-3 bg-[#109361] border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold"
                >
                  Date
                </th>

              </tr>
            </thead>
            <tbody>
              {reviews?.map((request: any) => (
                <ReviewDetails
                  key={request._id}
                  request={request}

                ></ReviewDetails>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ReviewTutorPage;