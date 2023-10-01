import { FC } from 'react';

export const HeaderContact: FC<HeaderContactProps> = ({ image, title, margin }) => {
    return (
        <div className='flex justify-center items-end text-white w-[20%] h-full'>
            <img src={image} alt='geolocation' className={`h-5 mr-1 mb-${margin}`} />
            <p className='mr-10 text-sm tracking-wide'>
                {title}
            </p>
        </div>
    );
};

type HeaderContactProps = {
    image: string
    title: string
    margin: string
}