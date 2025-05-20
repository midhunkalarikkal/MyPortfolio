import React from 'react';
import { LogoLinks } from '@/components/logoLinks';

export const FooterPage: React.FC = () => {
    return (
        <div className="h-auto py-6 text-white text-center">
            <LogoLinks className="social-links flex gap-6 text-2xl justify-center mb-3" />

            <div className="text-sm cursor-pointer hover:text-[#18d26e]">
                © {new Date().getFullYear()} Midhun K Paniker. All rights reserved.
            </div>
        </div>
    )
}

