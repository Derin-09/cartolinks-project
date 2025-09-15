import Image from "next/image";
import Logo from '@/public/images/kreaWhite.png'
import Mobbins from '@/public/images/mobbins.png'

export default function Footer() {
    return (
        <footer className="flex justify-between text-white  bg-gray-950 px-6 py-4 border-t border-gray-800 text-xl md:text-2xl lg:text-4xl">
            <div className="flex space-x-3 items-center">
                <div className="flex items-center">
                <Image src={Logo} width={40} height={40} alt="" className="rounded-lg"/>
                </div>
                <span className="font-semibold">Krea AI</span>
            </div>
            <div className="flex gap-2 lg:text-3xl font-semibold ">
                <div className="flex items-center">curated by</div>
                 <Image src={Mobbins} alt="" className="md:w-48 rounded-lg"/>
                 </div>
        </footer>
    )
}