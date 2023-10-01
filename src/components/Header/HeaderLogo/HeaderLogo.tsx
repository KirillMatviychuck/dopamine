import dopamineLogo from '../../../assets/images/home-page/pngwing.com.png';

export const HeaderLogo = () => {
    return (
        <h1 className='flex justify-center items-center w-[20%] text-white tracking-widest'>
            <img className='h-16 w-28 ml-10 brightness-200' src={dopamineLogo} alt='logo' />
        </h1>
    );
};