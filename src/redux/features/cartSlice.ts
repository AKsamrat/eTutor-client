import { IProduct } from "@/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { addCoupon } from "@/services/cart";

export interface CartProduct extends IProduct {
  orderQuantity: number;
  duration: number;
  tutorId: string;
}

interface InitialState {
  products: CartProduct[];
  // city: string;
  // shippingAddress: string;
  // shopId: string;
  // coupon: {
  //   code: string;
  //   discountAmount: number;
  //   isLoading: boolean;
  //   error: string;
  // };
}

const initialState: InitialState = {
  products: [],
  // city: "",
  // shippingAddress: "",
  // shopId: "",
  // coupon: {
  //   code: "",
  //   discountAmount: 0,
  //   isLoading: false,
  //   error: "",
  // },
};

export const fetchCoupon = createAsyncThunk(
  "cart/fetchCoupon",
  async ({
    couponCode,
    subTotal,
    shopId,
  }: {
    couponCode: string;
    subTotal: number;
    shopId: string;
  }) => {
    try {
      const res = await addCoupon(couponCode, subTotal, shopId);

      if (!res.success) {
        throw new Error(res.message);
      }

      return res;
    } catch (err: any) {
      console.log(err);
      throw new Error(err.message);
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {

      const productToAdd = state.products.find(
        (product) => product._id === action.payload._id
      );

      if (productToAdd) {
        productToAdd.orderQuantity += 1;
        return;
      }

      state.products.push({ ...action.payload, orderQuantity: 1 });
    },
    incrementOrderQuantity: (state, action) => {
      const productToIncrement = state.products.find(
        (product) => product._id === action.payload
      );

      if (productToIncrement) {
        productToIncrement.orderQuantity += 1;
        return;
      }
    },
    decrementOrderQuantity: (state, action) => {
      const productToIncrement = state.products.find(
        (product) => product._id === action.payload
      );

      if (productToIncrement && productToIncrement.orderQuantity > 1) {
        productToIncrement.orderQuantity -= 1;
        return;
      }
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product._id !== action.payload
      );
    },

    clearCart: (state) => {
      state.products = [];

    },
  },

});

//* Products 01916456963

export const orderedProductsSelector = (state: RootState) => {
  return state.cart.products;
};

export const orderSelector = (state: RootState) => {
  return {
    products: state.cart.products.map((product: any) => ({
      product: product._id,
      quantity: product.orderQuantity,
      color: "White",
      tutor: product?.tutorId?._id,
      // finalAmount: product.price * product.orderQuantity * product.duration,
      // totalAmount: product.price * product.orderQuantity * product.duration,
    })),


    totalAmount: state.cart.products.reduce(
      (total, product) => total + product.price * product.orderQuantity * product.duration,
      0
    ),

    finalAmount: state.cart.products.reduce(
      (total, product) => total + product.price * product.orderQuantity * product.duration,
      0
    ),

    paymentMethod: "Online",
  };
};



//* Payment

export const subTotalSelector = (state: RootState) => {
  return state.cart.products.reduce((acc, product) => {
    if (product.offerPrice) {
      return acc + product.offerPrice * product.orderQuantity;
    } else {
      return acc + product.price * product.orderQuantity * product.duration;
    }
  }, 0);
};



export const grandTotalSelector = (state: RootState) => {
  const subTotal = subTotalSelector(state);

  return subTotal;
};


export const {
  addProduct,
  incrementOrderQuantity,
  decrementOrderQuantity,
  removeProduct,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;