import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { URL_BACKEND } from '../constants';
import Card from '../../components/card';
import Header from '../../components/header';
import { getLoginSession } from '../../lib/auth';
import Custom403 from '../403';

function formatDate(str) {
  const date = new Date(str);
  return date.toLocaleDateString('es-MX');
}

export default function home({ user, photos }) {
  const router = useRouter();

  useEffect(() => {
    if (!user) router.push('/login');
  });

  if (!user) return <Custom403 />;

  return (
    <div className="flex flex-col h-screen">
      <Header url={user.url || ''} username={user.username} />
      <div className="grid grid-cols-3 items-center mt-5 mx-6 gap-3">
        {photos.map(photo => (
          <div key={photo.id} className="mb-7">
            <Link href={`/photos/${photo.slug}`}>
              <a>
                <Card
                  filename={photo.filename}
                  url={`http://localhost:1337${photo.image.formats.small.url}`}
                  createdAt={formatDate(photo.created_at)}
                />
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const token = await getLoginSession(context.req, context.res);
  let photos = [];
  if (token) {
    const res = await fetch(`${URL_BACKEND}/photos?user=${token.user.id}`, {
      headers: {
        Authorization: `Bearer ${token.jwt}`,
      },
    });
    photos = await res.json();
  }
  return { props: { ...(token || {}), photos } };
}
