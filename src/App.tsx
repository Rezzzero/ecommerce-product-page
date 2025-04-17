import { useEffect, useState } from "react";
import { NavBar } from "./navigation/NavBar";
import { NavModal } from "./navigation/NavModal";
import { CartModal } from "./components/cart/CartModal";
import { SwiperComponent } from "./components/swiper/SwiperComponent";
import { ItemDesc } from "./components/item/ItemDesc";
import { ItemType } from "./types/types";
import { ProductModal } from "./components/product/ProductModal";
import { useDeviceSize } from "./hooks/useDeviceSize";

function App() {
  const [itemCounter, setItemCounter] = useState(0);
  const [isNavModalOpen, setIsNavModalOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [cart, setCart] = useState<ItemType[]>([]);
  const { width } = useDeviceSize();

  useEffect(() => {
    const body = document.body;

    if (isNavModalOpen || isCartModalOpen || isProductModalOpen) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "";
    }

    return () => {
      body.style.overflow = "";
    };
  }, [isNavModalOpen, isCartModalOpen, isProductModalOpen]);

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
          openModal={() => setIsNavModalOpen(true)}
          isCartModalOpen={() => setIsCartModalOpen(true)}
          cartLength={cart.length}
        />
      </div>
      <div className="lg:container lg:mx-auto lg:flex lg:justify-between lg:px-30 lg:pt-16">
        <SwiperComponent openModal={() => setIsProductModalOpen(true)} />
        <ItemDesc
          itemCounter={itemCounter}
          handleAddToCart={handleAddToCart}
          setItemCounter={setItemCounter}
        />
      </div>
      {isNavModalOpen && (
        <NavModal closeModal={() => setIsNavModalOpen(false)} />
      )}
      {isCartModalOpen && (
        <CartModal
          cart={cart}
          handleRemoveFromCart={handleRemoveFromCart}
          closeModal={() => setIsCartModalOpen(false)}
        />
      )}
      {isProductModalOpen && width > 1024 && (
        <ProductModal closeModal={() => setIsProductModalOpen(false)} />
      )}
    </>
  );
}

export default App;
