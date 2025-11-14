import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'FAQ - Hansy Fine Arts',
  description: 'Frequently asked questions',
};

const faqs = [
  {
    question: 'How do I purchase artwork?',
    answer:
      'Browse our collection, add items to your cart, and proceed to checkout. We accept PayPal for secure payments.',
  },
  {
    question: 'Do you offer custom portraits?',
    answer:
      'Yes! Visit our Custom Portrait page to commission a personalized artwork. Our artists will work with you to create the perfect piece.',
  },
  {
    question: 'What is the 3D/AR preview feature?',
    answer:
      'Our 3D/AR preview allows you to visualize how artwork will look in your space using augmented reality technology on your mobile device.',
  },
  {
    question: 'What is your return policy?',
    answer:
      'We offer a 30-day return policy for all original artwork. Items must be returned in their original condition.',
  },
  {
    question: 'How long does shipping take?',
    answer:
      'Standard shipping typically takes 5-7 business days. Expedited options are available at checkout.',
  },
  {
    question: 'Are the artworks original or prints?',
    answer:
      'We offer both original artworks and high-quality prints. Each product page clearly indicates the type.',
  },
  {
    question: 'Can I commission a specific piece?',
    answer:
      'Yes! Contact us through our Custom Portrait or contact page to discuss your vision with our artists.',
  },
  {
    question: 'Do you ship internationally?',
    answer:
      'Currently, we ship within the United States. International shipping options are coming soon.',
  },
];

export default function FAQPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4 text-center">
        Frequently Asked Questions
      </h1>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Find answers to common questions about our artworks, services, and policies.
      </p>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-lg">{faq.question}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{faq.answer}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
