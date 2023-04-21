import React, { useState } from 'react';
import { HiOutlineMenuAlt3 } from "react-icons/hi"
import {MdHomeFilled } from "react-icons/md"
import {IoAppsSharp} from "react-icons/io5"
import { useNavigate } from 'react-router-dom';

const SideNav = () => {
    const [navOpen, toggleNav] = useState(false)
    const navigate = useNavigate()
    return (
        <nav className="sideNav">
            <div className={`nav ${navOpen ? "OpenNav" : "ClosedNav" }`}>
                <button onClick={() => toggleNav(!navOpen) }><HiOutlineMenuAlt3 /> </button>
                <button onClick={() => navigate("/")}> <MdHomeFilled /> </button>
                <button> <IoAppsSharp /></button>  
            </div>
        </nav>
    );
};

export default SideNav;