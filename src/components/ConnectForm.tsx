'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Send, X } from 'lucide-react';
import { useCounterStore } from '@/utils/store';
import { toast } from 'react-toastify';

export const ConnectForm: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [textAreaValue, setTextAreaValue] = useState('');
  const [openForm, setOpenForm] = useState(false); // for desktop

  const openConnectForm = useCounterStore((state) => state.openForm);  // for mobile
  const closeConnectForm = useCounterStore((state) => state.closeForm);
  const contactFormOpen = useCounterStore((state) => state.contactFormOpen);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("We are working on it");
    return;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="absolute inset-0 flex justify-center items-center rounded-lg backdrop-blur-sm"
    >
      {/* Image only on md and above */}
      <Image
        src="/LoadingBg.png"
        className="relative w-full h-full object-cover -z-10 hidden md:block"
        alt="image"
        width={1000}
        height={1000}
      />
      <div className='relative w-full h-full bg-black -z-10 block md:hidden'>

      </div>

      {/* Button for desktop */}
      {!openForm && (
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setOpenForm(true);
          }}
          className="absolute left-14 top-[60%] hidden md:block text-xs px-6 border border-green-400 rounded-xl text-white"
        >
          Send Message
        </button>
      )}

      {/* Button for mobile */}
      {!contactFormOpen && (
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            openConnectForm();
          }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 block md:hidden text-lg px-14 py-3 border border-green-400 rounded-xl text-white"
        >
          Send Message
        </button>
      )}

      {/* Form - shown based on screen type */}
      {(openForm || contactFormOpen) && (
        <div
          className={`absolute flex flex-col gap-2 items-center p-3 rounded-md shadow-md w-11/12 md:w-1/2 text-white ${
            contactFormOpen ? 'bg-black/80 block md:hidden' : 'bg-black/80 hidden md:flex'
          }`}
        >
          <h1 className="text-md font-bold">Connect me</h1>
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
          <div className="flex">
            <button
              type="submit"
              className="mt-1 border border-[#18d26e] rounded-md px-3 py-[1px] text-[#18d26e] hover:text-green-200 hover:border-green-200 transition text-xs flex items-center gap-1"
            >
              <Send className="size-3" />
              Send
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                if (contactFormOpen) closeConnectForm();
                else setOpenForm(false);
              }}
              className="ml-2 mt-1 border border-[#18d26e] rounded-md px-3 py-[1px] text-[#18d26e] hover:text-green-200 hover:border-green-200 transition text-xs flex items-center gap-1"
            >
              <X className="size-3" />
              Close
            </button>
          </div>
        </div>
      )}
    </form>
  );
};
