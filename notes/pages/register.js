import React from 'react';
import Image from 'next/image';

// eslint-disable-next-line operator-linebreak
const buttonStyle =
  'appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none';

export default function register() {
  return (
    <div className="w-full flex flex-wrap h-screen">
      <div className="w-full md:w-1/2 flex flex-col justify-center p-28">
        <div className="flex justify-center">
          <div className="h-7 w-7 text-blue-cookie">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              />
            </svg>
          </div>
        </div>
        <div className="text-center">
          <h1 className="font-bold text-2xl">Registrate con tu cuenta</h1>
          <div className="py-8">
            <div className="w-full max-w-sm mx-auto">
              <form>
                <div className="mb-4">
                  <input
                    className={buttonStyle}
                    type="text"
                    placeholder="Nombre"
                    id="name"
                    name="name"
                  />
                </div>
                <div className="mb-4">
                  <input
                    className={buttonStyle}
                    type="text"
                    placeholder="Correo electrónico"
                    id="email"
                    name="email"
                  />
                </div>
                <div className="mb-4">
                  <input
                    className={buttonStyle}
                    type="password"
                    placeholder="Contraseña"
                    id="password"
                    name="password"
                  />
                </div>
                <div className="mb-4">
                  <button
                    type="submit"
                    className="inline-block w-full py-4 px-8 leading-none text-white bg-indigo-600 hover:bg-indigo-700 font-semibold rounded shadow"
                  >
                    Registrate
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 shadow-2xl relative hidden md:block">
        <Image
          className="object-cover w-full h-screen hidden md:block"
          src="/images/register-background.jpg"
          alt="Architecture"
          sizes="100%"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}
