
import { addProduct } from "@/redux/features/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import { IBooking } from "@/types/booking";
// import { useRouter } from "next/navigation";


const PastReqDetails = ({ request }: { request: IBooking }) => {
  //approve request=====================
  // const route = useRouter()
  const dispatch = useAppDispatch();
  console.log(request)
  const handleApprove = async (product) => {
    dispatch(addProduct(product))
    try {
      // const res = await approveRequest(id)
      // console.log(res)
      // if (res.success) {
      //   toast.success("Request Approved successfully");
      //   route.push("/booking/Request")
      // } else {
      //   toast.success("Request not approve successfully");

      // }
    } catch (err: any) {
      console.error(err);
    }

  };


  return (
    <tr data-aos="fade-left" data-aos-duration="1000">

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{request?.tutorId?.name}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{request?.duration}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{request?.tutorId?.email}</p>
      </td>

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{request?.status}</p>
      </td>

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">

        <button
          disabled={request?.status !== "completed"}
          onClick={() => handleApprove(request)}
          className="relative cursor-pointer disabled:hidden inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
          ></span>
          <span className="relative"> Payment</span>
        </button>
      </td>
    </tr>
  );
};

export default PastReqDetails;