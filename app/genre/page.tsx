'use client'
import Image from 'next/image';

type Book = {
  id: number;
  title: string;
  author: string;
  image: string;
};

const genreData: { [genre: string]: Book[] } = {
  Fantasy: [
    { id: 1, title: 'Harry Potter 1', author: 'J.K. Rowling', image: '/hp1.jpg' },
    { id: 2, title: 'Harry Potter 3', author: 'J.K. Rowling', image: '/hp3.jpg' },
    { id: 3, title: 'Harry Potter 4', author: 'J.K. Rowling', image: '/hp4.jpg' },
    { id: 4, title: 'Harry Potter 8', author: 'J.K. Rowling', image: '/hp8.jpg' },
    { id: 5, title: 'The Midnight Library', author: 'Matt Haig', image: '/midnight.jpg' },
  ],
  Surreal: [
    { id: 6, title: 'Di Tanah Lada', author: 'Ziggy Z.', image: '/tanahlada.jpg' },
    { id: 7, title: 'Semua Ikan di Langit', author: 'Ziggy Z.', image: '/ikanlangit.jpg' },
    { id: 8, title: 'Jakarta Sebelum Pagi', author: 'Ziggy Z.', image: '/jakarta.jpg' },
    // tambah lainnya
  ],
  "Children's Books": [
    { id: 9, title: 'The Cat in the Hat', author: 'Dr. Seuss', image: '/cat.jpg' },
    { id: 10, title: 'Lorax', author: 'Dr. Seuss', image: '/lorax.jpg' },
  ],
  Drama: [
    { id: 11, title: 'Tentang Kamu', author: 'Tere Liye', image: '/tentangkamu.jpg' },
  ],
  Romance: [
    { id: 12, title: 'Hello', author: 'Tere Liye', image: '/hello.jpg' },
  ],
};

export default function GenrePage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-pink-700 mb-6">Koleksi Buku per Genre 💖</h1>

      {Object.entries(genreData).map(([genre, books]) => (
        <section key={genre} className="mb-12">
          <h2 className="text-2xl font-semibold text-pink-600 mb-4">{genre}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {books.map((book) => (
              <div key={book.id} className="flex flex-col items-center">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-40 h-60 object-cover rounded-xl shadow"
                />
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
