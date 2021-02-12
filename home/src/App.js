import logo from './logo.png';
import './App.css';
import * as urls from './constants';

function App() {
  return (
    <div className="flex flex-col h-screen bg-white-cookie">
      <header className="flex justify-center special">
        <div className="flex-shrink flex justify-center">
          <img src={logo} alt="logo" width="35%" />
        </div>
      </header>
      <main className="flex-1 overflow-y-auto px-4">
        <h1 className="font-title text-6xl lg:text-9xl mb-3 text-blue-cookie">Bienvenido</h1>
        <div className="flex flex-row text-4xl gap-2 mb-6 items-center">
          <p className="font-serif font-bold">Objetivo</p>
          <p className="font-thin">Crear cookies primarias para conocer la dinámica de auto-login y su ciclo de vida</p>
        </div>
        <div>
          <div className="flex flex-col lg:flex-row justify-evenly text-center text-3xl gap-3">
            <a className="flex flex-col" href={urls.PHOTOS_URL}>
              <div className="flex justify-center">
                <div className="button-bg">
                  <div className="h-w-32 w-32 text-white-cookie">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="mt-5">D-Photos</p>
              <p className="text-gray-500 font-serif text-base font-light">Servicio para guardar </p>
            </a>
            <a className="flex flex-col" href={urls.NOTES_URL}>
              <div className="flex justify-center">
                <div className="button-bg">
                  <div className="h-w-32 w-32 text-white-cookie">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="mt-5">D-Notes</p>
              <p className="text-gray-500 font-serif text-base font-light">Servicio para guardar </p>
            </a>
            <a className="flex flex-col" href={urls.BLOGS_URL}>
              <div className="flex justify-center">
                <div className="button-bg">
                  <div className="h-w-32 w-32 text-white-cookie">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="mt-5">D-Blogs</p>
              <p className="text-gray-500 font-serif text-base font-light">Servicio para guardar </p>
            </a>
          </div>
        </div>
      </main>
      <footer className="py-5 text-center font-serif">
        Created by Victor Cruz - DHT
      </footer>
    </div>
  );
}

export default App;
