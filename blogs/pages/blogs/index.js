import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { URL_BACKEND } from '../constants';
import Card from '../../components/card';

const TRIM_LENGTH = 250;

function formatDate(str) {
  const date = new Date(str);
  return date.toLocaleDateString('es-MX');
}

function trim(str = '') {
  return str.substr(0, TRIM_LENGTH);
}

function index({ blogs }) {
  return (
    <div className="flex flex-col h-screen">
      <p className="text-6xl bg-black text-white px-3 py-5">Blogs</p>
      <div className="w-screen flex flex-col items-center mt-3">
        <div className="w-3/4">
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

index.propTypes = {
  blogs: PropTypes.array,
};

export async function getServerSideProps() {
  const res = await fetch(`${URL_BACKEND}/blogs`);
  const blogs = await res.json();

  return { props: { blogs } };
}

export default index;
