import { useState } from "react";
import { NavBar } from "./navigation/NavBar";
import { NavModal } from "./navigation/NavModal";
import { CartModal } from "./components/cart/CartModal";
import { SwiperComponent } from "./components/swiper/SwiperComponent";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openCartModal, setOpenCartModal] = useState(false);

  return (
    <>
      <div className="fixed top-0 z-10 bg-white container mx-auto">
        <NavBar
          openModal={() => setIsModalOpen(true)}
          openCartModal={() => setOpenCartModal(true)}
        />
      </div>
      <SwiperComponent />
      {isModalOpen && <NavModal closeModal={() => setIsModalOpen(false)} />}
      {openCartModal && (
        <CartModal closeModal={() => setOpenCartModal(false)} />
      )}
    </>
  );
}

export default App;
