import { useState } from 'react';
import React from 'react '
import { HiOutlineBell } from 'react-icons/hi';
import { IoSearch } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';

const NavTop= (props) => {
    const [loggedIn, ToggleLogin] = useState( false )

    let navigate = useNavigate()
    
    return (
        <nav className="topNav">
        <span>LOGO</span>
        <div className="side">
            <div className="inputContainer">
                 <i>
                    <IoSearch />
                </i>
                <input type="text" placeholder="Search"></input>
            </div>
            { 
                loggedIn ? 
            <div className="userAuth">
                <span onClick={() => navigate('/profile') }>Username</span>
                <div onClick={() => navigate("/profile")} className="channelAvi"/>  
                <button><HiOutlineBell/></button>
            </div>
                :
            <div className="userAuth">
                <button onClick={() => ToggleLogin(true)} className="buttonOutline">Login</button>
                <button className="buttonHighlight">Sign up</button>
            </div>
            }
            
        </div>
    </nav>
    );
};

export default NavTop
