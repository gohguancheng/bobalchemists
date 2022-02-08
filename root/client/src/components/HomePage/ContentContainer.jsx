import React from 'react';
import FiltersContainer from './FiltersContainer';
import Gallery from './Gallery';

const ContentContainer = () => {
  return <div className='h-full w-full grid grid-rows-5 grid-cols-5'>
    <div className='col-start-1 col-end-2 row-start-1 row-end-6'>
      <FiltersContainer />
    </div>
    <div className='col-start-2 col-end-5 row-start-1 row-end-2 flex flex-col'>
      <div className="basis-5/6 flex justify-center items-center">
      <h1 className='h-max w-max shrink text-4xl font-black'> BOBAlchemist </h1>
      </div>
      <span className="basis-1/6 flex flex-row items-center">
        <button className="h-full w-max p-1">Popular</button>
        <button className="h-full w-max p-1">Recently Added</button>
      </span>
    </div>
    <div className='col-start=5 col-end-6 row-start-1 row-end-2'>Search</div>
    <div className='col-start-2 row-start-2 col-end-6 row-end-6'><Gallery /></div>
  </div>;
};

export default ContentContainer;