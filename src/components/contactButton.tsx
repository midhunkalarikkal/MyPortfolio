import React from 'react';
import { ConnectButtonInterface } from '@/utils/interface';

export const ConnectButton: React.FC<ConnectButtonInterface> = ({
    className,
    setOpenForm,
    openConnectForm,
    lgForm,
}) => {
    return (
        <button
            onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                if (lgForm && setOpenForm) {
                    setOpenForm(true);
                } else if (!lgForm && openConnectForm) {
                    openConnectForm();
                }
            }}
            className={`cursor-pointer absolute border border-green-400 rounded-xl text-white ${className}`}
        >
            {"Send Message"}
        </button>
    )
}
