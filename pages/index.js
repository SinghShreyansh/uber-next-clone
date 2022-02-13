import 'tailwindcss/tailwind.css'
import Map from './components/Map'
import MapBelow from './components/MapBelow'



export default function Home() {

  

  return (
    <>
      <div className="flex flex-col" >
      <Map/>
      <MapBelow/>
      </div>

    </>
  )
}
