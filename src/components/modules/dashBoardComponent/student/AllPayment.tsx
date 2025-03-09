
import { useRouter } from "next/navigation";


const AllPayment = ({ request }: { request: any }) => {
  const route = useRouter()
  // const tutorId = request?.order?.products[0].tutor;
  // console.log(tutorId)
  return (
    <tr data-aos="fade-left" data-aos-duration="1000">

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{request?._id}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{request?.transactionId}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{request?.amount}</p>
      </td>

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{request?.status}</p>
      </td>

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{request?.method}</p>

      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">

        <button
          disabled={request?.status !== "Paid"}
          onClick={() => route.push(`/student/paymentHistory/${request?.order?.products[0].tutor}`)}
          className="relative cursor-pointer disabled:hidden inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
          ></span>
          <span className="relative"> Review</span>
        </button>

      </td>
    </tr>
  );
};

export default AllPayment;