import { supabase } from '@/lib/supabaseClient';

export default async function BookDetail({ params }: { params: { id: string } }) {
  const { data: book } = await supabase
    .from('books')
    .select('*')
    .eq('id', params.id)
    .single();

  return (
    <div className="bg-pink-50 min-h-screen p-6">
      <div className="bg-white rounded-xl p-6 max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-6">
          <img 
            src={book.cover_url} 
            className="w-full md:w-1/3 h-auto object-cover rounded-lg"
          />
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-pink-800">{book.title}</h1>
            <p className="text-xl text-pink-600 mt-2">{book.author}</p>
          </div>
        </div>
      </div>
    </div>
  );
}