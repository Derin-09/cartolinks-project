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
      <h2 className="text-6xl font-bold">{props.title}</h2>
    </div>

    <div className="flex justify-between items-end">
      <div className="w-[70%]">
        <h3 className="text-2xl font-bold">{props.subtitle}</h3>
        <p className="line-clamp-2 mt-2">{props.details}</p>
      </div>
      <div className="flex items-center">
        <button className="mt-4 bg-white text-black font-semibold px-4 py-2 rounded-full transition hover:bg-gray-200 hover:scale-105">
          {props.buttonText}
        </button>
      </div>
    </div>
  </div>
</div>

    // <div
    //   className="relative rounded-2xl overflow-hidden w-full h-[500px] bg-cover bg-center flex flex-col justify-between text-white"
    //   style={{
    //     backgroundImage: `url(${
    //       typeof props.bgPic === "string" ? props.bgPic : props.bgPic.src
    //     })`,
    //   }}
    // >
    //   {/* Overlay */}
    //   <div className="absolute inset-0 bg-black/70 " />

    //   {/* Content */}
    //   <div className="relative z-10 flex flex-col justify-between h-full p-6">
    //     {/* Top text */}
    //     <p className="text-sm">{props.top}</p>

    //     {/* Title in the center */}
    //     <div className="flex flex-1 justify-center items-center">
    //       <h2 className="text-6xl font-bold text-center">{props.title}</h2>
    //     </div>

    //     {/* Subtitle & details at bottom */}
    //     <div className="flex justify-between items-end">
    //       <div className="w-[70%]">
    //         <h3 className="text-2xl font-bold">{props.subtitle}</h3>
    //         <p className="mt-2">{props.details}</p>
    //       </div>
    //       <div className="flex items-center">
    //         <button className="bg-white text-black px-6 py-4 rounded-full font-semibold hover:cursor-pointer hover:bg-yellow-400">
    //           {props.buttonText}
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Carousel;












// import { StaticImageData } from "next/image";
// import React from "react";

// export type CarouselType = {
//   top: string;
//   title: string;
//   subtitle: string;
//   details: string;
//   buttonText: string;
//   bgPic: string | StaticImageData;
// };

// const Carousel = ({ props }: { props: CarouselType }) => {
//   return (
//     <div
//       className="rounded-2xl overflow-hidden p-6 text-white flex flex-col gap-5 w-full h-[500px] bg-cover bg-center"
//       style={{
//         backgroundImage: `url(${typeof props.bgPic === "string" ? props.bgPic : props.bgPic.src})`,
//       }}
//     >
//       <p className="text-sm">{props.top}</p>
//       <div className="flex justify-center items-center py-10">
//         <h2 className="text-6xl font-bold">{props.title}</h2>
//       </div>
//       <div className="flex justify-between">
//         <div className="w-[70%]">
//           <h3 className="text-2xl font-bold">{props.subtitle}</h3>
//           <p className="mt-2">{props.details}</p>
//         </div>
//         <div className="flex items-center">
//           <button className="mt-4 bg-white text-black px-4 py-2 rounded-full">
//             {props.buttonText}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Carousel;










// import { StaticImageData } from "next/image";
// import React from "react";

// export type CarouselType = {
//   top: string;
//   title: string;
//   subtitle: string;
//   details: string;
//   buttonText: string ;
//   bgPic: string | StaticImageData
// };

// const Carousel = ({ props }: { props: CarouselType }) => {
//   return (
//     <div className="rounded-2xl overflow-hidden bg-gradien-to-r from-pnk-500 to-purpe-600 p-6 text-white flex flex-col gap-5 w-full h-full" style={{  backgroundImage: `url(${typeof props.bgPic === "string" ? props.bgPic : props.bgPic.src})`}}>
//       <p className="text-sm">{props.top}</p>
//       <div className="flex justify-center items-center py-10">
//         <h2 className="text-6xl font-bold">{props.title}</h2>
//       </div>
//       <div className="flex justify-between">
//         <div className="w-[70%]">
//           <h3 className="text-2xl font-bold">{props.subtitle}</h3>
//           <p className="mt-2">{props.details}</p>
//         </div>
//         <div className="flex items-center">
//           <button className="mt-4 bg-white text-black px-4 py-2 rounded-full">
//             {props.buttonText}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Carousel;







// import React from 'react'

// export type CarouselType = {
//     top: string
//     title: string
//     subtitle: string
//     details: string
//     buttonText: string
// }

// const Carousel = ({props}: {props: CarouselType}) => {
//     return (
//         <div className=" rounded-2xl overflow-hidden bg-gradient-to-r from-pink-500 to-purple-600 p-6 text-white flex flex-col gap-5 ">
//             <p className="text-sm">{props.top}</p>
//             <div className="flex justify-center items-center py-10 absolset-0 bg-green-30 ">
//                 <h2 className="text-6xl font-bold">{props.title}</h2>
//             </div>
//             <div className="flex justify-between">
//                 <div className="w-[70%]">
//                     <h3 className="text-2xl font-bold">{props.subtitle}</h3>
//                     <p className="mt-2">{props.details}</p>
//                 </div>
//                 <div className="flex items-center">
//                     <button className=" mt-4 bg-white text-black px-4 py-2 rounded-full">{props.buttonText}</button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Carousel