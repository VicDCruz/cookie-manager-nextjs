import React from 'react';
import { useRouter } from 'next/router';
import Card from '../components/card';
import Header from '../components/header';
import { getLoginSession } from '../lib/auth';

export default function home({ user }) {
  return (
    <div className="flex flex-col h-screen">
      {/* <Header username="Victor" /> */}
      <Header url={user.url || ''} username={user.username} />
      <div className="flex-1 flex flex-col w-screen items-center gap-7 mt-5">
        <div className="w-3/5">
          <Card
            title="Hola"
            description="Aqui"
            createdAt="Hoy"
            content="Lorem ipsum"
          />
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const token = await getLoginSession(context.req, context.res);
  if (!token) {
    const router = useRouter();
    router.push('/login');
  }
  return { props: { ...token } };
}
