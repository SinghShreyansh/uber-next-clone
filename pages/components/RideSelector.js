import React from 'react';
import tw from 'tailwind-styled-components'
import {carListData} from '../data/carList'

const RideSelector = () => {

    return (
        <Wrapper>
            <CarSelector>
                <RideSelectorTitle>
                    Choose a ride, or swipe up for more
                </RideSelectorTitle>
                     <RideSelectorItems>
                     {  carListData.map((car,  index)=> (

                         <RideSelectorItem key = {index} >  
                             <CarImage 
                             src={car.imgUrl} />
                             <CarDetail>
                                 <CarName>{car.service}</CarName>
                                 <TimeDistance>5 min away</TimeDistance>
                             </CarDetail>
                             <CarFare>
                                 ${car.multiplier*20.14}
                             </CarFare>
                         </RideSelectorItem>
                     ))  } 
 
                 </RideSelectorItems>
                
              

            </CarSelector>
        </Wrapper>
    );
}

export default RideSelector;

const Wrapper = tw.div`
h-1/2 flex-1`

const CarSelector = tw.div``

const RideSelectorTitle = tw.p`
text-center text-gray-500 text-sm font-semibold py-2 border-b`

const RideSelectorItems = tw.div`
h-[37vh] bg-gray-200 overflow-y-scroll scroll-smooth`

const RideSelectorItem = tw.div`
flex items-center border-2 hover:scale-105 hover:px-4 cursor-pointer `

const CarImage = tw.img`
h-20 ml-2`

const CarDetail = tw.div`flex-1 flex flex-col justify-evenly ml-4`

const CarName = tw.p`font-bold text-lg`
const TimeDistance = tw.p`font-semibold text-blue-600`
const CarFare = tw.p`font-semibold text-xl mr-4`