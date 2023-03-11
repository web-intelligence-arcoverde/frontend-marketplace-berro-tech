import { CardSlide, SlideImage } from "./style";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect } from "react";
import { Modal } from "@/components/atoms";

SwiperCore.use([Navigation, Pagination]);

export const SlideProduct = ({ handleModal, allPhotos }: any) => {
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleModal();
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleModal]);

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
            {allPhotos.map((item: any, index: number) => (
              <SwiperSlide key={index}>
                <SlideImage src={item.photo} alt="foto animal" />
              </SwiperSlide>
            ))}
          </Swiper>
        </CardSlide>
      </Modal>
    </>
  );
};
