import { useSwiper } from "swiper/react";
import prevIcon from "../../assets/icons/icon-previous.svg";
import nextIcon from "../../assets/icons/icon-next.svg";

export const SwiperNavigation = () => {
  const swiper = useSwiper();

  return (
    <>
      <button
        type="button"
        onClick={() => swiper.slidePrev()}
        className="flex absolute top-1/2 left-3 z-10 w-8 h-8 bg-white rounded-full pl-[10px] py-[10px]"
      >
        <img src={prevIcon} alt="prev icon" />
      </button>
      <button
        type="button"
        onClick={() => swiper.slideNext()}
        className="flex absolute top-1/2 right-3 z-10 w-8 h-8 bg-white rounded-full pl-[13px] py-[10px]"
      >
        <img src={nextIcon} alt="next icon" />
      </button>
    </>
  );
};
