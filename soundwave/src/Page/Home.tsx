
import  girl from "../assets/landing-page-girl.png"
import { Navbar } from "../components/NavBar"
import { Button } from 'antd';


export default function Home() {
  return (
    <div>
        <Navbar/>
       <h1>Feel The Music</h1>
       <p>Stream over 20 thousand songs with one clik</p>
       <img src={ girl }></img>
       <Button type="primary">Join Now</Button>
        </div>
  )
}
