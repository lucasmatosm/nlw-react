import React from 'react';
import './styles.css'
import { Link } from 'react-router-dom';

import backIcon from  '../../assets/images/icons/back.svg'
import logoImg from  '../../assets/images/logo.svg'

interface pageHeaderProps {
    title: string
}
const  PageHeader:React.FC<pageHeaderProps> = (props) => {
  return (
    <header className="page-header">
    <div className="top-bar-container"> 
     <Link to="/">
         <img src={backIcon}/>
     </Link>
     <img src={logoImg}/>
    </div>
    <div className="header-content">
  <strong> {props.title}</strong>
    {props.children}
    </div>
</header>
  );
}

export default PageHeader;
