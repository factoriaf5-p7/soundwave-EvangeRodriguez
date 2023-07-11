import logo from '../assets/logo.png';
import React, { useState } from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const items: MenuProps['items'] = [
  {
    label: (
      <Link to="/" className="home-link">
        <div style={{ display: 'flex', alignItems: 'center'}}>
          <img src={logo} height="40px" alt="logo" />
          <span style={{ marginLeft: '8px' }}>Soundwave</span>
        </div>
      </Link>
    ),
    key: 'soundwave',
  },
  {
    label: (
      <a href="./discover" rel="Discover Hero Page">
        Discover
      </a>
    ),
    key: 'discover',
  },
  {
    label: (
      <a href="./join " rel="Registering Page">
        Join
      </a>
    ),
    key: 'join',
  },
];
export const Navbar: React.FC = () => {
  const [current, setCurrent] = useState('');
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} style={{background:'#2F303A',color:'white', display:'flex', justifyContent:'space-evenly'}} />;
};