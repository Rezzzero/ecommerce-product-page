import { ItemType } from "../../types/types";
import { PriceWidget } from "../price-widget/PriceWidget";

export const CartModal = ({
  cart,
  handleRemoveFromCart,
  closeModal,
}: {
  cart: ItemType[];
  handleRemoveFromCart: (title: string) => void;
  closeModal: () => void;
}) => {
  const listOfUniqueItems = [...new Set(cart.map((item) => item))];

  return (
    <div>
      <div className="fixed z-10 inset-0" onClick={closeModal} />

      <div className="fixed z-20 top-20 left-3 flex flex-col bg-white font-bold p-5 w-[352px] h-[230px] rounded-md lg:top-24 lg:right-15 lg:left-auto lg:shadow-[0_15px_25px_-10px_rgba(0,0,0,0.5)]">
        <h1 className={`${cart.length > 0 ? "mb-12" : "mb-5"}`}>Cart</h1>
        {cart.length > 0 ? (
          <div>
            {listOfUniqueItems.map((item, index) => (
              <PriceWidget
                key={index}
                cart={cart}
                item={item}
                handleRemove={handleRemoveFromCart}
              />
            ))}
          </div>
        ) : (
          <p className="self-center my-auto text-gray-500">
            Your cart is empty.
          </p>
        )}
      </div>
    </div>
  );
};
