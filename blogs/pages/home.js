import React from 'react';
import Image from 'next/image';

export default function home() {
  return (
    <div className="flex flex-col h-screen">
      <div className="px-2 py-1 flex justify-between items-center bg-yellow-cookie">
        <div className="flex gap-1 items-center">
          <Image src="/images/logo.png" width="50" height="50" />
          <p className="font-medium text-xl">D-Blog</p>
        </div>
        <div className="flex gap-1.5">
          <div className="h-6 w-6 self-center text-blue-cookie">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <Image
            className="w-3 h-3 rounded-full"
            src="/images/profile.jpg"
            width="50"
            height="50"
          />
        </div>
      </div>
      <div className="flex-1 flex flex-col w-screen items-center gap-7 mt-5">
        <div className="shadow-md rounded-md bg-white p-3 w-3/5">
          <div className="flex justify-between items-end">
            <h1 className="font-bold text-3xl">Título</h1>
            <p className="text-blue-cookie">21/12/2020</p>
          </div>
          <h3 className="text-brown-cookie text-lg">Subtítulo</h3>
          <p className="text-sm font-extralight">Contenido</p>
        </div>
      </div>
    </div>
  );
}
