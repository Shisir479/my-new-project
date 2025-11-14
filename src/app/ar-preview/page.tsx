import { Metadata } from 'next';
import { Card, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'AR Preview - Hansy Fine Arts',
  description: 'Preview artwork in your space using augmented reality',
};

export default function ARPreviewPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">AR Live Preview</h1>
          <p className="text-lg text-muted-foreground">
            Visualize artwork in your space using augmented reality
          </p>
        </div>

        <Card>
          <CardContent className="pt-6">
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-6">
              <p className="text-muted-foreground">AR Preview Placeholder</p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">How to use AR Preview</h2>
              <ol className="space-y-2 text-muted-foreground list-decimal list-inside">
                <li>Open this page on your mobile device</li>
                <li>Allow camera access when prompted</li>
                <li>Point your camera at a wall or surface</li>
                <li>Select artwork to preview</li>
                <li>Move around to see how it looks from different angles</li>
              </ol>
              <p className="text-sm text-muted-foreground mt-4">
                Note: AR preview requires a device with ARCore (Android) or ARKit (iOS) support.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
