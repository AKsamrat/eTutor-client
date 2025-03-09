"use client"
import { useUser } from "@/context/UserContext";
import { getMyEarn, getSingleTutor } from "@/services/tutor";
import { ITutor } from "@/types/tutor";
import { useEffect, useState } from "react";
import EarningDetails from "./EarningDetails";


const MyEarning = () => {
  const { user } = useUser()
  const tEmail: any = (user?.email)
  const [tutor, setTutor] = useState<ITutor>()
  const [orders, setOrders] = useState<any[]>([])
  const tId = (tutor?._id)
  console.log(orders)

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
          getMyEarn(tId),

        ]);
        setOrders(tutorData.data);
      } catch (error) {
        console.error("Error fetching requests:", error);
      }
    };

    reqData();
  }, [tId]);
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
                  Student Name
                </th>
                <th
                  scope="col"
                  className="px-5 py-3 bg-[#109361] border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold"
                >
                  Order Id
                </th>


                <th
                  scope="col"
                  className="px-5 py-3 bg-[#109361] border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold"
                >
                  Amount
                </th>
                <th
                  scope="col"
                  className="px-5 py-3 bg-[#109361] border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold"
                >
                  Order Date
                </th>

              </tr>
            </thead>
            <tbody>
              {orders?.map((request: any) => (
                <EarningDetails
                  key={request._id}
                  request={request}

                ></EarningDetails>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyEarning;