import React from 'react';
import { Users, Package, Star, Truck } from 'lucide-react';

export const StatsSection: React.FC = () => {
  const stats = [
    {
      icon: Users,
      value: '50K+',
      label: 'Happy Customers',
      description: 'Satisfied shoppers worldwide'
    },
    {
      icon: Package,
      value: '10K+',
      label: 'Products',
      description: 'Quality items in our catalog'
    },
    {
      icon: Star,
      value: '4.9',
      label: 'Average Rating',
      description: 'Based on customer reviews'
    },
    {
      icon: Truck,
      value: '99%',
      label: 'On-Time Delivery',
      description: 'Fast and reliable shipping'
    }
  ];

  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Join our growing community of satisfied customers who trust us 
            for quality products and exceptional service.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-primary-foreground/10 rounded-full group-hover:bg-primary-foreground/20 transition-colors">
                    <Icon className="h-8 w-8" />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-4xl font-bold">{stat.value}</h3>
                  <p className="text-xl font-semibold">{stat.label}</p>
                  <p className="text-sm opacity-75">{stat.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};