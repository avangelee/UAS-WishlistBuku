'use client'
import { useState } from 'react';

export default function StarRating({ max = 5, onChange }: { max?: number; onChange?: (rating: number) => void }) {
  const [rating, setRating] = useState(0);

  return (
    <div className="flex gap-1 mt-2">
      {Array.from({ length: max }).map((_, i) => (
        <button
          key={i}
          type="button"
          onClick={() => {
            setRating(i + 1);
            onChange && onChange(i + 1);
          }}
          className="focus:outline-none"
        >
          <span className={i < rating ? 'text-yellow-400 text-xl' : 'text-gray-300 text-xl'}>
            ★
          </span>
        </button>
      ))}
    </div>
  );
}