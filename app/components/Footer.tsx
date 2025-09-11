export default function Footer() {
    return (
        <footer className="flex justify-between items-center w-screen bg-white dark:bg-ray-950 px-6 py-4 dark:boder-t dark:border-gray-800 text-4xl">
            <div className="flex space-x-3">
                <div className="flex items-center">
                <span className="bg-black dark:bg-white text-white dark:text-black rounded-lg px-2 py-1">K</span>
                </div>
                <span className="font-semibold">Krea AI</span>
            </div>
            <span className=" text-gray-500 text-3xl">curated by <b className="font-bold">Mobbin</b></span>
        </footer>
    )
}
