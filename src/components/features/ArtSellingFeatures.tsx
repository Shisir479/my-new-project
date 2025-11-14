import { Palette, Package, Truck, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    icon: Palette,
    title: 'Original Artwork',
    description: 'Each piece is an original creation by talented artists',
  },
  {
    icon: Package,
    title: 'Professional Packaging',
    description: 'Carefully packaged to ensure safe delivery',
  },
  {
    icon: Truck,
    title: 'Fast Shipping',
    description: 'Quick and reliable shipping to your door',
  },
  {
    icon: Shield,
    title: 'Authenticity Guaranteed',
    description: 'Every artwork comes with a certificate of authenticity',
  },
];

export default function ArtSellingFeatures() {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Buy From Us</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience the best in art purchasing with our premium services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title}>
                <CardContent className="pt-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
