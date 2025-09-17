import { StaticImageData } from "next/image";
import React from "react";

export type CarouselType = {
  top: string;
  title: string;
  subtitle: string;
  details: string;
  buttonText: string;
  bgPic: string | StaticImageData;
};

const Carousel = ({ props }: { props: CarouselType }) => {
  return (
    <div
  className="relative rounded-2xl overflow-hidden text-white w-full xl:h-[500px] h-[300px] bg-cover bg-center"
  style={{
    backgroundImage: `url(${
      typeof props.bgPic === "string" ? props.bgPic : props.bgPic.src
    })`,
  }}
>
  {/* Overlay BELOW content */}
  <div className="absolute inset-0 bg-black/70 z-0 pointer-events-none" />

  <div className="relative z-10 flex flex-col justify-between h-full p-6">
        <p className="text-sm">{props.top}</p>
    <div className="flex justify-center items-center flex-1">
      <h2 className="md:text-6xl text-3xl font-bold">{props.title}</h2>
    </div>

    <div className="flex justify-between items-end">
      <div className="w-[70%]">
        <h3 className="md:text-2xl text-xl  font-bold">{props.subtitle}</h3>
        <p className="line-clamp-2 mt-2">{props.details}</p>
      </div>
      <div className="flex items-center">
        <button className="mt-4 bg-white text-black md:text-base text-sm font-semibold md:px-4 px-2 py-2 rounded-full transition hover:bg-gray-200 hover:scale-105">
          {props.buttonText}
        </button>
      </div>
    </div>
  </div>
</div>
  );
};

export default Carousel;








