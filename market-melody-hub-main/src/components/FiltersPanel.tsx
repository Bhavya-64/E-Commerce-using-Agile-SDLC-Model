import React from 'react';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Star, X } from 'lucide-react';
import { FilterState } from '@/types';
import { categories } from '@/data/mockProducts';

interface FiltersPanelProps {
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
  onClearFilters: () => void;
}

export const FiltersPanel: React.FC<FiltersPanelProps> = ({
  filters,
  onFiltersChange,
  onClearFilters
}) => {
  const handleCategoryChange = (category: string) => {
    onFiltersChange({
      ...filters,
      category: category === filters.category ? 'All' : category
    });
  };

  const handlePriceRangeChange = (priceRange: [number, number]) => {
    onFiltersChange({
      ...filters,
      priceRange
    });
  };

  const handleRatingChange = (rating: number) => {
    onFiltersChange({
      ...filters,
      rating: rating === filters.rating ? 0 : rating
    });
  };

  const handleInStockChange = (inStock: boolean) => {
    onFiltersChange({
      ...filters,
      inStock
    });
  };

  const hasActiveFilters = 
    filters.category !== 'All' ||
    filters.priceRange[0] > 0 ||
    filters.priceRange[1] < 1000 ||
    filters.rating > 0 ||
    filters.inStock ||
    filters.searchQuery !== '';

  return (
    <div className="space-y-6">
      {/* Filter Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Filters</h3>
        {hasActiveFilters && (
          <Button 
            variant="outline" 
            size="sm" 
            onClick={onClearFilters}
            className="h-8"
          >
            <X className="h-3 w-3 mr-1" />
            Clear
          </Button>
        )}
      </div>

      {/* Active Filters */}
      {hasActiveFilters && (
        <div className="space-y-2">
          <Label className="text-sm font-medium">Active Filters:</Label>
          <div className="flex flex-wrap gap-1">
            {filters.category !== 'All' && (
              <Badge variant="secondary" className="text-xs">
                {filters.category}
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-auto p-0 ml-1 hover:bg-transparent"
                  onClick={() => handleCategoryChange('All')}
                >
                  <X className="h-3 w-3" />
                </Button>
              </Badge>
            )}
            {(filters.priceRange[0] > 0 || filters.priceRange[1] < 1000) && (
              <Badge variant="secondary" className="text-xs">
                ${filters.priceRange[0]} - ${filters.priceRange[1]}
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-auto p-0 ml-1 hover:bg-transparent"
                  onClick={() => handlePriceRangeChange([0, 1000])}
                >
                  <X className="h-3 w-3" />
                </Button>
              </Badge>
            )}
            {filters.rating > 0 && (
              <Badge variant="secondary" className="text-xs">
                {filters.rating}+ stars
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-auto p-0 ml-1 hover:bg-transparent"
                  onClick={() => handleRatingChange(0)}
                >
                  <X className="h-3 w-3" />
                </Button>
              </Badge>
            )}
            {filters.inStock && (
              <Badge variant="secondary" className="text-xs">
                In Stock
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-auto p-0 ml-1 hover:bg-transparent"
                  onClick={() => handleInStockChange(false)}
                >
                  <X className="h-3 w-3" />
                </Button>
              </Badge>
            )}
          </div>
        </div>
      )}

      <Separator />

      {/* Categories */}
      <div className="space-y-3">
        <Label className="text-sm font-medium">Categories</Label>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox
                id={`category-${category}`}
                checked={filters.category === category}
                onCheckedChange={() => handleCategoryChange(category)}
              />
              <Label 
                htmlFor={`category-${category}`}
                className="text-sm cursor-pointer"
              >
                {category}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      {/* Price Range */}
      <div className="space-y-3">
        <Label className="text-sm font-medium">Price Range</Label>
        <div className="px-2">
          <Slider
            value={filters.priceRange}
            onValueChange={handlePriceRangeChange}
            max={1000}
            min={0}
            step={10}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-muted-foreground mt-2">
            <span>${filters.priceRange[0]}</span>
            <span>${filters.priceRange[1]}</span>
          </div>
        </div>
      </div>

      <Separator />

      {/* Rating */}
      <div className="space-y-3">
        <Label className="text-sm font-medium">Minimum Rating</Label>
        <div className="space-y-2">
          {[4, 3, 2, 1].map((rating) => (
            <div key={rating} className="flex items-center space-x-2">
              <Checkbox
                id={`rating-${rating}`}
                checked={filters.rating === rating}
                onCheckedChange={() => handleRatingChange(rating)}
              />
              <Label 
                htmlFor={`rating-${rating}`}
                className="text-sm cursor-pointer flex items-center gap-1"
              >
                {Array.from({ length: rating }, (_, i) => (
                  <Star
                    key={i}
                    className="h-3 w-3 text-yellow-400 fill-yellow-400"
                  />
                ))}
                <span className="text-muted-foreground">& up</span>
              </Label>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      {/* Availability */}
      <div className="space-y-3">
        <Label className="text-sm font-medium">Availability</Label>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="in-stock"
            checked={filters.inStock}
            onCheckedChange={handleInStockChange}
          />
          <Label htmlFor="in-stock" className="text-sm cursor-pointer">
            In Stock Only
          </Label>
        </div>
      </div>
    </div>
  );
};