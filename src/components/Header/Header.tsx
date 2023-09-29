import { HeaderTitle } from './HeaderTitle/HeaderTitle';
import { NavBar } from './NavBar/NavBar';

export const Header = () => {
    return (
        <header className='flex justify-between items-center w-full bg-inherit z-10 h-40 '>
            <HeaderTitle />
            <NavBar />
        </header>
    );
};