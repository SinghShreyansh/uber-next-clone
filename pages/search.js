import {useState} from 'react';
import tw from 'tailwind-styled-components'
import Link from 'next/link'

const Search = () => {

  const [pickupPoint, setPickupPoint]=useState("");
  const [dropoffPoint, setDropoffPoint]=useState("");

  return (
       
    <Wrapper>
        {/* Button Container */}
        <Link href='./' passHref>
        <ButtonContainer>
            <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png"/>
        </ButtonContainer>
        </Link>

        {/* Input Container */}
        <InputContainer>
          <FromtoIcons>
              <Circle src="https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png" />
              <Line src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png" />
              <Square src="https://img.icons8.com/windows/50/000000/square-full.png" />
          </FromtoIcons>
          <InputBoxes>
            <Input value={pickupPoint} onChange={(e)=>setPickupPoint(e.target.value)} placeholder='Enter pickup location' />
            <Input value={dropoffPoint} onChange={(e)=>setDropoffPoint(e.target.value)} placeholder='Where to go ?' />
            
          </InputBoxes>
        
          <PlusButton src="https://img.icons8.com/ios/50/000000/plus-math.png" />

        </InputContainer>

        {/* Saved Container */}
        <SavedPlaces>
             <StarIcon src="https://img.icons8.com/ios-filled/50/ffffff/star--v1.png"  />
             Saved Places
        </SavedPlaces>
        {/* Confirm Location */}
        <Link href={{pathname:"/confirm",
        query: {
          pickup:pickupPoint,
          dropoff:dropoffPoint
        }}} passHref >
        <ConfirmLocation>
           <ConfirmButton type="button">Confirm Location</ConfirmButton>
        </ConfirmLocation>
        </Link>
    </Wrapper>
  );
}

export default Search;


const Wrapper = tw.div`
bg-gray-300 h-screen
`

const ButtonContainer = tw.div`
bg-white px-4
`

const BackButton = tw.img`
h-12 cursor-pointer hover:border-2 rounded-full
`

const FromtoIcons = tw.div`
flex flex-col w-10 items-center ml-4
`

const InputContainer = tw.div`
bg-white flex items-center
`

const Circle = tw.img`
h-2.5`
const Line = tw.img`
h-10`
const Square = tw.img`
h-3`

const InputBoxes = tw.div`
flex flex-col flex-1 ml-4 `

const Input = tw.input`
h-10 bg-gray-300 my-2 flex-1 rounded-lg p-2 outline-none border-none
`

const PlusButton = tw.img`
rounded-full h-10 w-10 bg-gray-300 mx-4
`

const SavedPlaces = tw.div`
flex items-center bg-white px-4 py-2 mt-2 font-bold`

const StarIcon = tw.img`
bg-gray-500 rounded-full h-10 w-10 mr-2 p-2
`

const ConfirmLocation = tw.div`flex`

const ConfirmButton = tw.button`flex-1
text-white bg-gray-800 h-12 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mx-2 mt-4 
`