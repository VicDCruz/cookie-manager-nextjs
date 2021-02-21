import React from 'react';
import PropTypes from 'prop-types';

function Card({ title, createdAt, content }) {
  return (
    <div className="shadow-md rounded-md bg-white p-3">
      <div className="flex justify-between items-end">
        <h1 className="font-bold text-3xl">{title}</h1>
        <p className="text-blue-cookie">{createdAt}</p>
      </div>
      <p className="text-sm font-light text-gray-400 text-left">{content}</p>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  createdAt: PropTypes.string,
  content: PropTypes.string,
};

export default Card;
