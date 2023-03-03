import {
  CardSlide,
  ContainerModal,
  ModalBackground,
  SlideImage,
} from "./style";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { BussinessHighlightProductMock } from "@/mock";

SwiperCore.use([Navigation, Pagination]);

export const ModalAnimal = () => {
  return (
    <>
    <ModalBackground/>
      <ContainerModal>
        <CardSlide>
          <Swiper
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            {BussinessHighlightProductMock.map((item) => (
              <SwiperSlide key={item.name}>
                <SlideImage src={item.photo} alt="foto animal" />
              </SwiperSlide>
            ))}
          </Swiper>
        </CardSlide>
      </ContainerModal>
    </>
  );
};
