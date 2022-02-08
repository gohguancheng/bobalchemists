import React from 'react';

const ContentContainer = () => {
  return <div className='h-screen w-screen grid grid-rows-5 grid-cols-5'>
    <div className='col-start-1 col-end-2 row-start-1 row-end-6'>Filter</div>
    <div className='col-start-2 col-end-5 row-start-1 row-end-2'>Ads</div>
    <div className='col-start=5 col-end-6 row-start-1 row-end-2'>Search</div>
    <div className='col-start-2 row-start-2 col-end-6 row-end-6'>Gallery</div>
  </div>;
};

export default ContentContainer;