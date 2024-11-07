import React from 'react';
import { ThreeDots } from 'react-loader-spinner';

const ContentLoader = () => {
  return (
    <div className='flex justify-center items-center h-[60vh]'>
      <div className='flex flex-col items-center'>
        <h3 className='font-bold text-2xl mb-4'>Loading...</h3>
        <ThreeDots
          visible={true}
          height="80"
          width="120"
          color="#581C87"
          radius="10"
          ariaLabel="three-dots-loading"
        />
      </div>
    </div>
  )
}

export default ContentLoader;
