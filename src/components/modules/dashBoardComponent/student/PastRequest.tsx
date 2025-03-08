"use client"

import { ITutor } from "@/types/tutor";
import { useEffect, useState } from "react";
import { useUser } from "@/context/UserContext";

import { getRequestForStudent, getSingleStudent } from "@/services/student";
import { IBooking } from "@/types/booking";
import PastReqDetails from "./PastReqDetails";

const PastRequest = () => {
  const { user } = useUser()
  const tEmail: any = (user?.email)
  const [tutor, setTutor] = useState<ITutor>()
  const [requests, setRequests] = useState<IBooking[]>([])
  const tId = (tutor?._id)
  console.log(tEmail, tutor, tId)

  useEffect(() => {
    const fetchData = async (tEmail) => {
      const [tutorData] = await Promise.all([
        getSingleStudent(tEmail),

      ]);
      // console.log(tutorData)
      setTutor(tutorData.data);
    };

    fetchData(tEmail);

  }, [user]);

  useEffect(() => {

    if (!tId) return; // Prevent running if tId is undefined

    const reqData = async () => {
      try {
        const [tutorData] = await Promise.all([
          getRequestForStudent(tId),

        ]);
        setRequests(tutorData.data);
      } catch (error) {
        console.error("Error fetching requests:", error);
      }
    };

    reqData();
  }, [tId]);
  console.log(requests)
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
                  Book for Months
                </th>


                <th
                  scope="col"
                  className="px-5 py-3 bg-[#109361] border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold"
                >
                  Email
                </th>
                <th
                  scope="col"
                  className="px-5 py-3 bg-[#109361] border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-5 py-3 bg-[#109361] border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold"
                >
                  Make Payment
                </th>
              </tr>
            </thead>
            <tbody>
              {requests?.map((request: any) => (
                <PastReqDetails
                  key={request._id}
                  request={request}

                ></PastReqDetails>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PastRequest;