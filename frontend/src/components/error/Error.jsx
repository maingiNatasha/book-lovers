import React from 'react';

const Error = ({ error }) => {
    return (
        <div>
            <h1 className='font-bold text-2xl'>{error}</h1>
            <div className='flex item-center justify-center'>
                <img src='/images/Monster 404 Error-amico.svg' alt='error-image' width={500} height={500} loading='lazy' />
            </div>
        </div>
    )
};

export default Error;