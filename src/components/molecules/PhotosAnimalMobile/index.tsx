import { ContainerModalMobile, SlideImage } from "./style";
import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { BussinessHighlightProductMock } from "@/mock";

SwiperCore.use([Pagination]);

export const PhotosAnimalMobile = () => {
  return (
    <ContainerModalMobile>
      <Swiper
        slidesPerView={1}
        onSlideChange={() => {}}
        onSwiper={(swiper) => swiper}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {BussinessHighlightProductMock.map((item, index) => (
          <SwiperSlide key={index}>
            <SlideImage src={item.photo} alt="foto animal" />
          </SwiperSlide>
        ))}
      </Swiper>
    </ContainerModalMobile>
  );
};
