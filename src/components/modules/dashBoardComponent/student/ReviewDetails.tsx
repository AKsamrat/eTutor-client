
import { format } from "date-fns";
// import { useRouter } from "next/navigation";


const ReviewDetails = ({ request }: { request: any }) => {
  //approve request=====================
  // const route = useRouter()
  // const dispatch = useAppDispatch();
  console.log(request)
  const formattedDate = format(new Date(request?.createdAt), "dd MMM yyyy, hh:mm a");


  return (
    <tr data-aos="fade-left" data-aos-duration="1000">

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{request?.tutor?.name}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{request?.rating}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{request?.review}</p>
      </td>

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{formattedDate}</p>
      </td>


    </tr>
  );
};

export default ReviewDetails;