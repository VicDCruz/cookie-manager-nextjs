import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { URL_BACKEND } from '../constants';
import Card from '../../components/card';
import Header from '../../components/header';
import { getLoginSession } from '../../lib/auth';
import Custom403 from '../403';

const TRIM_LENGTH = 250;

function formatDate(str) {
  const date = new Date(str);
  return date.toLocaleDateString('es-MX');
}

function trim(str = '') {
  return str.substr(0, TRIM_LENGTH);
}

export default function home({ user, blogs }) {
  const router = useRouter();

  useEffect(() => {
    if (!user) router.push('/login');
  });

  if (!user) return <Custom403 />;

  return (
    <div className="flex flex-col h-screen">
      <Header url={user.url || ''} username={user.username} />
      <div className="w-screen flex flex-col items-center mt-5">
        <div className="w-3/5">
          {blogs.map(blog => (
            <div key={blog.id} className="mb-7">
              <Link href={`/blogs/${blog.slug}`}>
                <a>
                  <Card
                    title={blog.title}
                    description={blog.description}
                    createdAt={formatDate(blog.created_at)}
                    content={`${trim(blog.content)}${
                      blog.content.length > TRIM_LENGTH ? '...' : ''
                    }`}
                  />
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const token = await getLoginSession(context.req, context.res);
  let blogs = [];
  if (token) {
    const res = await fetch(`${URL_BACKEND}/blogs?user=${token.user.id}`, {
      headers: {
        Authorization: `Bearer ${token.jwt}`,
      },
    });
    blogs = await res.json();
  }
  return { props: { ...(token || {}), blogs } };
}
