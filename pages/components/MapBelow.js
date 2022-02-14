import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const MapBelow = () => {
    return (
        <>
            {/* Header */}
            <div className="flex justify-between border-t-2 p-x-2">
                {/* uberlogo */}
                <Image  src="/asset/uber-technologies-new-20218114.jpg" alt="../" height="100" width="70" objectFit="contain" />

                {/* Profile */}
                <div className="flex mt-5 pr-3">

                    {/* Profile Name */}
                    <p className="flex-1 text-center sm:text-lg text-sm font-serif mr-2 pt-3 font-bold ">Shreyansh Singh</p>

                    {/* Profile image */}
                    <img className="rounded-full h-10 w-10 object-contain mr-4" src="https://avatars.githubusercontent.com/u/91277635?s=96&v=4" alt="../" />

                </div>
            </div>

            {/* Action Buttons */}

            <div className="flex justify-between mr-5 ml-5 sm:mr-10 sm:ml-10">

                <Link href="/search">
                    <div className="bg-gray-300 mr-2 flex-1 h-44 lg:mr-5 flex flex-col justify-center rounded-lg transform hover:scale-105 cursor-pointer">
                        <Image src="/asset/uberx.png" alt="../" height="100" width="70" objectFit="contain" />
                        <p className="text-center text-lg font-bold ">Ride</p>
                    </div>
                </Link>

                <div className="bg-gray-300 mr-2 flex-1 h-44 lg:mr-5 flex flex-col justify-center rounded-lg transform hover:scale-105 cursor-pointer">
                    <Image className="object-contain h-3/5 " src="/asset/bike.png" alt="../" width="100" height="100" />
                    <p className="text-center text-lg font-bold ">Wheels</p>
                </div>

                <div className="bg-gray-300 mr-2 flex-1 h-44 flex flex-col justify-center rounded-lg transform hover:scale-105 cursor-pointer">
                    <Image src="/asset/uberschedule.png" alt="../" height="100" width="100" objectFit="contain" />
                    <p className="text-center text-lg font-bold ">Reserve</p>
                </div>

            </div>

            {/* footer */}
            <div className="bg-gray-300 m-5 p-5 rounded-lg" >

                <p className="font-bold">Where to go?</p>

            </div>
        </>
    );
}

export default MapBelow;
