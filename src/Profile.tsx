import React from 'react';
import { MdChevronRight } from 'react-icons/md';
import image from "./assets/kendrick-lamar-variety-hitmakers.webp"

const Profile = () => {
    return (
        <div>
            <header className="profileHeader" style={{"backgroundImage": `url(${image})`}}>
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