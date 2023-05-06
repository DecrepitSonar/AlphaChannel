import {Outlet} from 'react-router-dom'
import { IoSearch } from 'react-icons/io5';
import NavTop from '../Components/NavTop';
import { useSelector } from 'react-redux';
import Search from './Search';

const ContentWrapper = () =>  {

    const authData = useSelector( state => state.auth)
    const search = useSelector( state => state.search)

    return (
            <main style={ authData.loginModal.open ?  {"overflow" : "hidden"} : {} }>
                <Outlet/>
            </main>
    );
}

export default ContentWrapper;
