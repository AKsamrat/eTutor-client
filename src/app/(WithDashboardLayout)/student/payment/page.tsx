import CartProducts from "@/components/modules/cart/CartProducts";
import PaymentDetails from "@/components/modules/cart/PaymentDetails";


const paymentPage = () => {
  return (
    <div className="px-6 mx-auto">
      <p className="text-3xl font-bold text-center text-[#26BD8B]">-- Made Your Payment --</p>
      <div className="grid grid-cols-12 gap-8 my-5">
        <CartProducts></CartProducts>
        <PaymentDetails></PaymentDetails>
      </div>

    </div>
  );
};

export default paymentPage;