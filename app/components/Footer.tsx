export default function Footer() {
    return (
        <footer className="flex justify-between items-center text-white  bg-gray-950 px-6 py-4 border-t border-gray-800 text-4xl">
            <div className="flex space-x-3">
                <div className="flex items-center">
                <span className="bg-black text-white font-extrabold rounded-lg px-4 py-1">K</span>
                </div>
                <span className="font-semibold">Krea AI</span>
            </div>
            <span className=" text-3xl font-semibold">curated by <b className="text-4xl font-bold">Mobbin</b></span>
        </footer>
    )
}