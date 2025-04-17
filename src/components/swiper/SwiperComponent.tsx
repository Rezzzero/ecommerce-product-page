import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/less/pagination";
import { SwiperNavigation } from "./SwiperNavigation";
import { imageData } from "../../constants/constants";

export const SwiperComponent = ({ openModal }: { openModal: () => void }) => {
  return (
    <div className="mt-6 relative lg:max-w-[460px]">
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
      >
        {Object.values(imageData).map((item, index) => (
          <SwiperSlide key={index}>
            <img
              src={item.image}
              alt="product image"
              onClick={openModal}
              className="lg:w-[460px] lg:rounded-xl cursor-pointer"
            />
          </SwiperSlide>
        ))}
        <SwiperNavigation imageData={imageData} />
      </Swiper>
    </div>
  );
};
