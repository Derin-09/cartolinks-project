'use client'
import Carousel, { CarouselType } from "./ui/Carousel"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import WAN from '@/public/images/cyberpunk-warrior-woman-portrait.jpg'
import Krea from '@/public/images/scotch-whiskey-glass-gray-background.jpg'

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const carouselContent: CarouselType[] = [
  {
    top: "NOW IMAGE MODEL",
    title: "WAN 2.2",
    subtitle: "WAN 2.2 Image Generation",
    bgPic: WAN,
    details:
      "Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures",
    buttonText: "Try WAN 2.2",
  },
  {
    top: "OPEN SOURCE MODEL",
    title: "Open Source",
    subtitle: "FLUX.1 Krea",
    bgPic: Krea,
    details:
      "We're making the weights to our FLUX.1 Krea model open-source. Download and run our model weights, read the technical report, or generate with it in Krea Image",
    buttonText: "Try Open Source",
  },
  {
    top: "NOW IMAGE MODEL",
    title: "WAN 2.2",
    subtitle: "WAN 2.2 Image Generation",
    bgPic: WAN,
    details:
      "Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures",
    buttonText: "Try WAN 2.2",
  },
  {
    top: "OPEN SOURCE MODEL",
    title: "Open Source",
    subtitle: "FLUX.1 Krea",
    bgPic: Krea,
    details:
      "We're making the weights to our FLUX.1 Krea model open-source. Download and run our model weights, read the technical report, or generate with it in Krea Image",
    buttonText: "Try Open Source",
  },
]

export default function HeroCarousel() {
  return (
    <section className="relative px-6 py-8">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
            768: {slidesPerView: 1},
            1024: {slidesPerView: 1.6}
        }}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        pagination={{
          el: ".swiper-pagination-custom",
          clickable: true,
        }}
        autoplay={{ delay: 4000 }}
        loop
        className="rounded-2xl overflow-hidden mb-3"
      >
        {carouselContent.map((item, idx) => (
          <SwiperSlide key={idx} className="h-full">
            <Carousel props={item} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center px-6 text-3xl">
  <div className="swiper-pagination-custom flex justify-center" />
  <div className="flex gap-2">
    <button className="swiper-button-prev-custom w-8 h-8 flex items-center justify-center rounded-full hover:cursor-pointer bg-gray-200 text-black text-lg">
  <span className="leading-none">‹</span>
</button>
<button className="swiper-button-next-custom w-8 h-8 flex items-center justify-center rounded-full hover:cursor-pointer bg-gray-200 text-black text-lg">
  <span className="leading-none">›</span>
</button>
  </div>
</div>

    </section>
  )
}

