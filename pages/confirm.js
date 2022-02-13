import{ useEffect,useState } from 'react';
import tw from 'tailwind-styled-components'
import Map from './components/Map'
import {useRouter} from 'next/router'

const confirm = () => {
    // receiving data from search tab
    const router = useRouter();

    const {pickup,dropoff}= router.query


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
      </Mapcomponent>

      <RideContainer>
          <RideSelector>
            <RideSelectorTitle>
                Choose a ride, or swipe up for more
            </RideSelectorTitle>
            <RideSelectorItems>
                {/* UberX */}
                <RideSelectorItem>
                    <CarImage src="https://i.ibb.co/cyvcpfF/uberx.png" />
                    <CarDetail>
                    <CarName>UberX</CarName>
                    <TimeDistance>5 min away</TimeDistance>
                    </CarDetail>
                    <CarFare>
                        $20.50
                    </CarFare>
                </RideSelectorItem>

                {/* UberXL */}
                <RideSelectorItem>
                    <CarImage src="https://i.ibb.co/YDYMKny/uberxl.png" />
                    <CarDetail>
                    <CarName>UberXL</CarName>
                    <TimeDistance>5 min away</TimeDistance>
                    </CarDetail>
                    <CarFare>
                        $30.50
                    </CarFare>
                </RideSelectorItem>
                {/* UberXL */}
                <RideSelectorItem>
                    <CarImage src="https://i.ibb.co/YDYMKny/uberxl.png" />
                    <CarDetail>
                    <CarName>UberXL</CarName>
                    <TimeDistance>5 min away</TimeDistance>
                    </CarDetail>
                    <CarFare>
                        $30.50
                    </CarFare>
                </RideSelectorItem>
                {/* UberXL */}
                <RideSelectorItem>
                    <CarImage src="https://i.ibb.co/YDYMKny/uberxl.png" />
                    <CarDetail>
                    <CarName>UberXL</CarName>
                    <TimeDistance>5 min away</TimeDistance>
                    </CarDetail>
                    <CarFare>
                        $30.50
                    </CarFare>
                </RideSelectorItem>
            </RideSelectorItems>
          </RideSelector>
          <ConfirmButton>

          </ConfirmButton>

      </RideContainer>

    </Wrapper>
  );
}

export default confirm;


const Wrapper = tw.div``

const Mapcomponent = tw.div``

const RideContainer = tw.div``

const  RideSelector = tw.div``

const ConfirmButton = tw.div``

const RideSelectorTitle = tw.p`
text-center text-gray-500 text-sm font-semibold my-2`

const RideSelectorItems = tw.div`
h-[37vh] bg-gray-200 border-y-2 border-gray-200 overflow-y-scroll scroll-smooth`

const RideSelectorItem = tw.div`
flex items-center border-2`

const CarImage = tw.img`
h-20 ml-2`

const CarDetail = tw.div`flex-1 flex flex-col justify-evenly ml-4`

const CarName = tw.p`font-bold text-lg`
const TimeDistance = tw.p`font-semibold text-blue-600`
const CarFare = tw.p`font-semibold text-xl mr-4`