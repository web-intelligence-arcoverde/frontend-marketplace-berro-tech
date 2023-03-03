import { ContainerModalMobile, SlideImage } from "./style";
import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

SwiperCore.use([Pagination]);

export const PhotosAnimalMobile = ({allPhotos}:any) => {
  return (
    <ContainerModalMobile>
      <Swiper
        slidesPerView={1}
        onSlideChange={() => {}}
        onSwiper={(swiper) => swiper}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {allPhotos.map((item:any, index :number) => (
          <SwiperSlide key={index}>
            <SlideImage src={item.photo} alt="foto animal" />
          </SwiperSlide>
        ))}
      </Swiper>
    </ContainerModalMobile>
  );
};
