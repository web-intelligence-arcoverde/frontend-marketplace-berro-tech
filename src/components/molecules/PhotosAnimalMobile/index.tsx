import { ContainerModalMobile, SlideImage } from "./style";
import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IDocument } from "@/types/ICardProductProps";

SwiperCore.use([Pagination]);

export const PhotosAnimalMobile = ({ allPhotos }: any) => {
  return (
    <ContainerModalMobile>
      <Swiper
        slidesPerView={1}
        onSlideChange={() => {}}
        onSwiper={(swiper) => swiper}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {allPhotos?.map((item: IDocument) => (
          <SwiperSlide key={item.id} >
            <SlideImage width={500} height={500} src={item.url} alt="foto animal" />
          </SwiperSlide>
        ))}
      </Swiper>
    </ContainerModalMobile>
  );
};
