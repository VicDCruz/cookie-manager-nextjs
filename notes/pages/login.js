/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef } from 'react';
import { useRouter } from 'next/router';
import { Toast } from 'primereact/toast';
import styles from '../styles/Login.module.css';

function login() {
  const toast = useRef(null);
  const router = useRouter();

  const checkCredentials = async event => {
    event.preventDefault();
    const form = new FormData(event.target);
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Object.fromEntries(form)),
    });
    const data = await res.json();
    if (data.error)
      toast.current.show({
        severity: 'error',
        summary: 'Error',
        detail: data.error,
        life: 3000,
      });
    else router.push('/user/home');
  };

  return (
    <div className={styles.background}>
      <Toast ref={toast} />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-white-cookie rounded-lg border shadow-lg p-10">
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
          <p className="font-bold text-lg sm:text-3xl p-5 text-center">
            Iniciar sesión en D-Notes
          </p>
          <form className="space-y-6" onSubmit={checkCredentials}>
            <div className="rounded-md shadow-sm -space-y-px">
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-blue-cookie focus:z-10 sm:text-sm"
                placeholder="Correo electrónico"
              />
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-blue-cookie focus:z-10 sm:text-sm"
                placeholder="Contraseña"
              />
            </div>
            <div className="flex flex-col gap-1 items-start justify-between">
              <div className="flex items-center">
                <input
                  id="remember"
                  name="remember"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Recuerda me
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="/register"
                  className="font-medium text-blue-cookie hover:text-blue-400"
                >
                  Registrate aquí
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-cookie hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg
                    className="h-5 w-5 text-blue-800 group-hover:text-blue-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                Iniciar sesión
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default login;
