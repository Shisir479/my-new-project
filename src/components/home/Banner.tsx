import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Banner() {
  return (
    <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-r from-primary/10 to-primary/5">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Discover Unique Fine Art
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Explore our curated collection of contemporary and abstract art.
          Custom portraits and 3D previews available.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/shop">
            <Button size="lg" className="text-lg">
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="/gallery">
            <Button size="lg" variant="outline" className="text-lg">
              View Gallery
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
