import { Footer } from "../../components/Footer/Footer";
import { Navbar } from "../../components/NavBar/NavBar";
import notFoundImage from "../../assets/not-found.png";
import './NotFound.css';

export default function NotFound() {
  return (
    <div>
      <Navbar />
      <img src={notFoundImage} alt="Not Found" className="not-found" />
      <Footer />
    </div>
  );
}
