import { NavLink } from 'react-router-dom';

export const NavBar = () => {
    function splitIntoSpans(text: string) {
        return text.split('')
            .map((letter, index) => <span key={index} className='shadow-2xl shadow-cyan-500 drop-shadow-2xl'>{letter}</span>);
    }
    return (
        <nav className='flex justify-around items-center text-white tracking-widest h-14 w-[60%]'>
            <NavLink to={''} className='before:block before:absolute before:w-0 before:h-1 before:-bottom-2 before:rounded-full before:bg-purple-500 relative inline-block hover:before:ease-linear hover:before:duration-300 hover:before:w-full'><span className='relative font-bold'>Студія</span></NavLink>
            <NavLink to={''} className='before:block before:absolute before:w-0 before:h-1 before:-bottom-2 before:rounded-full before:bg-purple-500 relative inline-block hover:before:ease-linear hover:before:duration-300 hover:before:w-full'><span className='relative font-bold'>Напрямки</span></NavLink>
            <NavLink to={''} className='before:block before:absolute before:w-0 before:h-1 before:-bottom-2 before:rounded-full before:bg-purple-500 relative inline-block hover:before:ease-linear hover:before:duration-300 hover:before:w-full'><span className='relative font-bold'>Команда</span></NavLink>
            <NavLink to={''} className='before:block before:absolute before:w-0 before:h-1 before:-bottom-2 before:rounded-full before:bg-purple-500 relative inline-block hover:before:ease-linear hover:before:duration-300 hover:before:w-full'><span className='relative font-bold'>Розклад</span></NavLink>
            <NavLink to={''} className='before:block before:absolute before:w-0 before:h-1 before:-bottom-2 before:rounded-full before:bg-purple-500 relative inline-block hover:before:ease-linear hover:before:duration-300 hover:before:w-full'><span className='relative font-bold'>Ціни</span></NavLink>
            <NavLink to={''} className='before:block before:absolute before:w-0 before:h-1 before:-bottom-2 before:rounded-full before:bg-purple-500 relative inline-block hover:before:ease-linear hover:before:duration-300 hover:before:w-full'><span className='relative font-bold'>Контакти</span></NavLink>
        </nav>
    );
};