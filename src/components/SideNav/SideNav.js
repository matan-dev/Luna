// --- React & Styling
import React from 'react'
import './SideNav.scss';
import logo from '../../assets/logo.png';
// --- components
import { LogoutOutlined } from '@ant-design/icons';
import SideNavMenuItem from './SideNavMenuItem/SideNavMenuItem';
// --- utils 
import sideNavUtils from './SideNavUtil';

export default function SideNav() {
  const menuItems = sideNavUtils.getMenuItems();
  const [activeTab, setActiveTab] = React.useState('fault');

  return (
    <div className='SideNav'>
      <div className="SideNav_header">
        <img src={logo} alt="לונה"/>
      </div>
      <div className="SideNav_menu">
        { 
          menuItems.map((item, i) => <SideNavMenuItem setActiveTab={setActiveTab} activeTab={activeTab} key={i} item={item} />)
        }
      </div>
      <div className="SideNav_actions">
        <div className="SideNav_actions_logout">
          <LogoutOutlined />
          <span>התנתקות</span>
        </div>
      </div>
    </div>
  )
}