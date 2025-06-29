'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { User } from '@supabase/supabase-js';

export default function ProfilePage() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (data?.user) {
        setUser(data.user);
      }
    };
    fetchUser();
  }, []);

  return (
    <div className="min-h-screen bg-pink-50 p-6">
      <div className="max-w-xl mx-auto bg-white shadow-md rounded-xl p-8 border border-pink-200">
        <h1 className="text-3xl font-bold text-pink-700 mb-6 text-center">My Profile</h1>

        {user ? (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-pink-600">Email</label>
              <p className="text-lg font-semibold text-pink-800 bg-pink-100 px-4 py-2 rounded-md">{user.email}</p>
            </div>

            {/* Tambah fitur tambahan di sini */}
            <div className="flex justify-end pt-4">
              <button
                onClick={async () => {
                  await supabase.auth.signOut();
                  location.href = '/login'; // redirect ke login
                }}
                className="bg-pink-600 hover:bg-pink-700 text-white font-medium py-2 px-4 rounded-lg transition"
              >
                Logout
              </button>
            </div>
          </div>
        ) : (
          <p className="text-gray-500 text-center">Loading profile...</p>
        )}
      </div>
    </div>
  );
}
