import React, { useEffect, useState } from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';
import { BsYoutube } from 'react-icons/bs';
import { BsSearch } from 'react-icons/bs';

export default function SearchBar() {
  const navigate = useNavigate();
  const { keyword } = useParams();
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (keyword !== '') {
      navigate(`/videos/${encodeURIComponent(text)}`);
    }
  };

  useEffect(() => setText(keyword || ''), [keyword]);

  return (
    <header className="w-full flex p-4 text-2xl border-b border-zinc-600 mb-4">
      <Link to="/" className="flex items-center">
        <BsYoutube className="text-youtube-red text-4xl" />
        <h1 className="text-bold text-3xl ml-2">YouTube</h1>
      </Link>
      <form className="w-full flex justify-center" onSubmit={handleSubmit}>
        <input className="w-7/12 p-2 outline-none h-10 bg-black text-gray-500" type="text" placeholder="Search..." value={text} onChange={(e) => setText(e.target.value)} />
        <button className="bg-zinc-600 px-4" type="submit">
          <BsSearch />
        </button>
      </form>
    </header>
  );
}
