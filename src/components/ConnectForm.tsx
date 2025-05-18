'use client';

import { Send } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export const ConnectForm = () => {

    const [inputValue, setInputValue] = useState('');
    const [textAreaValue, setTextAreaValue] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted with:', inputValue);
        // Handle your logic here (e.g. API call)
    };
    return (
        <form
            onSubmit={handleSubmit}
            className="absolute inset-0 flex justify-center items-center rounded-lg backdrop-blur-sm"
        >
            <Image
                src="/MacBookHomeScreen.png"
                className='relative w-full h-full'
                alt=''
                width={1000}
                height={1000}
            />

            <div className="absolute flex flex-col gap-2 items-center bg-white p-3 rounded-md shadow-md w-64">
                <div className='p-4'>
                    <h1 className='text-md font-bold'>Connect me</h1>
                </div>
                <input
                    type="email"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Email"
                    className="w-full px-3 py-1 text-xs rounded border border-gray-200 focus:outline-none focus:ring-[0.5px] focus:ring-green-400 placeholder:text-gray-400"
                />
                <textarea
                    value={textAreaValue}
                    onChange={(e) => setTextAreaValue(e.target.value)}
                    placeholder="Message"
                    className="w-full px-3 py-1 text-xs rounded border border-gray-200 focus:outline-none focus:ring-[0.5px] focus:ring-green-400 placeholder:text-gray-400"
                />
                <button
                    type="submit"
                    className="mt-1 border border-green-400 rounded-md px-3 py-[1px] text-green-500 hover:bg-green-50 transition text-xs flex items-center gap-1 cursor-pointer"
                >
                    <Send className="size-3" />
                    Send
                </button>
            </div>
        </form>
    )
}