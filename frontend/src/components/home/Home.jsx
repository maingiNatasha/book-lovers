import React from 'react';
import Lottie from 'lottie-react';
import bookAnimation from '../../animations/Animation - 1730890958132.json';
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import FadeUpDiv from '../animated-containers/FadeUpDiv';

const Home = () => {
    const navigate = useNavigate();

    const handleClick= () => {
        navigate('/categories');
    };

    return (
        <FadeUpDiv>
            <div className='grid grid-cols-1 lg:grid-cols-2 md:gap-4 lg:gap-0'>
                <div className='flex flex-col justify-center sm:px-14 md:px-8 lg:px-0'>
                    <section>
                        <h1 className='font-bold text-4xl md:text-5xl xl:text-6xl md:mb-4'>Hey there!</h1>
                        <div className='pt-2 md:pt-0'>
                            <h2 className='font-bold text-2xl md:text-3xl xl:text-4xl my-4 md:mt-8'>Welcome to the Book Lover's Hub!</h2>
                            <p className='font-semibold md:text-xl'>Your digital library and community for book lovers everywhere.</p>
                        </div>
                        <Lottie animationData={bookAnimation} className='lg:hidden sm:animation' />
                    </section>
                    <section>
                        <ul className="space-y-4 md:py-2 sm:px-6 md:px-10 lg:px-6 my-8 italic">
                            <li>
                                <strong>Explore New Books 🌟</strong> <br/> Discover a curated collection of books across all genres.
                            </li>
                            <li>
                                <strong>Add to Reading Lists 📚</strong> <br/> Organize books you’re excited to read in custom reading lists.
                            </li>
                            <li>
                                <strong>Favorite Your Finds ❤️:</strong> <br/> Keep track of the books you love with our favorites feature.
                            </li>
                        </ul>
                    </section>
                    <section>
                        <p className="text-xl md:text-2xl xl:text-3xl font-semibold my-4">Ready to dive into a world of books?</p>
                        <div className='flex justify-center md:block'>
                            <button className='bg-purple-300 dark:bg-purple-700 rounded-md px-4 py-2 font-bold flex items-center' aria-label='Discover Books' onClick={handleClick}>
                                <span>Discover more</span>
                                <FaArrowRight className='ml-2' />
                            </button>
                        </div>
                    </section>
                </div>
                <div className='hidden lg:block'>
                    <Lottie animationData={bookAnimation} className='w-[600px] h-[600px] lg:w-[405px] lg:h-[600px] xl:w-[600px] xl:h-[600px]' />
                </div>
            </div>
        </FadeUpDiv>
    )
}

export default Home