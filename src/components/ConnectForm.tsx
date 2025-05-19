'use client';

import Image from 'next/image';
import { Send, X } from 'lucide-react';
import { useState } from 'react';
import CustomButton from './CustomButton';

export const ConnectForm = () => {

    const [inputValue, setInputValue] = useState<string>('');
    const [textAreaValue, setTextAreaValue] = useState<string>("")
    const [openForm, setOpenForm] = useState<boolean>(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted with:', inputValue);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="absolute inset-0 flex justify-center items-center rounded-lg backdrop-blur-sm"
        >
            <Image
                src="/LoadingBg.png"
                className='relative w-full h-full object-cover -z-10'
                alt=''
                width={1000}
                height={1000}
            />

            {!openForm ? (
                <div className='absolute w-full h-full'>
                <button onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setOpenForm(!openForm);
                }} className='left-14 top-[60%] text-xs px-6 relative border border-green-400 rounded-xl text-white cursor-pointer'> Send Message </button>
                </div>
            ) : (
                <div
                    className="absolute flex flex-col gap-2 items-center p-3 rounded-md shadow-md w-8/12 md:w-1/2 text-white"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
                >
                    <div className='p-4'>
                        <h1 className='text-md font-bold'>Connect me</h1>
                    </div>
                    <input
                        type="email"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Email"
                        className="w-full px-3 py-1 text-xs rounded border border-gray-200 focus:outline-none focus:ring-[0.5px] focus:ring-[#18d26e] placeholder:text-gray-400"
                    />
                    <textarea
                        value={textAreaValue}
                        onChange={(e) => setTextAreaValue(e.target.value)}
                        placeholder="Message"
                        className="w-full px-3 py-1 text-xs rounded border border-gray-200 focus:outline-none focus:ring-[0.5px] focus:ring-[#18d26e] placeholder:text-gray-400"
                    />
                    <div className='flex'>
                        <button
                            type="submit"
                            className="mt-1 border border-[#18d26e] rounded-md px-3 py-[1px] text-[#18d26e] hover:text-green-200 hover:border-green-200 transition text-xs flex items-center gap-1 cursor-pointer"
                        >
                            <Send className="size-3" />
                            Send
                        </button>
                        <button
                            type="submit"
                            className="ml-2 mt-1 border border-[#18d26e] rounded-md px-3 py-[1px] text-[#18d26e] hover:text-green-200 hover:border-green-200 transition text-xs flex items-center gap-1 cursor-pointer"
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                setOpenForm(!openForm);
                            }}
                        >
                            <X className="size-3" />
                            Close
                        </button>
                    </div>
                </div>
            )}
        </form>
    )
}