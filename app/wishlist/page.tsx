'use client';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

type Book = {
  id: number;
  book_title: string;
  author: string;
  image_url: string;
  user_id: string;
};

export default function WishlistPage() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [, setUserId] = useState<string | null>(null);

  useEffect(() => {
    async function fetchWishlist() {
      const { data: userData, error: authError } = await supabase.auth.getUser();
      const user = userData?.user;

      if (authError || !user || !user.id) {
        setLoading(false);
        return;
      }
      setUserId(user.id);

      const { data: wishlistData, error: wishlistError } = await supabase
        .from('wishlist')
        .select('*')
        .eq('user_id', user.id);

      if (wishlistError) {
        setBooks([]);
      } else {
        setBooks(wishlistData || []);
      }
      setLoading(false);
    }
    fetchWishlist();
  }, []);

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-pink-800">Wishlist Kamu</h1>
      {loading ? (
        <p>Loading...</p>
      ) : books.length === 0 ? (
        <p className="text-gray-500">Kamu belum menambahkan wishlist 😢</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {books.map((book) => (
            <div key={book.id} className="bg-white p-4 rounded-xl shadow flex flex-col items-center">
              <img
                src={book.image_url}
                alt={book.book_title}
                className="w-40 h-64 object-cover rounded-xl mb-2"
              />
              <h2 className="font-bold text-pink-700 text-center">{book.book_title}</h2>
              <p className="text-pink-500 text-center">{book.author}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
