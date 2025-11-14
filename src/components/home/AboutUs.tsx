import { Palette, Heart, Star, Users } from 'lucide-react';

const features = [
  {
    icon: Palette,
    title: 'Unique Artwork',
    description: 'Every piece is carefully curated and one-of-a-kind',
  },
  {
    icon: Heart,
    title: 'Made with Love',
    description: 'Created by talented artists passionate about their craft',
  },
  {
    icon: Star,
    title: 'Premium Quality',
    description: 'High-quality materials and exceptional craftsmanship',
  },
  {
    icon: Users,
    title: 'Custom Commissions',
    description: 'Work directly with artists for personalized pieces',
  },
];

export default function AboutUs() {
  return (
    <section className="bg-muted py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Why Choose Hansy Fine Arts</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We connect art lovers with exceptional artists and unique pieces
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="text-center p-6 rounded-lg bg-background"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
