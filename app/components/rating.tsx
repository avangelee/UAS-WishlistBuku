'use client';
import { FaStar, FaRegStar } from 'react-icons/fa';
import { supabase } from '@/lib/supabaseClient';
import { useState } from 'react';

export default function RatingStars({ 
  bookId, 
  initialRating 
}: { 
  bookId: string; 
  initialRating: number 
}) {
  const [rating, setRating] = useState(initialRating);
  const [hover, setHover] = useState(0);

  const handleRate = async (newRating: number) => {
    const { error } = await supabase
      .from('books')
      .update({ rating: newRating })
      .eq('id', bookId);
    
    if (!error) setRating(newRating);
  };

  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          onClick={() => handleRate(star)}
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(0)}
          className="text-xl focus:outline-none"
        >
          {star <= (hover || rating) ? (
            <FaStar className="text-yellow-400" />
          ) : (
            <FaRegStar className="text-gray-300" />
          )}
        </button>
      ))}
    </div>
  );
}