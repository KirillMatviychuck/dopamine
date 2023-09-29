import bgImage from '../../../assets/images/home-page/space-bg.jpeg';
import { Header } from '../../Header/Header';

import { MainPageImage } from './MainPageImage/MainPageImage';
import { MainPageTitle } from './MainPageTitle/MainPageTitle';

export const HomeMain = () => {
    return (
        <div className='relative h-screen bg-gradient-to-r from-black to-purple-700 flex flex-col'>
            <img className='absolute w-full h-full opacity-60 z-0' src={bgImage} alt='background' />
            <Header />
            <div className='relative h-screen flex'>
                <MainPageImage />
                <MainPageTitle />
            </div>
        </div>
    );
};