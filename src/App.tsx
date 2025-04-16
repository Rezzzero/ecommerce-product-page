import { useEffect, useState } from "react";
import { NavBar } from "./navigation/NavBar";
import { NavModal } from "./navigation/NavModal";
import { CartModal } from "./components/cart/CartModal";
import { SwiperComponent } from "./components/swiper/SwiperComponent";
import { ItemDesc } from "./components/item/ItemDesc";
import { ItemType } from "./types/types";

function App() {
  const [itemCounter, setItemCounter] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openCartModal, setOpenCartModal] = useState(false);
  const [cart, setCart] = useState<ItemType[]>([]);

  useEffect(() => {
    const body = document.body;

    if (isModalOpen || openCartModal) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "";
    }

    return () => {
      body.style.overflow = "";
    };
  }, [isModalOpen, openCartModal]);

  const handleAddToCart = (item: ItemType, itemCounter: number) => {
    for (let i = 0; i < itemCounter; i++) {
      setCart((prev) => [...prev, item]);
    }
  };

  const handleRemoveFromCart = (title: string) => {
    setCart(cart.filter((item) => item.title !== title));
  };

  return (
    <>
      <div className="fixed top-0 lg:static z-10 bg-white container mx-auto">
        <NavBar
          openModal={() => setIsModalOpen(true)}
          openCartModal={() => setOpenCartModal(true)}
          cartLength={cart.length}
        />
      </div>
      <div className="lg:container lg:mx-auto lg:flex lg:gap-20 lg:px-20 lg:pt-20">
        <SwiperComponent />
        <ItemDesc
          itemCounter={itemCounter}
          handleAddToCart={handleAddToCart}
          setItemCounter={setItemCounter}
        />
      </div>
      {isModalOpen && <NavModal closeModal={() => setIsModalOpen(false)} />}
      {openCartModal && (
        <CartModal
          cart={cart}
          handleRemoveFromCart={handleRemoveFromCart}
          closeModal={() => setOpenCartModal(false)}
        />
      )}
    </>
  );
}

export default App;
