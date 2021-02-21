import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { Menu } from 'primereact/menu';
import { Toast } from 'primereact/toast';
import { useRouter } from 'next/router';

function Header({ url = '', username = '' }) {
  const menu = useRef(null);
  const toast = useRef(null);
  const router = useRouter();

  const items = [
    {
      label: 'Opciones',
      items: [
        {
          label: 'Perfil',
          icon: 'pi pi-user',
          command: () => {
            toast.current.show({
              severity: 'success',
              summary: 'Perfil',
              detail: 'Vista para mostrar menú',
              life: 3000,
            });
          },
        },
        {
          label: 'Cerrar sesión',
          icon: 'pi pi-sign-out',
          command: () => router.push('/api/logout'),
        },
      ],
    },
  ];

  const avatar = url ? (
    <Image className="w-3 h-3 rounded-full" src={url} width="50" height="50" />
  ) : (
    <div className="w-12 h-12 flex bg-brown-cookie rounded-full items-center justify-center">
      <p className="font-medium text-2xl">{username.charAt(0).toUpperCase()}</p>
    </div>
  );
  return (
    <div className="px-2 py-1 flex justify-between items-center bg-yellow-cookie">
      <div className="flex gap-1 items-center">
        <Image src="/images/logo.png" width="50" height="50" />
        <p className="font-medium text-xl">D-Note</p>
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
        <Menu model={items} popup ref={menu} id="popup_menu" />
        <Toast ref={toast} />
        <button
          type="button"
          className="focus:outline-none"
          onClick={event => menu.current.toggle(event)}
        >
          {avatar}
        </button>
      </div>
    </div>
  );
}

Header.propTypes = {
  url: PropTypes.string,
  username: PropTypes.string,
};

export default Header;
