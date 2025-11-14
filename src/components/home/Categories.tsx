import CategoryCard from '@/components/shop/CategoryCard';

const categories = [
  {
    name: 'Abstract Art',
    slug: 'abstract',
    imageUrl: '/images/categories/abstract.jpg',
    productCount: 45,
  },
  {
    name: 'Contemporary Art',
    slug: 'contemporary',
    imageUrl: '/images/categories/contemporary.jpg',
    productCount: 38,
  },
  {
    name: 'Custom Portraits',
    slug: 'portraits',
    imageUrl: '/images/categories/portraits.jpg',
    productCount: 27,
  },
];

export default function Categories() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Browse by Category</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Discover your perfect piece from our carefully curated categories
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((category) => (
          <CategoryCard key={category.slug} {...category} />
        ))}
      </div>
    </section>
  );
}
