import  girl from "../../assets/landing-page-girl.png"
import { Navbar } from "../../components/NavBar/NavBar"
import { Link } from "react-router-dom"
import { Button } from "antd"



export default function Home() {
  return (
    <div>
        <Navbar/>
       <h1>Feel The Music</h1>
       <p>Stream over 20 thousand songs with one clik</p>
       <img src={ girl }/>
    <Link to='/join'>
     <Button type="primary">Join Now</Button>
     </Link>
        </div>
  )
}
