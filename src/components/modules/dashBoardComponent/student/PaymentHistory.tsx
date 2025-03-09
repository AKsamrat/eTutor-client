
"use client"
import { useUser } from "@/context/UserContext";
import { getAllPayment } from "@/services/student";

import { useEffect, useState } from "react";
import AllPayment from "./AllPayment";


const PaymentHistory = () => {
  const [students, setStudents] = useState<any>()
  const { user }: any = useUser();
  const studentId = user?.userId;
  console.log(studentId, students)
  useEffect(() => {
    const fetchData = async (studentId) => {
      const [studentData] = await Promise.all([
        getAllPayment(studentId),

      ]);
      // console.log(StudentData)
      setStudents(studentData.data);
    };

    fetchData(studentId);

  }, [studentId]);
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
                  Order ID
                </th>
                <th
                  scope="col"
                  className="px-5 py-3 bg-[#109361] border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold"
                >
                  Transaction Id
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
                  Status
                </th>
                <th
                  scope="col"
                  className="px-5 py-3 bg-[#109361] border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold"
                >
                  Payment Method
                </th>
                <th
                  scope="col"
                  className="px-5 py-3 bg-[#109361] border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold"
                >
                  Send Review
                </th>
              </tr>
            </thead>
            <tbody>
              {students?.map((request: any) => (
                <AllPayment
                  key={request._id}
                  request={request}

                ></AllPayment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;