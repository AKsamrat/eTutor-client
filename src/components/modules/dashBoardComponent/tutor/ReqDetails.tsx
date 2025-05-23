
import { approveRequest, cancelRequest } from "@/services/tutor";
import { IBooking } from "@/types/booking";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const ReqDetails = ({ request }: { request: IBooking }) => {
  //approve request=====================
  const route = useRouter()
  console.log(request)
  const handleApprove = async (id) => {

    try {
      const res = await approveRequest(id)
      console.log(res)
      if (res.success) {
        toast.success("Request Approved successfully");
        route.push("/tutor/bookingRequest")
      } else {
        toast.success("Request not approve successfully");

      }
    } catch (err: any) {
      console.error(err);
    }

  };
  const handleDelete = async (id) => {
    try {
      const res = await cancelRequest(id)
      console.log(res)
      if (res.success) {
        toast.success("Request canceled successfully");
        route.push("/tutor/bookingRequest")
      } else {
        toast.success("Request not canceled successfully");

      }
    } catch (err: any) {
      console.error(err);
    }

  };

  return (
    <tr data-aos="fade-left" data-aos-duration="1000">

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{request?.studentId?.name}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{request?.duration}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{request?.studentId?.email}</p>
      </td>

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{request?.status}</p>
      </td>

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <button
          disabled={request?.status !== "pending"}
          onClick={() => handleDelete(request?._id)}
          className="relative cursor-pointer disabled:cursor-not-allowed inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
          ></span>
          <span className="relative">Cancel</span>
        </button>
        <button
          disabled={request?.status !== "pending"}
          onClick={() => handleApprove(request?._id)}
          className="relative cursor-pointer disabled:cursor-not-allowed inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
          ></span>
          <span className="relative">Approve</span>
        </button>
      </td>
    </tr>
  );
};

export default ReqDetails;