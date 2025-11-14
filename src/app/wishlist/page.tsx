import { Metadata } from 'next';
import Wishlist from '@/components/cart/Wishlist';

export const metadata: Metadata = {
  title: 'Wishlist - Hansy Fine Arts',
  description: 'View your saved items',
};

export default function WishlistPage() {
  return <Wishlist />;
}
