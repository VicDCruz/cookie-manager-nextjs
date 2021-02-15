import React from 'react';
import PropTypes from 'prop-types';

function Card({ filename, createdAt, url }) {
  return (
    <div className="shadow-md rounded-md bg-white p-3 flex flex-col">
      <div
        className="bg-cover bg-center h-36"
        style={{ backgroundImage: `url(${url})` }}
      />
      <h1 className="font-bold text-xl">{filename}</h1>
      <p className="text-blue-cookie">{createdAt}</p>
    </div>
  );
}

Card.propTypes = {
  filename: PropTypes.string,
  url: PropTypes.string,
  createdAt: PropTypes.string,
};

export default Card;
