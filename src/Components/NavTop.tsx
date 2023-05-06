
import React,{ useEffect, useState } from 'react';
import { HiOutlineBell } from 'react-icons/hi';
import { IoSearch } from 'react-icons/io5';
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import type { RootState } from '../../Data/Store'
import { useSearchContext }  from "../../Data/SearchContext"
import { useDispatch, useSelector } from 'react-redux';
import { toggleLoginModal, setForm } from '../../Data/Reducers/authSlice';

const NavTop= () => {
const {searchQuery, handleQuery} = useSearchContext()

const authState = useSelector( (state: RootState) => state.auth )
const navigate = useNavigate()
const dispatch = useDispatch()

const param = useParams()

console.log( param )
return (
        <nav className="topNav">
        <span>LOGO</span>
        <div className="side">
            <div className="inputContainer">
                 <i>
                    <IoSearch />
                </i>
                <input 
                    type="text" 
                    placeholder="Search"
                    onChange={(e) => handleQuery({"search": e.target.value})}
                    onFocus={() => navigate("/search")}
                    onBlur={() => history.back()}
                />
            </div>
            { 
                authState.LoggedIn ? 
            <div className="userAuth">
                <span onClick={() => navigate(`/profile/${authState.user.id}`) }>{authState.user.username}</span>
                <div onClick={() => navigate(`/profile/${authState.user.id}`)} className="channelAvi"/>  
                <button><HiOutlineBell/></button>
            </div>
                :
            <div className="userAuth">
                <button onClick={() => dispatch(setForm("login")) } className="buttonOutline">Login</button>
                <button onClick={() => dispatch( setForm("register"))} className="buttonHighlight">Sign up</button>
            </div>
            }
            
        </div>
    </nav>
    );
};

export default NavTop
