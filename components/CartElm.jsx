import Image from "next/image";

import { PROD as oneProduct } from "@/app/page";

const CartElm = ({ cartProd, removeItem, index }) => {
  const quantity = cartProd.quant;

  const priceDiscount = oneProduct.price * oneProduct.discount;
  const total = priceDiscount * quantity;

  return (
    <div className="flex items-center">
      <Image
        src={`/${oneProduct.tnails[0]}`}
        alt="product"
        width={40}
        height={40}
        className="rounded-lg mr-3"
      />
      <div className="text-gray-600 mr-3">
        <p>{oneProduct.title}</p>
        <div className="flex">
          <p> {`$${priceDiscount} x ${quantity}`}</p>
          <p className="text-black ml-2 font-bold">{`$${total}`}</p>
        </div>
      </div>

      <div className="ml-14 w-4 h-4" onClick={() => removeItem(index)}>
        <Image src={"/icon-delete.svg"} alt="delete" width={30} height={30} />
      </div>
    </div>
  );
};

export default CartElm;
