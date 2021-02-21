import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { URL_BACKEND } from '../constants';
import Card from '../../components/card';
import Header from '../../components/header';
import { getLoginSession } from '../../lib/auth';
import Custom403 from '../403';

const TRIM_LENGTH = 200;

function formatDate(str) {
  const date = new Date(str);
  return date.toLocaleDateString('es-MX');
}

function trim(str = '') {
  return str.substr(0, TRIM_LENGTH);
}

export default function home({ user, notes }) {
  const router = useRouter();
  const [content, setContent] = useState('Ninguna nota seleccionada');

  useEffect(() => {
    if (!user) router.push('/login');
  });

  if (!user) return <Custom403 />;

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-shrink">
        <Header url={user.url || ''} username={user.username} />
      </div>
      <div className="flex h-1 flex-grow">
        <div className="overflow-auto w-1/4 flex-none">
          {notes.map(note => (
            <button
              type="button"
              key={note.id}
              className="mb-4 mx-2 focus:outline-none"
              onClick={() => setContent(note.content)}
            >
              <Card
                title={note.title}
                createdAt={formatDate(note.created_at)}
                content={`${trim(note.content)}${
                  note.content.length > TRIM_LENGTH ? '...' : ''
                }`}
              />
            </button>
          ))}
        </div>
        <div className="mt-5 px-2 text-justify">{content}</div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const token = await getLoginSession(context.req, context.res);
  let notes = [];
  if (token) {
    const res = await fetch(`${URL_BACKEND}/notes?user=${token.user.id}`, {
      headers: {
        Authorization: `Bearer ${token.jwt}`,
      },
    });
    notes = await res.json();
  }
  return { props: { ...(token || {}), notes } };
}
