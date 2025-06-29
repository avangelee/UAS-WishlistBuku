export interface Book {
  id: number;
  title: string;
  author: string;
  priority?: 1 | 2 | 3;
  bookmarked?: boolean;
  image_url?: string;
  rating?: number;
  reviews?: number;
  published_year?: string;
}
