import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return <div className='h-max w-screen flex flex-row bg-zinc-600 items-center h-16'>
      <h1 className='basis-1/8 text-white text-4xl font-bold mx-4'>BOBAlchemist</h1>
      <div className='basis-1/8 text-white text-xl font-bold mx-4'>Create BOBA</div>
      <div className='basis-2/3 shrink'> </div>
      <div className='basis-1/8 text-white text-xl font-bold mx-4'>Sign Up</div>
      <div className='basis-1/8 text-white text-xl font-bold mx-4'>Login</div>
  </div>;
};

export default Navbar;

