import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"
import HomeIcon from '@mui/icons-material/Home';
import DrawIcon from '@mui/icons-material/Draw';
import DesktopMacIcon from '@mui/icons-material/DesktopMac';
import CollectionsIcon from '@mui/icons-material/Collections';

const navbar = () => {
  return (
    <div className='nav'>
        
      <p className='artiz'>ARTIZ</p>
      <div className='link'>
      <Link to ="/"><HomeIcon/></Link>
      <Link to ="/illu"><DesktopMacIcon/> </Link>
      <Link to="/drawing"><DrawIcon/></Link>
      <Link to="/clicks"><CollectionsIcon /></Link>
      </div>
    </div>
  )
}

export default navbar