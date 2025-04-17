import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/less/pagination";
import { useRef } from "react";
import { NavigationOptions } from "swiper/types";
import prevIcon from "../../assets/icons/icon-previous.svg";
import nextIcon from "../../assets/icons/icon-next.svg";
import closeModalIcon from "../../assets/icons/icon-close-modal.svg";
import { SwiperNavByImages } from "../swiper/SwiperNavByImages";
import { imageData } from "../../constants/constants";

export const ProductModal = ({ closeModal }: { closeModal: () => void }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className="relative">
      <div
        className="fixed z-10 bg-black opacity-70 inset-0"
        onClick={closeModal}
      />

      <div className="fixed z-20 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[460px]">
        <img
          src={closeModalIcon}
          alt="close modal"
          onClick={closeModal}
          className="absolute top-[-50px] right-0 w-5 cursor-pointer"
        />
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={10}
          slidesPerView={1}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onSwiper={(swiper) => {
            setTimeout(() => {
              const navigation = swiper.params.navigation as NavigationOptions;
              navigation.prevEl = prevRef.current;
              navigation.nextEl = nextRef.current;
              swiper.navigation.destroy();
              swiper.navigation.init();
              swiper.navigation.update();
            });
          }}
        >
          {Object.values(imageData).map((item, index) => (
            <SwiperSlide key={index}>
              <img
                src={item.image}
                alt="product image"
                className="w-[460px] rounded-xl"
              />
            </SwiperSlide>
          ))}
          <SwiperNavByImages imageData={imageData} />
        </Swiper>
        <div>
          <button
            ref={prevRef}
            className="flex absolute top-[40%] -translate-y-[40%] left-[-24px] z-10 w-12 h-12 bg-white rounded-full pl-[15px] py-[15px] cursor-pointer"
          >
            <img src={prevIcon} alt="prev icon" />
          </button>
          <button
            ref={nextRef}
            className="flex absolute top-[40%] -translate-y-[40%] right-[-24px] z-10 w-12 h-12 bg-white rounded-full pl-[18px] py-[15px] cursor-pointer"
          >
            <img src={nextIcon} alt="next icon" />
          </button>
        </div>
      </div>
    </div>
  );
};
