import { CardSlide, SlideImage } from "./style";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Modal } from "@/components/atoms";
import useModalOverflow from "@/hooks/useModalOverflow";
import { IDocument } from "@/types/ICardProductProps";

SwiperCore.use([Navigation, Pagination]);

export const SlideProduct = ({ handleModal, allPhotos }: any) => {
  useModalOverflow(handleModal, handleModal);

  return (
    <>
      <Modal onClick={handleModal}>
        <CardSlide>
          <Swiper
            slidesPerView={1}
            onSlideChange={() => {}}
            onSwiper={(swiper) => swiper}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            {allPhotos.map((item: IDocument) => (
              <SwiperSlide key={item.id}>
                <SlideImage
                  width={500}
                  height={500}
                  src={item.url}
                  alt="foto animal"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </CardSlide>
      </Modal>
    </>
  );
};
