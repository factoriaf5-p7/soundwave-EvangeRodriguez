import { Footer } from "../../components/Footer/Footer";
import { Navbar } from "../../components/NavBar/NavBar";
import Notfound from "../../assets/not-found.png";
import './NotFound.css'

export default function NotFound() {
  return (
    <div> 
    <Navbar/> 
    <img src={ Notfound } alt="Not Found" className="not-found"/>
    <Footer/>
    </div>
  )
}
