import { Metadata } from 'next';
import ProductCards from '@/components/shop/ProductCards';
import { Product } from '@/types/product';

export const metadata: Metadata = {
  title: 'Abstract Art Gallery - Hansy Fine Arts',
  description: 'Browse our abstract art collection',
};

// Mock abstract art data
const abstractArtworks: Product[] = [
  {
    _id: 'abs-1',
    productTitle: 'Vibrant Chaos',
    description: 'An explosion of colors and emotions',
    price: 399.99,
    category: 'abstract',
    image: '/cuadro-horizontal-1.jpg',
    artist: 'Maria Rodriguez',
    inStock: true,
    featured: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    _id: 'abs-2',
    productTitle: 'Fluid Dreams',
    description: 'Flowing forms and dreamy textures',
    price: 349.99,
    category: 'abstract',
    image: '/cuadro-horizontal-2.jpg',
    artist: 'James Chen',
    inStock: true,
    featured: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

export default function AbstractGalleryPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Abstract Art Gallery</h1>
        <p className="text-lg text-muted-foreground">
          Explore bold, expressive abstract artworks that push the boundaries of creativity
        </p>
      </div>

      <ProductCards products={abstractArtworks} />
    </div>
  );
}
