import { MenuDiscover } from "../components/MenuDiscover/MenuDiscover"
import { Navbar } from "../components/NavBar"
import  covers from "../assets/covers.jpg"
import { Footer } from "../components/Footer"


export default function Discover() {
  return (
    <div>
        <Navbar/>
        <MenuDiscover/> 
        <p>By joining you can benefit by listening to the latest albums released</p>
        <img src={covers}/>
        <Footer/>
     </div>
  )
}
