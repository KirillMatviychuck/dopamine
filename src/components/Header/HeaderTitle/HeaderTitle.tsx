import dopamineLogo from '../../../assets/images/home-page/pngwing.com.png';

export const HeaderTitle = () => {
    return (
        <h1 className='ml-10 text-white text-2xl tracking-widest'>
            <img className='h-24 brightness-200' src={dopamineLogo} alt='logo' />
        </h1>
    );
};