import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
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

export default function home({ user, blogs = [], jwt }) {
  const router = useRouter();
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const [slug, setSlug] = useState('');

  useEffect(() => {
    if (!user) router.push('/login');
  });

  if (!user) return <Custom403 />;

  const handleSubmit = async () => {
    const data = { title, description, content, slug, user: user.id };
    const res = await fetch('http://localhost:1337/blogs', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`,
      },
      body: JSON.stringify(data),
    });
    const blog = await res.json();
    blogs.push(blog);
    setShowForm(false);
  };

  const renderFooter = () => (
    <div>
      <Button
        label="Cancelar"
        icon="pi pi-times"
        onClick={() => setShowForm(false)}
        className="p-button-text"
      />
      <Button
        label="Guardar"
        icon="pi pi-check"
        onClick={() => handleSubmit()}
        autoFocus
      />
    </div>
  );

  return (
    <div className="flex flex-col h-screen">
      <button
        type="button"
        className="z-10 absolute bottom-8 right-8 focus:outline-none rounded-full bg-indigo-500 h-12 w-12 shadow-lg flex items-center justify-center"
        onClick={() => setShowForm(true)}
      >
        <p className="text-white-cookie text-4xl">+</p>
      </button>
      <Header url={user.url || ''} username={user.username} />
      <Dialog
        header="Crear nuevo blog"
        visible={showForm}
        style={{ width: '50vw' }}
        footer={renderFooter()}
        onHide={() => setShowForm(false)}
      >
        <form className="p-input-filled">
          <div className="mb-6 p-fluid">
            <InputText
              required
              id="title"
              name="title"
              placeholder="Título"
              value={title}
              onChange={event => setTitle(event.target.value)}
            />
          </div>
          <div className="mb-6 p-fluid">
            <InputText
              required
              id="description"
              name="description"
              placeholder="Descripción"
              value={description}
              onChange={event => setDescription(event.target.value)}
            />
          </div>
          <div className="mb-6 p-fluid">
            <InputText
              required
              id="slug"
              name="slug"
              placeholder="Slug"
              value={slug}
              onChange={event => setSlug(event.target.value)}
            />
          </div>
          <div className="mb-6 p-fluid">
            <InputTextarea
              required
              id="content"
              name="content"
              placeholder="Contenido"
              rows={5}
              cols={30}
              autoResize
              value={content}
              onChange={event => setContent(event.target.value)}
            />
          </div>
        </form>
      </Dialog>
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
                    content={`${trim(blog.content)}${blog.content.length > TRIM_LENGTH ? '...' : ''
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
  return { props: { ...(token || {}), blogs, jwt: token.jwt } };
}
