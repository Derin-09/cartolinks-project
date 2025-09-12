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
        slidesPerView={1.6}
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
        className="rounded-2xl overflow-hidden"
      >
        {carouselContent.map((item, idx) => (
          <SwiperSlide key={idx} className="h-full">
            <Carousel props={item} />
          </SwiperSlide>
        ))}
      </Swiper>
      
      <div className=" inset-x-0 flex justify-center items-center">
        {/* Pagination Dots */}
        <div className="swiper-pagination-custom"></div>

        {/* Navigation Arrows */}
        <div className="flex gap-2 absolute right-6 bottom-0">
          <button className="swiper-button-prev-custom w-8 h-8 flex items-center justify-center rounded-md bg-gray-200 text-black dark:bg-gray-800 dark:text-white">
            ‹
          </button>
          <button className="swiper-button-next-custom w-8 h-8 flex items-center justify-center rounded-md bg-gray-200 text-black dark:bg-gray-800 dark:text-white">
            ›
          </button>
        </div>
      </div>
    </section>
  )
}









// 'use client'
// import Carousel, { CarouselType } from "./ui/Carousel";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Navigation, Pagination } from "swiper/modules";
// import WAN from '@/public/images/cyberpunk-warrior-woman-portrait.jpg'
// import Krea from '@/public/images/scotch-whiskey-glass-gray-background.jpg'

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// const carouselContent: CarouselType[] = [
//   {
//     top: "NOW IMAGE MODEL",
//     title: "WAN 2.2",
//     subtitle: "WAN 2.2 Image Generation",
//     bgPic: WAN,
//     details:
//       "Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures",
//     buttonText: "Try WAN 2.2",
//   },
//   {
//     top: "OPEN SOURCE MODEL",
//     title: "Open Source",
//     subtitle: "FLUX.1 Krea",
//     bgPic: Krea,
//     details:
//       "We're making the weights to our FLUX.1 Krea model open-source. Download and run our model weights, read the technical report, or generate with it in Krea Image",
//     buttonText: "Try Open Source",
//   },
//   {
//     top: "NOW IMAGE MODEL",
//     title: "WAN 2.2",
//     subtitle: "WAN 2.2 Image Generation",
//     bgPic: WAN,
//     details:
//       "Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures",
//     buttonText: "Try WAN 2.2",
//   },
//   {
//     top: "OPEN SOURCE MODEL",
//     title: "Open Source",
//     subtitle: "FLUX.1 Krea",
//     bgPic: Krea,
//     details:
//       "We're making the weights to our FLUX.1 Krea model open-source. Download and run our model weights, read the technical report, or generate with it in Krea Image",
//     buttonText: "Try Open Source",
//   },
// ];

// export default function HeroCarousel() {
//   return (
//     <section className="px-6 py-8">
//       <Swiper
//         modules={[Navigation, Pagination, Autoplay]}
//         spaceBetween={30}
//         slidesPerView={1.6}
//         navigation
//         pagination={{ clickable: true }}
//         autoplay={{ delay: 4000 }}
//         loop
//         className="rounded-2xl overflow-hidden"
//       >
//         {carouselContent.map((item, idx) => (
//           <SwiperSlide key={idx} className="h-full">
//             <Carousel props={item} />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// }










// 'use client'
// import Carousel, { CarouselType } from "./ui/Carousel";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Navigation, Pagination } from "swiper/modules";

// const carouselContent: CarouselType[] = [
//     {
//         top: 'NOW IMAGE MODEL',
//         title: 'WAN 2.2',
//         subtitle: 'WAN 2.2 Image Generation',
//         details: 'Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures',
//         buttonText: 'Try WAN 2.2'
//     },
//     {
//         top: 'OPEN SOURCE MODEL',
//         title: 'Open Source',
//         subtitle: 'FLUX.1 Krea',
//         details: "We're making the weights to our FLUX.1 Krea model open-source. Download and run our model weights, read the technical report, or generate with it in Krea Image",
//         buttonText: 'Try Open Source'
//     },
//     {
//         top: 'NOW IMAGE MODEL',
//         title: 'WAN 2.2',
//         subtitle: 'WAN 2.2 Image Generation',
//         details: 'Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures',
//         buttonText: 'Try WAN 2.2'
//     },
// ]

// export default function HeroCarousel() {
//     return (
//         <section className=" px-6 py-8">
//             <Swiper
//                 modules={[Navigation, Pagination, Autoplay]}
//                 spaceBetween={30}
//                 slidesPerView={1}
//                 navigation
//                 pagination={{ clickable: true }}
//                 //autoplay={{ delay: 4000 }}
//                 loop
//                 className="rounded-2xl overflow-hidden flex"
//             >
//             {carouselContent.map((item, idx) => (
//                 <SwiperSlide key={idx}>
//                     <Carousel props={{
//                         top: item.top,
//                         title: item.title,
//                         subtitle: item.subtitle,
//                         details: item.details,
//                         buttonText: item.buttonText
//                     }} />
//                     </SwiperSlide>
//             ))}
//             </Swiper>

//             {/* <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-amber-600 to-yellow-500 p-6 text-white">
//                 <h2 className="text-4xl font-bold">Open Source</h2>
//                 <p className="mt-2">FLUX1 Krea model is now open-source.</p>
//             </div> */}
//         </section>
//     )
// }









// 'use client'
// import Carousel, { CarouselType } from "./ui/Carousel";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Navigation, Pagination } from "swiper/modules";

// const carouselContent: CarouselType[] = [
//   {
//     top: 'NOW IMAGE MODEL',
//     title: 'WAN 2.2',
//     subtitle: 'WAN 2.2 Image Generation',
//     details: 'Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures',
//     buttonText: 'Try WAN 2.2'
//   },
//   {
//     top: 'OPEN SOURCE MODEL',
//     title: 'Open Source',
//     subtitle: 'FLUX.1 Krea',
//     details: "We're making the weights to our FLUX.1 Krea model open-source. Download and run our model weights, read the technical report, or generate with it in Krea Image",
//     buttonText: 'Try Open Source'
//   },
//   {
//     top: 'NOW IMAGE MODEL',
//     title: 'WAN 2.2',
//     subtitle: 'WAN 2.2 Image Generation',
//     details: 'Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures',
//     buttonText: 'Try WAN 2.2'
//   },
// ]

// export default function HeroCarousel() {
//   return (
//     <section className="px-6 py-8 ">
//       <Swiper
//         modules={[Navigation, Pagination, Autoplay]}
//         spaceBetween={30}
//         slidesPerView={1} // start with 1
//         breakpoints={{
//           1024: { slidesPerView: 2 }, // 2 slides on desktop
//         }}
//         navigation
//         pagination={{ clickable: true }}
//         loop
//         className="flex flex-row rounded-2xl overflow-hidden"
//       >
//         {carouselContent.map((item, idx) => (
//           <SwiperSlide key={idx} className="h-auto">
//             <Carousel props={item} />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   )
// }
