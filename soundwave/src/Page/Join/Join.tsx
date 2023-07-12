import { Footer } from "../../components/Footer/Footer";
import { Forms } from "../../components/Form/Form";
import { Navbar } from "../../components/NavBar/NavBar";
import './Join.css'

export default function Join() {
  return (
    <div>
      <Navbar/> 
      <div className="container-join">
        <div className="content-join">
        <h1>
          <span className="join">Join the</span>
          <span className="fun"> fun.</span>
        </h1>
        </div>
        <div className="content-forms">
          <Forms/>
        </div>
        </div>
      <Footer/>
    </div>
  )
}
