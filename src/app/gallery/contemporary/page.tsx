import { Metadata } from 'next';
import ProductCards from '@/components/shop/ProductCards';
import { Product } from '@/types/product';

export const metadata: Metadata = {
  title: 'Contemporary Art Gallery - Hansy Fine Arts',
  description: 'Browse our contemporary art collection',
};

// Mock contemporary art data
const contemporaryArtworks: Product[] = [
  {
    _id: 'con-1',
    productTitle: 'Urban Reflections',
    description: 'Modern cityscape with bold colors',
    price: 499.99,
    category: 'contemporary',
    image: '/cuadro-horizontal-3.jpg',
    artist: 'Sarah Mitchell',
    inStock: true,
    featured: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    _id: 'con-2',
    productTitle: 'Silent Voices',
    description: 'A contemporary take on portraiture',
    price: 449.99,
    category: 'contemporary',
    image: '/cuadro-horizontal-4.jpg',
    artist: 'David Park',
    inStock: true,
    featured: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

export default function ContemporaryGalleryPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Contemporary Art Gallery</h1>
        <p className="text-lg text-muted-foreground">
          Discover modern contemporary pieces that reflect our current times
        </p>
      </div>

      <ProductCards products={contemporaryArtworks} />
    </div>
  );
}
