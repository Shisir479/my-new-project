import { Metadata } from 'next';
import Cart from '@/components/cart/Cart';

export const metadata: Metadata = {
  title: 'Shopping Cart - Hansy Fine Arts',
  description: 'View your shopping cart',
};

export default function CartPage() {
  return <Cart />;
}
