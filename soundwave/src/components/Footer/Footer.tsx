import React, { useState } from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import  facebook from "../../assets/facebook.png";
import './Footer.css'

const items: MenuProps['items'] = [
  {
    label: (
      <a href="/404:Not Found" rel="about us" className='about-us'>
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: '8px'}}></div>
       About Us
      </a>
    ),
    key: 'about us',
  },
  {
    label: (
      <a href="/404:Not Found" rel="contact" className='contact'>
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: '8px'}}></div>
      Contact
      </a>
    ),
    key: 'contact',
  },
  {
    label: (
      <Link to="/404:Not Found" className="twitter">
        <div style={{ display: 'flex', alignItems: 'center'}}>
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
        <div style={{ display: 'flex', alignItems: 'center'}}>
        <img src={facebook} alt="Facebook" width="24" height="24" />
          <span style={{ marginLeft: '8px' }}>Facebook</span>
        </div>
      </Link>
    ),
    key: 'facebook',
  },
  
];
export const Footer: React.FC = () => {
  const [current, setCurrent] = useState('');
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} style={{background:'#202027',color:'white', display:'flex', justifyContent:'flex-start'}} />;
};