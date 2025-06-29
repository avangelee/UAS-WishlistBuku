'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';
import { User } from '@supabase/supabase-js';

export default function Profile() {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    };
    getUser();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/auth/register'); // ⬅️ arahkan ke register
  };

  return (
    <div className="bg-pink-50 min-h-screen p-6">
      <div className="bg-white rounded-xl p-6 max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-pink-800 mb-4">Profil Saya</h2>
        {user ? (
          <div>
            <p>Email: {user.email}</p>
            <button
              onClick={handleLogout}
              className="mt-4 bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition"
            >
              Logout
            </button>
          </div>
        ) : (
          <p className="text-gray-600">Sedang memuat profil...</p>
        )}
      </div>
    </div>
  );
}
