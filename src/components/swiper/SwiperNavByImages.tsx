import { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";

export const SwiperNavByImages = ({
  imageData,
  activeIndex,
}: {
  imageData: { [key: number]: { image: string } };
  activeIndex?: number;
}) => {
  const swiper = useSwiper();
  const [internalActiveIndex, setInternalActiveIndex] = useState(
    swiper.activeIndex
  );

  useEffect(() => {
    if (activeIndex === undefined) {
      const handleSlideChange = () =>
        setInternalActiveIndex(swiper.activeIndex);
      swiper.on("slideChange", handleSlideChange);
      return () => swiper.off("slideChange", handleSlideChange);
    }
  }, [swiper, activeIndex]);

  const currentIndex = activeIndex ?? internalActiveIndex;

  return (
    <div className="flex gap-8 mt-10">
      {Object.values(imageData).map((item, index) => (
        <div
          key={index}
          onClick={() => swiper.slideTo(index)}
          className={`${
            currentIndex === index
              ? "border-3 border-orange-600 rounded-xl"
              : ""
          } relative cursor-pointer`}
        >
          <img
            src={item.image}
            alt="product image"
            className="w-[90px] rounded-xl"
          />
          <div
            className={`bg-white opacity-0 absolute top-0 left-0 w-full h-full ${
              currentIndex === index ? "opacity-50" : "hover:opacity-50"
            } rounded-xl`}
          ></div>
        </div>
      ))}
    </div>
  );
};
