import React, { useState, useMemo } from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { FeaturedSection } from '@/components/FeaturedSection';
import { ProductGrid } from '@/components/ProductGrid';
import { FiltersPanel } from '@/components/FiltersPanel';
import { StatsSection } from '@/components/StatsSection';
import { Footer } from '@/components/Footer';
import { mockProducts } from '@/data/mockProducts';
import { FilterState } from '@/types';

const Index = () => {
  const [filters, setFilters] = useState<FilterState>({
    category: 'All',
    priceRange: [0, 1000],
    rating: 0,
    inStock: false,
    searchQuery: ''
  });

  const filteredProducts = useMemo(() => {
    return mockProducts.filter(product => {
      if (filters.category !== 'All' && product.category !== filters.category) return false;
      if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) return false;
      if (filters.rating > 0 && product.rating < filters.rating) return false;
      if (filters.inStock && !product.inStock) return false;
      if (filters.searchQuery && !product.name.toLowerCase().includes(filters.searchQuery.toLowerCase())) return false;
      return true;
    });
  }, [filters]);

  const handleFiltersChange = (newFilters: FilterState) => {
    setFilters(newFilters);
  };

  const handleSearch = (query: string) => {
    setFilters(prev => ({ ...prev, searchQuery: query }));
  };

  const clearFilters = () => {
    setFilters({
      category: 'All',
      priceRange: [0, 1000],
      rating: 0,
      inStock: false,
      searchQuery: ''
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onSearch={handleSearch} searchQuery={filters.searchQuery} />
      <HeroSection />
      <FeaturedSection products={mockProducts} />
      <StatsSection />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            <aside className="lg:w-64 flex-shrink-0">
              <div className="sticky top-24">
                <FiltersPanel 
                  filters={filters}
                  onFiltersChange={handleFiltersChange}
                  onClearFilters={clearFilters}
                />
              </div>
            </aside>
            <main className="flex-1">
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">All Products</h2>
                <p className="text-muted-foreground">
                  {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
                </p>
              </div>
              <ProductGrid products={filteredProducts} />
            </main>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
