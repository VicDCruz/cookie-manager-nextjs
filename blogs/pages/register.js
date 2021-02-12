import React, { useState } from 'react';
import Image from 'next/image';
import { Password } from 'primereact/password';
import { InputText } from 'primereact/inputtext';
import { Message } from 'primereact/message';
import { Divider } from 'primereact/divider';

export default function register() {
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);

  const handleSubmit = event => {
    event.preventDefault();
    if (!disabled) {
      const form = new FormData(event.target);
      console.log(Object.fromEntries(form));
    }
  };

  const footer = (
    <div>
      <Divider />
      <p className="p-mt-2">Sugerencias</p>
      <ul className="p-pl-2 p-ml-2 p-mt-0" style={{ lineHeight: '1.5' }}>
        <li>Al menos una minúscula</li>
        <li>Al menos una mayúscula</li>
        <li>Al menos un número</li>
        <li>Mínimo 8 caracteres</li>
      </ul>
    </div>
  );

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
              <form className="p-input-filled" onSubmit={handleSubmit}>
                <div className="mb-6 p-fluid">
                  <InputText
                    required
                    id="name"
                    name="name"
                    placeholder="Nombre"
                  />
                </div>
                <div className="mb-6 p-fluid">
                  <InputText
                    required
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Correo electrónico"
                  />
                </div>
                <div className="mb-16 p-fluid">
                  {/* <input
                    className={buttonStyle}
                    type="password"
                    placeholder="Contraseña"
                    id="password"
                    name="password"
                  /> */}
                  <Password
                    required
                    id="password"
                    name="password"
                    value={password}
                    placeholder="Contraseña"
                    onChange={e => {
                      setPassword(e.target.value);
                      setDisabled(
                        !e.target.value.match(
                          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/
                        )
                      );
                    }}
                    promptLabel="Introduce una contraseña"
                    weakLabel="Débil"
                    mediumLabel="Media"
                    strongLabel="Fuerte"
                    footer={footer}
                  />
                  {disabled && (
                    <Message
                      severity="error"
                      text="La contraseña debe ser fuerte"
                    />
                  )}
                </div>
                <div className="mb-6">
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
