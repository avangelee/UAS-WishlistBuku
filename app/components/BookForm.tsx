'use client';
import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { useRouter } from 'next/navigation';

export default function BookForm({ book }: { book?: any }) {
  const router = useRouter();
  const [title, setTitle] = useState(book?.title || '');
  const [author, setAuthor] = useState(book?.author || '');
  const [publishedYear, setPublishedYear] = useState(book?.published_year || '');
  const [imageUrl, setImageUrl] = useState(book?.image_url || '');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (book) {
      await supabase
        .from('buku')
        .update({ title, author, published_year: publishedYear, image_url: imageUrl })
        .eq('id', book.id);
    } else {
      await supabase
        .from('buku')
        .insert([{ title, author, published_year: publishedYear, image_url: imageUrl }]);
    }

    router.push('/');
    router.refresh();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-xl shadow-md">
      <input
        type="text"
        placeholder="Judul Buku"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border px-4 py-2 rounded"
        required
      />
      <input
        type="text"
        placeholder="Penulis"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        className="w-full border px-4 py-2 rounded"
        required
      />
      <input
        type="text"
        placeholder="Tahun Terbit"
        value={publishedYear}
        onChange={(e) => setPublishedYear(e.target.value)}
        className="w-full border px-4 py-2 rounded"
      />
      <input
        type="text"
        placeholder="URL Gambar"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        className="w-full border px-4 py-2 rounded"
      />
      <button type="submit" className="bg-pink-500 text-white px-4 py-2 rounded">
        {book ? 'Update Buku' : 'Tambah Buku'}
      </button>
    </form>
  );
}
