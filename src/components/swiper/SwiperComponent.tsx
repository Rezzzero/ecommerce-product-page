import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/less/pagination";
import { SwiperNavigation } from "./SwiperNavigation";
import { useDeviceSize } from "../../hooks/useDeviceSize";

const imageData = {
  1: {
    thumbnail: "/images/image-product-1-thumbnail.jpg",
    image: "/images/image-product-1.jpg",
  },
  2: {
    thumbnail: "/images/image-product-2-thumbnail.jpg",
    image: "/images/image-product-2.jpg",
  },
  3: {
    thumbnail: "/images/image-product-3-thumbnail.jpg",
    image: "/images/image-product-3.jpg",
  },
  4: {
    thumbnail: "/images/image-product-4-thumbnail.jpg",
    image: "/images/image-product-4.jpg",
  },
} as {
  [key: number]: {
    thumbnail: string;
    image: string;
  };
};

export const SwiperComponent = () => {
  const { width } = useDeviceSize();
  return (
    <div className="mt-6 relative lg:max-w-[450px]">
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
              className="lg:w-[450px] lg:rounded-xl"
            />
          </SwiperSlide>
        ))}
        {width < 768 && <SwiperNavigation />}
      </Swiper>
    </div>
  );
};
