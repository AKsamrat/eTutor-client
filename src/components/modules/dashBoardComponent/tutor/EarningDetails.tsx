import { format } from "date-fns";


const EarningDetails = ({ request }: { request: any }) => {
  const formattedDate = format(new Date(request?.createdAt), "dd MMM yyyy, hh:mm a");
  console.log(formattedDate);
  return (
    <tr data-aos="fade-left" data-aos-duration="1000">

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{request?.user?.name}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{request?._id}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{request?.totalAmount}</p>
      </td>

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{formattedDate}</p>
      </td>

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{request?.method}</p>

      </td>
    </tr>
  );
};

export default EarningDetails;