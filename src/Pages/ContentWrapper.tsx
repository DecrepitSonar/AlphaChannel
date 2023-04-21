import {Outlet} from 'react-router-dom'
import { IoSearch } from 'react-icons/io5';
import NavTop from '../Components/NavTop';

const ContentWrapper = () =>  {
    return (
            <main>
               <NavTop/>
                <Outlet/>
            </main>
    );
}

export default ContentWrapper;
