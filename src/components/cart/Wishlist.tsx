'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useWishlist } from '@/hooks/use-wishlist';
import { Heart } from 'lucide-react';

export default function Wishlist() {
  const { wishlist } = useWishlist();

  if (wishlist.items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <Card className="max-w-md mx-auto text-center">
          <CardContent className="pt-6">
            <Heart className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
            <h2 className="text-2xl font-bold mb-2">Your wishlist is empty</h2>
            <p className="text-muted-foreground mb-6">
              Save your favorite artworks to your wishlist!
            </p>
            <Link href="/shop">
              <Button>Browse Artworks</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Wishlist</h1>
      <p className="text-muted-foreground mb-6">
        You have {wishlist.items.length} item{wishlist.items.length !== 1 ? 's' : ''} in your wishlist
      </p>
      {/* Note: Product details would need to be fetched based on wishlist IDs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {wishlist.items.map((productId) => (
          <div key={productId} className="text-sm text-muted-foreground">
            Product ID: {productId}
          </div>
        ))}
      </div>
    </div>
  );
}
