import Image from 'next/image';
import { Card } from '@/components/ui/card';

interface MasonryItem {
  id: string;
  imageUrl: string;
  title: string;
  artist?: string;
}

interface MasonaryGridProps {
  items: MasonryItem[];
}

export default function MasonaryGrid({ items }: MasonaryGridProps) {
  return (
    <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
      {items.map((item) => (
        <Card key={item.id} className="break-inside-avoid overflow-hidden">
          <div className="relative w-full" style={{ aspectRatio: '3/4' }}>
            <Image
              src={item.imageUrl}
              alt={item.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="font-semibold">{item.title}</h3>
            {item.artist && (
              <p className="text-sm text-muted-foreground">by {item.artist}</p>
            )}
          </div>
        </Card>
      ))}
    </div>
  );
}
