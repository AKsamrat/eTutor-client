'use client';

import React, { useEffect, useState } from 'react';
import { DollarSign, ShoppingCart, Activity, Star } from 'lucide-react';
import { useUser } from '@/context/UserContext';


import { getAllPayment, getMyReview, getSingleStudent } from '@/services/student';
import { formatDistanceToNow } from 'date-fns';
import { IStudent } from '@/types/student';



interface Activity {
  id: number;
  action: string;
  time: string;
  type: string;
}

interface MetricCardProps {
  title: string;
  value: string;

  icon: React.ComponentType<{ className?: string }>;
  trend: 'up' | 'down';
}

const Dashboard: React.FC = () => {
  const { user } = useUser()
  const tEmail: any = (user?.email)
  const [student, setStudent] = useState<IStudent>()
  const [reviews, setReviews] = useState<any[]>([])
  const [payments, setPayments] = useState<any[]>([])
  const sId = (student?._id)
  const pId: string | undefined = user?.userId;
  console.log(payments, sId, pId, reviews)

  useEffect(() => {
    const fetchData = async (tEmail) => {
      const [tutorData] = await Promise.all([
        getSingleStudent(tEmail),

      ]);
      // console.log(tutorData)
      setStudent(tutorData.data);

    };

    fetchData(tEmail);

  }, [user]);
  useEffect(() => {

    if (!sId || !pId) return; // Prevent running if sId is undefined

    const reqData = async () => {
      try {
        const [tutorData, request] = await Promise.all([
          getMyReview(sId),
          getAllPayment(pId)

        ]);
        setReviews(tutorData.data);
        setPayments(request.data)
      } catch (error) {
        console.error("Error fetching requests:", error);
      }
    };

    reqData();
  }, [sId, pId]);

  const totalSpent = payments.reduce((sum, payment) => sum + payment?.amount, 0);
  const totalReviews = reviews.length.toString();
  const totalOrder = payments.length.toString();
  let pendingRequests;
  if (payments) {

    pendingRequests = payments?.filter(
      (request) => request.status === "pending"
    ).length.toString();
  }
  console.log(pendingRequests)



  const MetricCard: React.FC<MetricCardProps> = ({ title, value, icon: Icon }) => (
    <div className="bg-[#c6ecde41] rounded-lg shadow-md p-6 border-l-4 border-[#109362]">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-700">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
          {/* <div className="flex items-center mt-2">
            {trend === 'up' ? (
              <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
            ) : (
              <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
            )}

          </div> */}
        </div>
        <div className="p-3 bg-white border-2 border-[#1b8d63b9]  rounded-full">
          <Icon className="h-6 w-6 text-[#FBB32D]" />
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Student Dashboard</h1>
              <p className="mt-1 text-sm text-gray-500">Welcome back! Here&apos;s what&apos;s happening with your tutoring platform today.</p>
            </div>
            <div className="text-sm text-[#109362]">
              Last updated: {new Date().toLocaleString()}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Total Review"
            value={totalReviews}
            // change="+12.5%"
            icon={Star}
            trend="up"
          />
          <MetricCard
            title="Total spend."
            value={totalSpent}
            // change="+8.2%"
            icon={DollarSign}
            trend="up"
          />
          <MetricCard
            title="Total Order"
            value={totalOrder}
            // change="-2.1%"
            icon={ShoppingCart}
            trend="down"
          />
          <MetricCard
            title="Match Success Rate"
            value="87.4%"
            // change="+3.8%"
            icon={Activity}
            trend="up"
          />
        </div>



        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Activity */}
          <div className="bg-white rounded-lg shadow-md p-6 border-2 border-[#c6ecdee7]">
            <h3 className="text-lg font-semibold text-[#FBB32D] mb-4">Recent Activity</h3>
            <div className="space-y-4">
              {payments?.map((activity) => (
                <div key={activity.id} className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <div className="h-8 w-8 bg-[#c6ecde41] rounded-full flex items-center justify-center">
                      <div className="h-2 w-2 bg-[#109362] rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{activity.method
                    } payment paid by {user?.name} - <span className="text-[#109362]"> {activity.amount}</span> </p>
                    <p className="text-xs text-gray-500">{formatDistanceToNow(new Date(activity?.updatedAt), { addSuffix: true })}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-white rounded-lg shadow-md p-6 border-2 border-[#c6ecdee7]">
            <h3 className="text-lg font-semibold text-[#FBB32D] mb-4">Request Details</h3>

            {
              reviews?.map(req => (

                <div key={req?._id} className="flex justify-between items-center gap-2 p-4 border rounded-lg bg-white shadow-sm mt-2">
                  {/* Left Section: Image, Name, Duration */}
                  <div className="flex items-center gap-4">
                    <img
                      src={req?.tutor?.pic || "/default-avatar.png"} // use fallback image if needed
                      alt={req?.student?.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-sm font-semibold text-gray-800">{req?.tutor?.name}</p>
                      <p className="text-xs text-gray-500">Subject: {req?.tutor?.subject || "N/A"} </p>
                    </div>
                  </div>

                  {/* Right Section: Status */}
                  <div>
                    <span className="text-sm font-medium text-[#109362]">{req?.tutor?.ratingCount} </span> <span className='text-yellow-500'>star </span>
                  </div>
                </div>
              ))
            }


          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;