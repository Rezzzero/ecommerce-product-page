import { ItemType } from "../../types/types";
import removeIcon from "../../assets/icons/icon-delete.svg";

export const PriceWidget = ({
  cart,
  item,
  handleRemove,
}: {
  cart: ItemType[];
  item: ItemType;
  handleRemove: (title: string) => void;
}) => {
  const getCount = (title: string) => {
    return cart.filter((cartItem) => cartItem.title === title).length;
  };

  const priceWithDiscount = (price: number, discount: number) => {
    return price - (price * discount) / 100;
  };

  return (
    <>
      <div className="flex justify-between items-center mb-5">
        <img src={item.image} alt="item img" className="w-12 rounded-md" />
        <div className="flex flex-col">
          <p className="text-gray-500 font-normal">{item.title}</p>
          <p className="font-normal">
            ${priceWithDiscount(item.price, item.discount)} x{" "}
            {getCount(item.title)}{" "}
            <b>
              $
              {priceWithDiscount(item.price, item.discount) *
                getCount(item.title)}
            </b>
          </p>
        </div>
        <img
          src={removeIcon}
          alt="remove icon"
          onClick={() => handleRemove(item.title)}
          className="h-4"
        />
      </div>
      <button type="button" className="w-full py-2 bg-orange-400 rounded-md">
        Checkout
      </button>
    </>
  );
};
