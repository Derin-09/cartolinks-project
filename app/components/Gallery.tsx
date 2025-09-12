import {  Scale, ShoppingBag} from "lucide-react"


export default function Gallery() {
    return (
        <section className="px-6 py-8 ">
            <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold mb-4">Gallery</h3>
                <div className="flex gap-2 items-center text-center">
                    <button className="flex gap-2 items-center text-center hover:bg-white hover:cursor-pointer hover:shadow-lg px-4 py-1 rounded-xl bg-gray-200 dark:bg-gray-800 hover:scale-105 transition">
                    <Scale size={18}/>
                    <p className="text-center"> Legal </p>
                    </button>
                <button className="flex gap-2 items-center text-center hover:bg-white hover:cursor-pointer hover:shadow-lg  px-4 py-1 rounded-xl bg-gray-200 dark:bg-gray-800 hover:scale-105 transition">
                    <ShoppingBag size={18}/>
                    <p className="text-center"> Pricing </p>
                    </button>
                    
                </div>
            </div>

        </section>
    )
}
