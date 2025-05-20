import React from 'react';
import { Loader } from 'lucide-react';

export const LoadingPage: React.FC = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
        <Loader className="text-[#18d26e] size-10 animate-spin"/>;
    </div>
  )
}

