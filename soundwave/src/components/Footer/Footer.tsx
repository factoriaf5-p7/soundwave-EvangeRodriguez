import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import facebook from "../../assets/facebook.png";
import './Footer.css';

export const Footer = () => {
  return (
    <div className='footer'>
      <Menu className='about-contact' mode='horizontal' items={[
        {
          label: (
            <Link to="/404:Not Found" rel="about us" className='about-us'>
              <div style={{ display: 'flex', alignItems: 'center', marginLeft: '8px' }}>
                About Us
              </div>
            </Link>
          ),
          key: 'about us',
        },
        {
          label: (
            <Link to="/404:Not Found" rel="contact" className='contact'>
              <div style={{ display: 'flex', alignItems: 'center', marginLeft: '8px' }}>
                Contact
              </div>
            </Link>
          ),
          key: 'contact',
        }
      ]} />

      <Menu className='redes' mode='horizontal' items={[
        {
          label: (
            <Link to="/404:Not Found" className="twitter">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src="/twitter.svg" alt="Twitter" />
                <span style={{ marginLeft: '8px' }}>Twitter</span>
              </div>
            </Link>
          ),
          key: 'twitter',
        },
        {
          label: (
            <Link to="/404:Not Found" className="facebook">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={facebook} alt="Facebook" width="24" height="24" />
                <span style={{ marginLeft: '8px' }}>Facebook</span>
              </div>
            </Link>
          ),
          key: 'facebook',
        }
      ]} />
    </div>
  );
};
