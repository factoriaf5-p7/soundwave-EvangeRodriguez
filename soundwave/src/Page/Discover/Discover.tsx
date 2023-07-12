import  covers from "../../assets/covers.jpg"
import { Navbar } from "../../components/NavBar/NavBar"
import { MenuDiscover } from "../../components/MenuDiscover/MenuDiscover"
import { Footer } from "../../components/Footer/Footer"

export default function Discover() {
  return (
    <div>
        <Navbar/>
        <h1>Discover new music</h1>
        <MenuDiscover/> 
        <p>By joining you can benefit by listening to the latest albums released</p>
        <img src={covers}/>
        <Footer/>
     </div>
  )
}
