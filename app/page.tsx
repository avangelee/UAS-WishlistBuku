'use client'

import { supabase } from '@/lib/supabaseClient';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import ImageSwiper from './components/ImageSwiper';
import 'swiper/css';

export default function Home() {
  return (
    <>



      <div>
        <div className="container mx-auto px-4 py-5 flex flex-col items-start gap-2">
          <span className="text-5xl font-bold text-pink-800">Books</span>
          <p className="text-lg text-pink-500 mb-0">
            Discover your next favorite book! Explore our collection of books across various genres, from fantasy to educational.
          </p>
        </div>
        <ImageSwiper></ImageSwiper>

        <main className="container mx-auto px-4 py-8">

          <section className="bg-white p-6 rounded-xl shadow-md border border-pink-200 mb-12">
            <h2 className="text-2xl font-bold mb-6 text-pink-800">Top Authors</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-3 hover:bg-pink-50 rounded-lg transition">
                <div className="w-12 h-12 bg-pink-200 rounded-full flex items-center justify-center text-pink-600 font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-pink-700">Ziggy Zezsyazeoviennazabrizkie</h3>
                  <p className="text-sm text-pink-600">Di Tanah Lada</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-3 hover:bg-pink-50 rounded-lg transition">
                <div className="w-12 h-12 bg-pink-200 rounded-full flex items-center justify-center text-pink-600 font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-pink-700">J.K. Rowling</h3>
                  <p className="text-sm text-pink-600">Harry Potter series</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-3 hover:bg-pink-50 rounded-lg transition">
                <div className="w-12 h-12 bg-pink-200 rounded-full flex items-center justify-center text-pink-600 font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-pink-700">Dr. Seuss</h3>
                  <p className="text-sm text-pink-600">The Cat in the Hat</p>
                </div>
              </div>
            </div>

          </section>


          <section className="mb-12 bg-white p-6 rounded-xl shadow-md border border-pink-200">
            <h2 className="text-2xl font-bold mb-4 text-pink-800">Browse Categories</h2>

            <div className="mb-6">
              <div className="inline-block bg-pink-200 px-4 py-2 rounded-full text-pink-500 font-bold mb-5">Fantasy</div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                <img src="HP1.webp" alt="" className="rounded-lg shadow hover:scale-105 w-50 h-70" />
                <img src="H2.jpg" alt="" className="rounded-lg shadow hover:scale-105 w-50 h-70" />
                <img src="HP3.jpeg" alt="" className="rounded-lg shadow hover:scale-105 w-50 h-70" />
                <img src="H4.webp" alt="" className="rounded-lg shadow hover:scale-105 w-50 h-70" />
                <img src="HP8.webp" alt="" className="rounded-lg shadow hover:scale-105 w-50 h-70" />
                <img src="MidnightLibrary.jpg" alt="" className="rounded-lg shadow hover:scale-105 w-50 h-70" />
              </div>
            </div>

            <div className="mb-6">
              <div className="inline-block bg-pink-200 px-4 py-2 rounded-full text-pink-500 font-bold mb-5">Surreal</div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                <img src="IkanDilangit.jpg" alt="" className="rounded-lg shadow hover:scale-105 w-50 h-70" />
                <img src="MariPergi.jpg" alt="" className="rounded-lg shadow hover:scale-105 w-50 h-70" />
                <img src="KapanNanti.jpg" alt="" className="rounded-lg shadow hover:scale-105 w-50 h-70" />
                <img src="PulauBatu.jpg" alt="" className="rounded-lg shadow hover:scale-105 w-50 h-70" />
                <img src="TanahLada.avif" alt="" className="rounded-lg shadow hover:scale-105 w-50 h-70" />
                <img src="KitaPergiHariIni.jpg" alt="" className="rounded-lg shadow hover:scale-105 w-50 h-70" />
              </div>
            </div>

            <div className="mb-6">
              <div className="inline-block bg-pink-200 px-4 py-2 rounded-full text-pink-500 font-bold mb-5">Children</div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                <img src="Lorax.jpg" alt="Children Book 1" className="rounded-lg shadow hover:scale-105 w-50 h-70" />
                <img src="TheCat.jpeg" alt="Children Book 2" className="rounded-lg shadow hover:scale-105 w-50 h-70" />
                <img src="Diary.jpeg" alt="" className="rounded-lg shadow hover:scale-105 w-50 h-70" />
              </div>
            </div>

            <div className="mb-6">
              <div className="inline-block bg-pink-200 px-4 py-2 rounded-full text-pink-500 font-bold mb-5">Drama</div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                <img src="TentangKamu.jpg" alt="Drama Book 1" className="rounded-lg shadow hover:scale-105 w-50 h-70" />
                <img src="Jakarta.webp" alt="" className="rounded-lg shadow hover:scale-105 w-50 h-70" />
                <img src="Cantik.jpg" alt="" className="rounded-lg shadow hover:scale-105 w-50 h-70" />
                <img src="LaskarPelangi.jpg" alt="" className="rounded-lg shadow hover:scale-105 w-50 h-70" />
                <img src="Toko.jpg" alt="" className="rounded-lg shadow hover:scale-105 w-50 h-70" />
              </div>
            </div>

            <div>
              <div className="inline-block bg-pink-200 px-4 py-2 rounded-full text-pink-500 font-bold mb-5">Romance</div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                <img src="Hello.jpg" alt="Romance Book 1" className="rounded-lg shadow hover:scale-105 w-50 h-70" />
              </div>
            </div>
          </section>

          <section className="my-12">
            <div className="bg-pink-100 py-8 px-4 rounded-xl mb-10">
              <h2 className="text-xl font-bold text-pink-800 text-center mb-6">Kata mereka</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white shadow rounded-xl p-4 text-center">
                  <p className="text-sm italic text-pink-600">
                    “Buku ini bikin aku nangis dan mikir ulang tentang hidup.”
                  </p>
                  <p className="mt-2 font-semibold text-pink-800">— Priska, 19</p>
                </div>
                <div className="bg-white shadow rounded-xl p-4 text-center">
                  <p className="text-sm italic text-pink-600">
                    “Sukaaa banget sama genre ini.”
                  </p>
                  <p className="mt-2 font-semibold text-pink-800">— Dharma, 20</p>
                </div>
                <div className="bg-white shadow rounded-xl p-4 text-center">
                  <p className="text-sm italic text-pink-600">
                    “Lebih suka komik tapi novel gak buruk”
                  </p>
                  <p className="mt-2 font-semibold text-pink-800">— Valendra, 20</p>
                </div>
              </div>
            </div>

          </section>



          <footer className="bg-pink-100 text-pink-700 mt-16 py-6">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
              <div>
                <h3 className="font-bold text-lg mb-2">Wishlist Buku</h3>
                <p className="text-sm">Tempat menyimpan daftar buku yang kamu inginkan</p>
              </div>
              <div className="mt-4 md:mt-0">
                <p className="text-sm">&copy; 2025 Wishlist Buku by Angel. All rights reserved.</p>
              </div>
            </div>
          </footer>


        </main>
      </div>
    </>
  );
}
