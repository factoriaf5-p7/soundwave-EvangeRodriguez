import girl from "../../assets/landing-page-girl.png";
import { Navbar } from "../../components/NavBar/NavBar";
import { Link } from "react-router-dom";
import { Button } from "antd";
import './Home.css';

export default function Home() {
  return (
    <div>
      <Navbar />
          
          <div className="circle circle-3"></div>
          <div className="circle circle-4"></div>
          <div className="circle circle-5"></div>
      
      <div className="container-home">
        <div className="content-home">
          <img src={girl} className="girl" alt="Girl" />
          <div className="text">
            <h1 className="title">Feel The Music</h1>
            <p className="subtitle">Stream over 20 thousand songs with one click</p>
            <Link to='/join' className="button">
              <Button type="primary">Join Now</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

