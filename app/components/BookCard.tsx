'use client';

import { Book } from '@/lib/types';
import { supabase } from '@/lib/supabaseClient';
import { useState } from 'react';

export default function BookCard({ book }: { book: Book }) {
  const [added, setAdded] = useState(false);

  const handleAddToWishlist = async () => {
    const { error } = await supabase.from('wishlist').insert([
      {
        book_id: book.id,
        title: book.title,
        author: book.author,
        image_url: book.image_url,
        published_year: book.published_year,
      },
    ]);

    if (!error) {
      setAdded(true);
    } else {
      alert('Gagal menambahkan ke wishlist 😢');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition border border-pink-200">
      <div className="relative">
        <img
          src={book.image_url || '/default-book-cover.jpg'}
          alt={book.title}
          className="w-full h-48 object-cover"
        />
      </div>

      <div className="p-4">
        <h3 className="font-bold text-lg mb-1 text-pink-800 line-clamp-1">{book.title}</h3>
        <p className="text-pink-600 text-sm mb-2">{book.author}</p>
        <span className="text-sm font-medium text-pink-700">{book.published_year}</span>

        <button
          onClick={handleAddToWishlist}
          disabled={added}
          className={`mt-4 w-full px-4 py-2 rounded-lg font-medium transition text-white ${
            added ? 'bg-gray-400 cursor-not-allowed' : 'bg-pink-500 hover:bg-pink-600'
          }`}
        >
          {added ? 'Added to Wishlist 💖' : 'Add to Wishlist'}
        </button>
      </div>
    </div>
  );
}
