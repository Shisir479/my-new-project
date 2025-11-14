'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface ArtPreviewProps {
  productId: string;
  productName: string;
}

export default function ArtPreview({ productId, productName }: ArtPreviewProps) {
  const [activeTab, setActiveTab] = useState<'2d' | '3d' | 'ar'>('2d');

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="mb-4">
          <div className="flex justify-center gap-2">
            <Button
              variant={activeTab === '2d' ? 'default' : 'outline'}
              onClick={() => setActiveTab('2d')}
            >
              2D View
            </Button>
            <Button
              variant={activeTab === '3d' ? 'default' : 'outline'}
              onClick={() => setActiveTab('3d')}
            >
              3D View
            </Button>
            <Button
              variant={activeTab === 'ar' ? 'default' : 'outline'}
              onClick={() => setActiveTab('ar')}
            >
              AR Preview
            </Button>
          </div>
        </div>

        <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
          <p className="text-muted-foreground">
            {activeTab === '2d' && 'Standard 2D product image'}
            {activeTab === '3d' && '3D model viewer will be displayed here'}
            {activeTab === 'ar' && 'AR preview will be available here'}
          </p>
        </div>

        <div className="mt-4 text-sm text-muted-foreground">
          {activeTab === '3d' && (
            <p>Rotate and zoom the 3D model to view from all angles</p>
          )}
          {activeTab === 'ar' && (
            <p>Open on mobile device to view in your space using AR</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
