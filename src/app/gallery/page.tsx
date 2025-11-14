import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Gallery - Hansy Fine Arts',
  description: 'Browse our art galleries',
};

const galleries = [
  {
    title: 'Abstract Art Gallery',
    description: 'Explore bold, expressive abstract artworks',
    href: '/gallery/abstract',
    image: '/images/gallery/abstract-preview.jpg',
  },
  {
    title: 'Contemporary Art Gallery',
    description: 'Discover modern contemporary pieces',
    href: '/gallery/contemporary',
    image: '/images/gallery/contemporary-preview.jpg',
  },
];

export default function GalleryPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Art Galleries</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Explore our curated collections of fine art
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {galleries.map((gallery) => (
          <Card key={gallery.href} className="group overflow-hidden">
            <CardContent className="p-6">
              <div className="aspect-video bg-muted rounded-lg mb-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5" />
              </div>
              <h2 className="text-2xl font-bold mb-2">{gallery.title}</h2>
              <p className="text-muted-foreground mb-4">{gallery.description}</p>
              <Link href={gallery.href}>
                <Button className="w-full">View Gallery</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
