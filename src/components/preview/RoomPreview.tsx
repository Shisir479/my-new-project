'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface RoomPreviewProps {
  artworkUrl: string;
  artworkName: string;
}

export default function RoomPreview({ artworkUrl, artworkName }: RoomPreviewProps) {
  return (
    <Card>
      <CardContent className="pt-6">
        <h3 className="text-lg font-semibold mb-4">Room Visualization</h3>
        
        <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
          <p className="text-muted-foreground">
            Room preview visualization will be displayed here
          </p>
        </div>

        <div className="space-y-2 text-sm text-muted-foreground">
          <p>• See how this artwork looks in different room settings</p>
          <p>• Adjust size and position to match your space</p>
          <p>• Compare with different wall colors and lighting</p>
        </div>

        <Button className="w-full mt-4">
          Launch Room Preview
        </Button>
      </CardContent>
    </Card>
  );
}
