import phoneICO from '../../assets/images/header/icons/phone.png';
import locationMarker from '../../assets/images/header/icons/geolocation.png';

import { HeaderLogo } from './HeaderLogo/HeaderLogo';
import { NavBar } from './NavBar/NavBar';
import { HeaderContact } from './HeaderContact/HeaderContact';


export const Header = () => {
    return (
        <header className='flex flex-col justify-between items-center w-full z-10 bg-black shadow-2xl'>
            <div className='flex justify-between w-full'>
                <HeaderContact image={locationMarker} title='КИЇВ, ТРУСКАВЕЦЬКА 6-А' margin='1' />
                <HeaderLogo />
                <HeaderContact image={phoneICO} title='+38(097)-241-5253' margin='0' />
            </div>
            <NavBar />
        </header>
    );
};