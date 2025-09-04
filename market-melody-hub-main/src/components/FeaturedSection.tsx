import React from 'react';
import { Product } from '@/types';
import { ProductCard } from './ProductCard';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';

interface FeaturedSectionProps {
  products: Product[];
}

export const FeaturedSection: React.FC<FeaturedSectionProps> = ({ products }) => {
  const featuredProducts = products.filter(product => product.featured).slice(0, 4);

  return (
    <section className="py-16 bg-secondary/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="h-5 w-5 text-primary fill-primary" />
            <span className="text-sm font-medium text-primary">FEATURED PRODUCTS</span>
            <Star className="h-5 w-5 text-primary fill-primary" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Trending Now
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our hand-picked selection of the most popular and highly-rated products 
            that our customers love.
          </p>
        </div>

        {/* Featured Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button size="lg" variant="outline" className="group">
            View All Products
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};