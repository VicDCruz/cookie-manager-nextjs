import React from 'react';

export default function Custom403() {
  return (
    <div className="py-8 px-4 text-center">
      <div className="max-w-auto md:max-w-lg mx-auto">
        <img className="mb-8" src="/error.svg" alt="" />
        <h2 className="text-5xl mb-2 font-semibold font-heading text-indigo-600">
          Prohibido
        </h2>
        <p className="mb-6 text-gray-400">No tienes permitido acceder aquí</p>
      </div>
    </div>
  );
}
