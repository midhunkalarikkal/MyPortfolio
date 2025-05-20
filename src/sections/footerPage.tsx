import React from 'react';
import { LogoLinks } from '@/components/logoLinks';

export const FooterPage: React.FC = () => {
    return (
        <div className="h-auto pb-4 pt-28 md:pb-2 md:pt-6 text-white text-center z-50">
            <LogoLinks className='justify-center mb-4 gap-4'/>
            <div className="text-xs md:text-sm cursor-pointer hover:text-[#18d26e]">
                © {new Date().getFullYear()} Midhun K Paniker. All rights reserved.
            </div>
        </div>
    )
}

