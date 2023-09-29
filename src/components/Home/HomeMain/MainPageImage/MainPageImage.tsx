import mainImage from '../../../../assets/images/home-page/photo-test.jpg';
import secondImage from '../../../../assets/images/home-page/photo-2.jpg';

export const MainPageImage = () => {
    return (
        <div className='w-1/2 h-full flex justify-center items-center'>
            <div className='w-[720px] h-[720px]'>
                <div className={'flex justify-center items-center w-full h-full rounded-full relative "animate-[wiggle_4s_ease-in-out_infinite]"'}>
                    <span className='absolute w-full h-full rounded-full bg-purple-500 blur-lg'></span>
                    <span className='absolute w-full h-full rounded-full bg-purple-500'></span>
                    <div className="after:content-[''] absolute w-[680px] h-[680px] bg-gray-800 rounded-full">
                        <div className='relative w-[680px] h-[680px] rounded-full overflow-hidden'>
                            <img className='w-full absolute -top-14' src={mainImage} alt='me' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};



{/* <div className='relative h-full w-1/2 flex justify-center items-center z-10'>
<img className='h-[70%] w-[60%] rounded-full' src={mainImage} alt='pole dancer' />
<img className='absolute h-[40%] right-0 bottom-20 drop-shadow-2xl' src={secondImage} alt='pole dancer' />
</div> */}