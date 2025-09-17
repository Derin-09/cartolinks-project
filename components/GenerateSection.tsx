import { ChevronDown, Image, Video, Mic, Wand2, Brain, Edit, Wand, LucidePersonStanding } from "lucide-react"


const features = [
  { name: "Image", desc: "Generate images with custom styles in Flux and Ideogram.", tag: "New", image: Image, bgColor: 'bg-gradient-to-b from-yellow-900 to-white' },
  { name: "Video", desc: "Generate videos with Hafuo, Pika, Runway, Luma, and more.", tag: "", image: Video, bgColor: 'bg-yellow-500 '  },
  { name: "Edit", desc: "Add objects, change style or expand photos and generations.", tag: "New", image: Edit, bgColor: 'bg-gradient-to-b from-purple-900 to-white'  },
  { name: "Realtime", desc: "Realtime AI rendering on a canvas.", tag: "", image: Wand, bgColor: 'bg-gradient-to-b from-blue-900 to-white'  },
  { name: "Enhancer", desc: "Upscale & enhance images and videos up to 22K.", tag: "New", image: Wand2, bgColor: 'bg-gradient-to-b from-yellow-900 to-white'  },
  { name: "Video Lipsync", desc: "Lip sync any video to any audio.", tag: "New", image: Mic, bgColor: 'bg-neutral-700'  },
  { name: "Motion Transfer", desc: "Transfer motion to images and animate characters.", tag: "New", image: LucidePersonStanding, bgColor: 'bg-black'  },
  { name: "Train", desc: "Teach Krea to replicate your style, products, or characters.", tag: "", image: Brain, bgColor: 'bg-gradient-to-b from-yellow-900 to-white'  },
]

export default function GenerateSection() {
  return (
    <section className="generate px-6 py-8 text-black">
        <div className="flex justify-between items-center mb-4">
        <h3 className="text-2xl font-bold ">Generate</h3>
        <div className="flex gap-1 items-center text-center text-blue-500 hover:cursor-pointer font-bold">
            <ChevronDown size={16}/> <p>Show all</p> </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-cols-1  gap-2 dark:gap-4">
        {features.map((f, i) => {
            const Icon = f.image
            return(
          <div key={i} className="generate-section flex justify-between   p-4  rounded-xl hover:bg-gray-100 transition">
            <div className="flex gap-4 ">
                <div className={`flex h-13 px-3 bg-bue-400 ${f.bgColor} items-center rounded-xl`}>
                  <Icon size={30} className="text-white "/></div>
                <div>
            <div className="flex gap-2 items-center">
              <h4 className="font-bold">{f.name}</h4>
              {f.tag && <span className="text-xs bg-blue-500 text-white px-2 py-0.5 rounded-lg ">{f.tag}</span>}
            </div>
            <p className="text-sm mt-1 lg:w-[80%] text-gray-600 line-clamp-3">{f.desc}</p>
            </div>
            </div>
            <div className="flex items-center">
            <button className="open  bg-gray-200 px-5 py-1 rounded-full text-center font-semibold hover:cursor-pointer hover:scale-105 transition">Open</button>
             </div>
          </div>
        )})}
      </div>
    </section>
  )
}
