import { Link } from "@inertiajs/react";
import React, { useEffect, useState } from "react";

export default function SexLayouts() {
    const [showImage, setShowImage] = useState(0);
    useEffect(() => {
        if (showImage == 0) {
            setTimeout(() => {
                setShowImage(1);
            }, 20000);
        } else {
            setTimeout(() => {
                setShowImage(0);
            }, 20000);
        }
    }, [showImage]);
    return (
        <div className="relative h-[932px] w-full overflow-hidden">
            <div className="bg-black/50 w-full h-full absolute top-0 left-0 z-10 "></div>
            <div className="absolute top-0  left-0 w-full flex items-center z-50">
                <div className="bg-gradient-to-tl from-slate-800/50 via-slate-800/50 to-gray-900/50 px-8 backdrop-blur-sm rounded-bl-3xl rounded-br-3xl w-full py-6 text-center flex items-center gap-4">
                    <img
                        src="/flag-for-flag-malaysia.png"
                        alt=""
                        className="w-10"
                    />
                    <h3 className="font-mono text-white text-2xl">
                        Video Lucah
                    </h3>
                </div>
            </div>
            <img
                src="/sexyFoto/gambar1.jpeg"
                alt=""
                className={`${
                    showImage == 0
                        ? "translate-x-0 opacity-100"
                        : "-translate-x-full opacity-0"
                } duration-1000 ease-out transition-all absolute top-0 left-0 w-[1200px] h-[932px] object-cover object-center zoom1 `}
            />

            <img
                src="/sexyFoto/gambar2.jpeg"
                alt=""
                className={`${
                    showImage == 1
                        ? "translate-x-0 opacity-100"
                        : "translate-x-full opacity-0"
                } duration-1000 ease-out transition-all absolute top-0 left-0 w-[1200px] h-[932px] object-cover object-center zoom `}
            />

            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center flex-col">
                <div className="rounded-3xl w-[300px] h-[300px] bg-orange-500/50 rotate-[55deg] rotateAnim1"></div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center flex-col z-[10]">
                <div className="rotateAnim rounded-3xl w-[300px] h-[300px] bg-gray-400/50 "></div>
                <div className="absolute text-center ">
                    <p className="text-4xl font-light text-orange-500 mb-4">
                        JOIN
                    </p>
                    <p className="text-4xl font-bold text-white">
                        Video Hot Viral
                    </p>
                    <p className="text-4xl  text-white">Malaysia</p>
                    <p className="font-extralight text-white text-xl mb-8">
                        Gebu Merah Jambu
                    </p>
                    <Link
                        href={route("index")}
                        className="hover:bg-orange-700 bg-orange-500 text-white text-center text-xl rounded-lg px-4 py-3 mt-7 transition-all duration-300 ease-in-out animate-pulse"
                    >
                        Join Now
                    </Link>
                </div>
            </div>
        </div>
    );
}
