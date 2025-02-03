"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const swiperData = [
  {
    id: 1,
    image: "/post-slide-1.jpg",
    title: "Волгоградский государственный технический университет",
    description: "",
  },
  {
    id: 2,
    image: "/post-slide-4.jpg",
    title: "",
    description: "",
  },
  {
    id: 3,
    image: "/post-slide-2.jpg",
    title: "",
    description: "",
  },
];

export default function SwiperSection() {
  return (
    <div className="container mx-auto p-6">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="swiper-container"
      >
        {swiperData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-[400px] object-cover rounded-lg"
              />
              <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white p-4 rounded-lg">
                <h3 className="text-lg font-semibold">{slide.title}</h3>
                <p className="text-sm">{slide.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
