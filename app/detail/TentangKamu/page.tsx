'use client';
import StarRating from '@/app/components/StarRating';
import { supabase } from '@/lib/supabaseClient';
import { useState } from 'react';

export default function TentangKamuDetail() {
  const [added, setAdded] = useState(false);

  async function addToWishlist() {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      alert('Kamu harus login!');
      return;
    }

    const { error } = await supabase.from('wishlist').insert([
      {
        user_id: user.id,
        book_title: 'Tentang Kamu',
        author: 'Tere Liye',
        image_url: '/TentangKamu.jpg',
      },
    ]);

    if (error) {
      alert(`Gagal menambah ke wishlist: ${error.message}`);
    } else {
      setAdded(true);
    }
  }

  return (
    <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row gap-10">
      {/* Kiri: Gambar + Rating + Button */}
      <div className="flex flex-col items-center md:w-1/3">
        <img
          src="/TentangKamu.jpg"
          alt="Tentang Kamu"
          className="w-60 h-96 object-cover rounded-xl shadow"
        />
        <StarRating />
        <button
          onClick={addToWishlist}
          disabled={added}
          className="mt-4 px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600 transition"
        >
          {added ? 'Sudah di Wishlist' : 'Tambah ke Wishlist'}
        </button>
      </div>

      {/* Kanan: Info Buku */}
      <div className="flex-1 flex flex-col justify-center">
        <h1 className="text-3xl font-bold text-pink-800">Tentang Kamu</h1>
        <h2 className="pb-3 font-bold text-pink-500">Tere Liye</h2>
        <p className="text-gray-700 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque. Suspendisse potenti. Etiam euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque.
        </p>
      </div>
    </div>
  );
}
