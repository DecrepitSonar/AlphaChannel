import React from 'react';
import { useState } from 'react';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { MdChevronRight, MdHomeFilled } from 'react-icons/md';
import { IoAppsSharp, IoSearch } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import image  from "../assets/unnamed-20-e1654195589670-1280x720.jpg";

const Watch = () => {

    return (
        <div>
             <header>
                    <div className="headerPoster" style={{"backgroundImage": `url(${image})`}}>
                        <div className="headerPosterOverlay"></div>
                    </div>
                    <section>
                        <div className="sectionHeader">
                            <span className="sectionHeaderTitle">Watch</span>
                            <span className="sectionHeaderSubTitle">New Release</span>
                        </div>
                        <div className="sectionCollection">


                                <div className="videoCardContainer">
                                <div className="videoCard"/>
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
                </header>
                <section>
                    <div className="sectionHeader">
                        <span className="sectionHeaderSubTitle">Discover Channels</span>
                    </div>

                    <div className="discoverAviSection">
                        <div className="largeAviComponentContainer">
                            <div className="largeAvi"/>
                            <span>Artist </span>
                        </div>

                        <div className="largeAviComponentContainer">
                            <div className="largeAvi"/>
                            <span>Artist </span>
                        </div>

                        <div className="largeAviComponentContainer">
                            <div className="largeAvi"/>
                            <span>Artist </span>
                        </div>

                        <div className="largeAviComponentContainer">
                            <div className="largeAvi"/>
                            <span>Artist </span>
                        </div>

                        <div className="largeAviComponentContainer">
                            <div className="largeAvi"/>
                            <span>Artist </span>
                        </div>

                        <div className="largeAviComponentContainer">
                            <div className="largeAvi"/>
                            <span>Artist </span>
                        </div>
                    </div>

                </section>

                <section>
                    <div className="sectionHeader">
                        <span className="sectionHeaderSubTitle">On Air <Link to="/live"><i><MdChevronRight/></i></Link></span>
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
                        <span className="sectionHeaderSubTitle">Music <i><MdChevronRight/></i></span>
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
                        <span className="sectionHeaderSubTitle">Podcasts <i><MdChevronRight/></i></span>
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
                        <span className="sectionHeaderSubTitle">Live Games <i><MdChevronRight/></i></span>
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
        </div>
    );
};

export default Watch;