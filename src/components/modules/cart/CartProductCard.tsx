import { Button } from "@/components/ui/button";
import { decrementOrderQuantity, incrementOrderQuantity, removeProduct } from "@/redux/features/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import { IBooking } from "@/types/booking";
import { Minus, Plus, Trash } from "lucide-react";
// import Image from "next/image";

export default function CartProductCard({ product }: { product: IBooking }) {
  const dispatch = useAppDispatch();

  const handleIncrementQuantity = (id: string) => {
    dispatch(incrementOrderQuantity(id));
  };

  const handleDecrementQuantity = (id: string) => {
    dispatch(decrementOrderQuantity(id));
  };

  const handleRemoveProduct = (id: string) => {
    dispatch(removeProduct(id));
  };
  return (
    <div className="bg-white rounded-lg flex p-5 gap-5">
      {/* <div className="h-full w-32 rounded-md overflow-hidden">
        <Image
          src={product?.tutorId?.pic}
          height={200}
          width={200}
          alt="product"
          className="aspect-square object-cover"
        />
      </div> */}
      <div className="flex flex-col justify-between flex-grow">
        <h1 className="text-xl font-semibold">{product?.tutorId?.name}</h1>
        <div className="flex gap-5 my-2">
          <p>
            <span className="text-gray-500">Subject:</span>{" "}
            <span className="font-semibold">{product?.tutorId?.subject}</span>
          </p>
          <p>
            <span className="text-gray-500">Duration Month:</span>{" "}
            <span className="font-semibold">{product?.duration}</span>
          </p>
        </div>
        <hr className="my-1" />
        <div className="flex items-center justify-between">
          <h2>
            Per Month Price:
            {product.price}
          </h2>
          <div className="flex items-center gap-2">
            <p className="text-gray-500 font-semibold">Quantity</p>
            <Button
              onClick={() => handleDecrementQuantity(product._id)}
              variant="outline"
              className="size-8 rounded-sm"
            >
              <Minus />
            </Button>
            <p className="font-semibold text-xl p-2">
              {product?.orderQuantity}
            </p>
            <Button
              onClick={() => handleIncrementQuantity(product._id)}
              variant="outline"
              className="size-8 rounded-sm"
            >
              <Plus />
            </Button>
            <Button
              onClick={() => handleRemoveProduct(product._id)}
              variant="outline"
              className="size-8 rounded-sm"
            >
              <Trash className="text-red-500/50" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}