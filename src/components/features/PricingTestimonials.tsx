import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Emily Johnson',
    rating: 5,
    text: 'The artwork I purchased exceeded my expectations. The quality is outstanding and the customer service was exceptional.',
  },
  {
    name: 'Michael Chen',
    rating: 5,
    text: 'I commissioned a custom portrait and the artist captured everything perfectly. Highly recommend!',
  },
  {
    name: 'Sarah Williams',
    rating: 5,
    text: 'The AR preview feature helped me visualize the artwork in my space before buying. Such an innovative approach!',
  },
];

export default function PricingTestimonials() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Read testimonials from satisfied art collectors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">{testimonial.text}</p>
                <p className="font-semibold">{testimonial.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
