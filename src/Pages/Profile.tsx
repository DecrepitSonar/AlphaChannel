import React, { useEffect, useState } from 'react';
import image from "../assets/kendrick-lamar-variety-hitmakers.webp"
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../../Data/Store'

const Profile = () => {
    const [activeLink, setActiveLink] = useState("")
    const location = useLocation()
    const navigate = useNavigate()

    const auth = useSelector( (state: RootState) => state.auth)

useEffect(() => {
    setActiveLink(location.pathname)
    console.log( location.pathname)
},[activeLink, location.pathname])

    return (
        <div>
            <header className="profileHeader" style={{"backgroundImage": `url(${image})`}}>
                    <div className="profileHeader_overlay">
                    
                        <div className="profileHeader_subscribe">
                            <h1>{auth.user.username}</h1>
                            <span> 123,123 Subscribers </span>
                            <button>Subscribe</button>
                        </div>
                    </div>
                </header>
                <section className="profile_body">
                    <nav>
                        <ul>
                            <li 
                                className={activeLink == "/profile" ? "active": ""}
                                onClick={() => navigate('/profile')}
                            >Videos</li>
                            <li
                                className={activeLink == "/profile/playlists" ? "active": ""}
                                onClick={() => navigate('/profile/playlists')}
                            >Playlists</li>
                            <li
                                className={activeLink == "/profile/subscribers" ? "active": ""}
                                onClick={() => navigate('/profile/subscribers')}
                            >Subscribers</li>
                            <li
                                className={activeLink == "/profile/about" ? "active": ""}
                                onClick={() => navigate('/profile/about')}
                            >About</li>
                        </ul>
                    </nav>
                    <Outlet/>
                </section>    
        </div>
    );
};

export default Profile; 

{/* <header className="profileHeader">
                    <div className="profileHeader_overlay">
                    
                    <div className="profileHeader_subscribe">
                        <h1>Username</h1>
                        <span> 123123 Subscribers </span>
                        <button>Subscribe</button>
                    </div>
                </div>
            </header>
            <section className="profile_body">
                <nav>
                    <button className="active">Videos</button>
                    <button>Platlists</button>
                    <button>Subscribers</button>
                    <button>About</button>
                </nav>
                <section>
                    <div className="sectionHeader">
                        <span className="sectionHeaderSubTitle">History <i><MdChevronRight/></i></span>
                    </div>
                    <div className="sectionCollection">

                        <div className="videoCardContainer">
                            <div className="videoCard"></div>
                            <div className="videoCardHeader">
                                <div className="headerAvi"/>
                                <span>Artist</span>
                            </div>
                            <span className="videoCardDescription">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            </span>
                        </div>

                            <div className="videoCardContainer">
                            <div className="videoCard"></div>
                            <div className="videoCardHeader">
                                <div className="headerAvi"/>
                                <span>Artist</span>
                            </div>
                            <span className="videoCardDescription">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            </span>
                        </div>

                        <div className="videoCardContainer">
                            <div className="videoCard"></div>
                            <div className="videoCardHeader">
                                <div className="headerAvi"/>
                                <span>Artist</span>
                            </div>
                            <span className="videoCardDescription">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            </span>
                        </div>

                        <div className="videoCardContainer">
                            <div className="videoCard"></div>
                            <div className="videoCardHeader">
                                <div className="headerAvi"/>
                                <span>Artist</span>
                            </div>
                            <span className="videoCardDescription">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            </span>
                        </div>
                        
                        
                    </div>
                </section>

                <section>
                    <div className="sectionHeader">
                        <span className="sectionHeaderSubTitle">Saved <i><MdChevronRight/></i></span>
                    </div>
                    <div className="sectionCollection">


                            <div className="videoCardContainer">
                            <div className="videoCard"></div>
                            <div className="videoCardHeader">
                                <div className="headerAvi"/>
                                <span>Artist</span>
                            </div>
                            <span className="videoCardDescription">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            </span>
                        </div>

                        <div className="videoCardContainer">
                            <div className="videoCard"></div>
                            <div className="videoCardHeader">
                                <div className="headerAvi"/>
                                <span>Artist</span>
                            </div>
                            <span className="videoCardDescription">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            </span>
                        </div>

                        <div className="videoCardContainer">
                            <div className="videoCard"></div>
                            <div className="videoCardHeader">
                                <div className="headerAvi"/>
                                <span>Artist</span>
                            </div>
                            <span className="videoCardDescription">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            </span>
                        </div>
                        
                        <div className="videoCardContainer">
                            <div className="videoCard"></div>
                            <div className="videoCardHeader">
                                <div className="headerAvi"/>
                                <span>Artist</span>
                            </div>
                            <span className="videoCardDescription">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            </span>
                        </div>
                        
                    </div>
                </section>
            </section> */}