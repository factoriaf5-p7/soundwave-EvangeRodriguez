import  covers from "../../assets/covers.jpg"
import { Navbar } from "../../components/NavBar/NavBar"
import { MenuDiscover } from "../../components/MenuDiscover/MenuDiscover"
import { Footer } from "../../components/Footer/Footer"
import './Discover.css'

export default function Discover() {
  return (
    <div>
      <Navbar />
      <div className="container-discover"> 
      <div className="content-discover">
          <div className="text-discover">
            <h1 className="discover">Discover new music</h1>
            <MenuDiscover />
            <p className="parrafo">By joining you can benefit by listening to the latest albums released</p>
          </div>
          <img src={covers} className="imagen" alt="Album covers" />
        </div>
      <Footer />
      </div>
    </div>
  );
}