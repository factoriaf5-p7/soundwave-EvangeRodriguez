import logo from '../../assets/logo.png';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import './NavBar.css'

export const Navbar = () => { 
   return (
 <div className='NavBar'>
  <Menu className='items-menu' items={ [{
    label: (
      <Link to="/" className="home-link">
        <div style={{ display: 'flex', alignItems: 'center'}}>
          <img src={logo} height="40px" alt="logo" />
          <span style={{ marginLeft: '8px' }}>Soundwave</span>
        </div>
      </Link>
    ),
    key: 'soundwave',}]

  }/>
  <Menu className='items-menu' mode='horizontal' items={[{
      label: (
        <Link to="/discover" rel="Discover Hero Page">
          Discover
          </Link>
      ),
      key: 'discover',
    },
    {
      label: (
        <Link to="/join " rel="Registering Page">
          Join
          </Link>
      ),
      key: 'join',
    },]}
    />
    </div>
 )
};

 