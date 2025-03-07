"use client"

import { ITutor } from "@/types/tutor";
import ReqDetails from "./ReqDetails";
import { useEffect, useState } from "react";
import { useUser } from "@/context/UserContext";
import { getSingleTutor } from "@/services/tutor";
import { getRequestForTutor } from "@/services/student";
import { IBooking } from "@/types/booking";


const Brequest = () => {
  const { user } = useUser()
  const tEmail: any = (user?.email)
  const [tutor, setTutor] = useState<ITutor>()
  const [requests, setRequests] = useState<IBooking[]>([])
  const tId = (tutor?._id)

  useEffect(() => {
    const fetchData = async (tEmail) => {
      const [tutorData] = await Promise.all([
        getSingleTutor(tEmail),

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
          getRequestForTutor(tId),

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
                  Approve/Reject
                </th>
              </tr>
            </thead>
            <tbody>
              {requests?.map((request: any) => (
                <ReqDetails
                  key={request._id}
                  request={request}

                ></ReqDetails>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Brequest;