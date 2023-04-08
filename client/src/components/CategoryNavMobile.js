import React from 'react';
import { FiX } from 'react-icons/fi';

const CategoryNavMobile = ({ setCatNavMobile }) => {
  return (
  <div className=' w-full h-full bg-primary p-8'>
    {/* close icons */}
    <div 
      onClick={() => setCatNavMobile(false)}
      className=' flex justify-end mb-8 cursor-pointer'>
      <FiX className=' text-3xl' />
    </div>
  </div>
  );
};

export default CategoryNavMobile;
