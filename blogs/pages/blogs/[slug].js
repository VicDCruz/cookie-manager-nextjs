import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { URL_BACKEND } from '../constants';

function formatDate(str) {
  const date = new Date(str);
  return date.toLocaleDateString('es-MX');
}

export default function Blog({ blog }) {
  const router = useRouter();

  return (
    <div className="bg-blue-50 h-screen">
      <div className="rounded-sm bg-blue-200 p-2 flex items-center gap-2">
        <p
          className="h-8 w-8 hover:text-blue-500 text-gray-600"
          onClick={() => router.back()}
        >
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
              d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
            />
          </svg>
        </p>
        <div>
          <h1 className="font-serif text-6xl text-brown-cookie">
            {blog.title}
          </h1>
          <div className="flex justify-start items-center gap-2">
            <p className="font-semibold italic">{blog.description}</p>
            <p className="text-white rounded-full bg-blue-cookie text-xs px-2">{formatDate(blog.created_at)}</p>
          </div>
        </div>
      </div>
      <p className="text-justify px-6 py-2">{blog.content}</p>
    </div>
  );
}

Blog.propTypes = {
  blog: PropTypes.object,
};

export async function getStaticPaths() {
  const res = await fetch(`${URL_BACKEND}/blogs`);
  const blogs = await res.json();

  const paths = blogs.map(blog => ({ params: { slug: blog.slug } }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const res = await fetch(`${URL_BACKEND}/blogs?slug=${slug}`);
  const data = await res.json();
  const blog = data[0];

  return { props: { blog } };
}
