import addIcon from "../../assets/icons/icon-plus.svg";
import removeIcon from "../../assets/icons/icon-minus.svg";
import cartIcon from "../../assets/icons/icon-cart-black.svg";
import { ItemType } from "../../types/types";

const itemData = {
  image: "/images/image-product-1.jpg",
  company: "SNEAKER COMPANY",
  title: "Fall Limited Edition Sneakers",
  description: `These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.`,
  price: 250,
  discount: 50,
};

export const ItemDesc = ({
  itemCounter,
  handleAddToCart,
  setItemCounter,
}: {
  itemCounter: number;
  handleAddToCart: (item: ItemType, itemCounter: number) => void;
  setItemCounter: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const priceWithDiscount =
    itemData.price - (itemData.price * itemData.discount) / 100;
  return (
    <div className="flex flex-col gap-3 font-bold p-5 lg:pt-20 lg:max-w-[500px]">
      <p className="tracking-widest leading-none text-xs lg:text-sm lg:text-gray-500">
        {itemData.company}
      </p>
      <h1 className="text-2xl leading-none font-bold w-[300px] lg:w-[400px] lg:text-[40px] lg:mb-6">
        {itemData.title}
      </h1>
      <p className="text-gray-500 text-sm font-semibold lg:text-base">
        {itemData.description}
      </p>
      <div className="flex items-end lg:flex-col lg:items-start lg:gap-3 lg:mb-4">
        <div className="flex flex-row">
          <p className="text-2xl">${priceWithDiscount.toFixed(2)}</p>
          <div className="flex self-end items-center bg-black text-white text-sm h-6 px-2 ml-4 rounded-md">
            {itemData.discount}%
          </div>
        </div>
        <p className="ml-auto lg:ml-0 text-gray-500 line-through">
          ${itemData.price.toFixed(2)}
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-3">
        <div className="flex justify-between px-5 py-3 bg-gray-100 rounded-md lg:w-[210px]">
          <button
            type="button"
            onClick={() => {
              if (itemCounter > 0) {
                setItemCounter(itemCounter - 1);
              }
            }}
            className="cursor-pointer hover:opacity-50"
          >
            <img src={removeIcon} alt="remove icon" />
          </button>
          <p>{itemCounter}</p>
          <button
            type="button"
            onClick={() => setItemCounter(itemCounter + 1)}
            className="cursor-pointer hover:opacity-50"
          >
            <img src={addIcon} alt="add icon" />
          </button>
        </div>
        <button
          type="button"
          onClick={() => handleAddToCart(itemData, itemCounter)}
          className="flex justify-center w-full items-center gap-3 bg-orange-400 py-3 rounded-md lg:rounded-xl hover:bg-orange-300 cursor-pointer"
        >
          <img src={cartIcon} alt="cart icon" className="w-4 h-4" />
          Add to cart
        </button>
      </div>
    </div>
  );
};
