import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { URL_BACKEND } from '../constants';
import Card from '../../components/card';

function formatDate(str) {
  const date = new Date(str);
  return date.toLocaleDateString('es-MX');
}

function index({ photos }) {
  return (
    <div className="flex flex-col h-screen">
      <p className="text-6xl bg-black text-white px-3 py-5">Photos</p>
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

index.propTypes = {
  photos: PropTypes.array,
};

export async function getServerSideProps() {
  const res = await fetch(`${URL_BACKEND}/photos`);
  const photos = await res.json();

  return { props: { photos } };
}

export default index;
