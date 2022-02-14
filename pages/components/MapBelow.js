import React from 'react';
import Link from 'next/link';

const MapBelow = () => {
    return (
        <>
            {/* Header */}
            <div className="flex justify-between border-t-2">
                {/* uberlogo */}
                <img className="w-20 h-20 object-contain ml-4 " src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg" alt="../" />

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

                <Link href="/search" passHref>
                    <div className="bg-gray-300 mr-2 flex-1 h-44 lg:mr-5 flex flex-col justify-center rounded-lg transform hover:scale-105 cursor-pointer">
                        <img className="object-contain h-3/5 " src="https://i.ibb.co/cyvcpfF/uberx.png" alt="../" />
                        <p className="text-center text-lg font-bold ">Ride</p>
                    </div>
                </Link>

                <div className="bg-gray-300 mr-2 flex-1 h-44 lg:mr-5 flex flex-col justify-center rounded-lg transform hover:scale-105 cursor-pointer">
                    <img className="object-contain h-3/5 " src="https://i.ibb.co/n776JLm/bike.png" alt="../" />
                    <p className="text-center text-lg font-bold ">Wheels</p>
                </div>

                <div className="bg-gray-300 mr-2 flex-1 h-44 flex flex-col justify-center rounded-lg transform hover:scale-105 cursor-pointer">
                    <img className="object-contain h-3/5 " src="https://i.ibb.co/5RjchBg/uberschedule.png" alt="../" />
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
