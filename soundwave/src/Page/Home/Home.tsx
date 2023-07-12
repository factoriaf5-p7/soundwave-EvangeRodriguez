import  girl from "../../assets/landing-page-girl.png"
import { Navbar } from "../../components/NavBar/NavBar"
import { Link } from "react-router-dom"
import { Button } from "antd"
import './Home.css'


export default function Home() {
  return (
    <div>
        <Navbar/>
      <div className="titule-home">
      <h1>Feel The Music</h1>
      </div>
      <div className="paragraph-home">
       <p>Stream over 20 thousand songs with one clik</p>
       </div>
       <img src={ girl } className="girl"/>
    <Link to='/join' className="button">
     <Button type="primary">Join Now</Button>
     </Link>
        </div>
  )
}
