import React from 'react'
import {Link} from 'react-router-dom';
import PersonIcon from '@material-ui/icons/Person';
import FlightIcon from '@material-ui/icons/Flight';
import SettingsIcon from '@material-ui/icons/Settings';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


const Navbar = () => {
        return (
            <nav className='navbar bg-primary'>
            
                {
                    localStorage.getItem('login')? <ul><li>
                    <Link to='/logout' ><ExitToAppIcon/>Logout</Link>
                </li>
             <li>
                 <HomeIcon/>
                 <Link to='/dashboard'>Dashboard</Link>
             </li>
             <li>
                 <SettingsIcon/>
                 <Link to='/capsules'>Capsules</Link>
             </li>
             <li>
                 <FlightIcon/>
                 <Link to='/rockets'>Rockets</Link>
             </li>
             </ul>
                    :
                    <ul>
                        Welcome to Space
                    <li>
                    <Link to='/login'><PersonIcon/>Login</Link>
                </li>
               
                </ul>

                }
                <ul>
                <li>
                 <Link to='/about'><InfoIcon/>About</Link>
             </li>
             </ul>
            </nav>
        )
    
}

export default Navbar
