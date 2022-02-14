import React,{ useEffect,useState } from 'react';
import tw from 'tailwind-styled-components'
import Map from './components/Map'
import {useRouter} from 'next/router'
import RideSelector from './components/RideSelector';
import Link from 'next/link'

const Confirm = () => {
    // receiving data from search tab
    const router = useRouter();

    const {pickup,dropoff}= router.query;


    // Declaring state
    const [pickupCordinates, setPickupCoordinates] = useState();
    const [dropoffCordinates, setDropoffCoordinates] = useState();

    const getPickupCoordinates = (pickup) =>{
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?`+"access_token=pk.eyJ1Ijoic2hyZXlhbnNoMDMyMiIsImEiOiJja3prdXd5ZHM0enEzMm9uazFncXFlMjBzIn0.aUHWQ9xpWIQIiv2_j3cueQ&limit=1").then(response => response.json()).then(data =>{
          //   console.log(data)
        //   console.log(data.features[0].center)
          setPickupCoordinates(data.features[0].center); 
        })
    }

    const getDropoffCoordinates = (dropoff) =>{
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?`+"access_token=pk.eyJ1Ijoic2hyZXlhbnNoMDMyMiIsImEiOiJja3prdXd5ZHM0enEzMm9uazFncXFlMjBzIn0.aUHWQ9xpWIQIiv2_j3cueQ&limit=1").then(response => response.json()).then(data =>{
          //   console.log(data)
        //   console.log(data.features[0].center)
          setDropoffCoordinates(data.features[0].center);  
        })
    }

  useEffect(() => {
      getPickupCoordinates(pickup);
      getDropoffCoordinates(dropoff);
   
  }, [pickup,dropoff]);

  

  return (
    <Wrapper>
      <Mapcomponent>
          <Map fromLocation={pickupCordinates} toLocation={dropoffCordinates}/>

          <Link href="/search" passHref>
          <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
          </Link>
      </Mapcomponent>

      <RideContainer>
        <RideSelector/>
 
          <ConfirmButton type="button">Confirm UberX</ConfirmButton>

      </RideContainer>

    </Wrapper>
  );
}

export default Confirm;


const Wrapper = tw.div``

const Mapcomponent = tw.div`relative`

const BackButton = tw.img`absolute top-0 left-0 ml-2 cursor-pointer rounded-full hover:border-2`

const RideContainer = tw.div`flex flex-col`

<<<<<<< HEAD
const ConfirmButton = tw.button`flex-0.1 w-[96%]
text-white bg-gray-900 h-[7vh] hover:bg-gray-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center mx-[2%] my-[1%]
`
=======
const CarName = tw.p`font-bold text-lg`
const TimeDistance = tw.p`font-semibold text-blue-600`
const CarFare = tw.p`font-semibold text-xl mr-4`
>>>>>>> 02bc765e7d08a0fd53701bc02ee56e7066b2ba11
