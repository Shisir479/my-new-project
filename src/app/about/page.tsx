import { Metadata } from 'next';
import { Card, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'About Us - Hansy Fine Arts',
  description: 'Learn more about Hansy Fine Arts',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">About Hansy Fine Arts</h1>

      <div className="max-w-4xl mx-auto space-y-8">
        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-muted-foreground mb-4">
              Hansy Fine Arts was founded with a passion for connecting art lovers with 
              exceptional artists and unique pieces. We believe that art should be accessible 
              to everyone and that every space deserves to be adorned with beauty and creativity.
            </p>
            <p className="text-muted-foreground">
              Our curated collection features contemporary and abstract art from talented 
              artists around the world. We also offer custom portrait services and innovative 
              3D/AR preview features to help you visualize artwork in your space.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-muted-foreground">
              To inspire and enrich lives through art by providing a platform that celebrates 
              creativity, supports artists, and makes fine art accessible to collectors and 
              enthusiasts worldwide.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li>✓ Curated collection of original artworks</li>
              <li>✓ Custom portrait commissions</li>
              <li>✓ 3D and AR preview technology</li>
              <li>✓ Direct connection with artists</li>
              <li>✓ Secure and convenient shopping experience</li>
              <li>✓ Expert art consultation services</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
