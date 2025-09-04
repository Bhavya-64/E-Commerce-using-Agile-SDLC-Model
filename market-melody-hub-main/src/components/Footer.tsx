import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  CreditCard,
  Shield,
  Truck
} from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-card border-t">
      {/* Newsletter Section */}
      <div className="border-b">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <h3 className="text-2xl font-bold">Stay Updated</h3>
            <p className="text-muted-foreground">
              Subscribe to our newsletter for exclusive deals, new arrivals, and insider tips.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1"
              />
              <Button>
                <Mail className="h-4 w-4 mr-2" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">ShopHub</h2>
            <p className="text-muted-foreground text-sm">
              Your trusted destination for quality products at unbeatable prices. 
              We're committed to providing exceptional shopping experiences.
            </p>
            <div className="flex space-x-3">
              <Button size="sm" variant="outline">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="outline">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="outline">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="outline">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <div><Button variant="link" className="p-0 h-auto">About Us</Button></div>
              <div><Button variant="link" className="p-0 h-auto">Categories</Button></div>
              <div><Button variant="link" className="p-0 h-auto">Best Sellers</Button></div>
              <div><Button variant="link" className="p-0 h-auto">New Arrivals</Button></div>
              <div><Button variant="link" className="p-0 h-auto">Sale</Button></div>
              <div><Button variant="link" className="p-0 h-auto">Gift Cards</Button></div>
            </div>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h4 className="font-semibold">Customer Service</h4>
            <div className="space-y-2 text-sm">
              <div><Button variant="link" className="p-0 h-auto">Contact Us</Button></div>
              <div><Button variant="link" className="p-0 h-auto">FAQ</Button></div>
              <div><Button variant="link" className="p-0 h-auto">Shipping Info</Button></div>
              <div><Button variant="link" className="p-0 h-auto">Returns</Button></div>
              <div><Button variant="link" className="p-0 h-auto">Size Guide</Button></div>
              <div><Button variant="link" className="p-0 h-auto">Track Your Order</Button></div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold">Get in Touch</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span>support@shophub.com</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                <span>123 Commerce Street<br />Shopping District, CA 90210</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-success/10 rounded-lg">
              <Truck className="h-5 w-5 text-success" />
            </div>
            <div>
              <p className="font-semibold text-sm">Free Shipping</p>
              <p className="text-xs text-muted-foreground">On orders over $50</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-info/10 rounded-lg">
              <Shield className="h-5 w-5 text-info" />
            </div>
            <div>
              <p className="font-semibold text-sm">Secure Payments</p>
              <p className="text-xs text-muted-foreground">SSL encrypted checkout</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-warning/10 rounded-lg">
              <CreditCard className="h-5 w-5 text-warning" />
            </div>
            <div>
              <p className="font-semibold text-sm">Easy Returns</p>
              <p className="text-xs text-muted-foreground">30-day return policy</p>
            </div>
          </div>
        </div>

        <Separator className="mb-6" />

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div className="flex flex-col sm:flex-row gap-4">
            <span>&copy; 2024 ShopHub. All rights reserved.</span>
            <div className="flex gap-4">
              <Button variant="link" className="p-0 h-auto text-xs text-muted-foreground">
                Privacy Policy
              </Button>
              <Button variant="link" className="p-0 h-auto text-xs text-muted-foreground">
                Terms of Service
              </Button>
              <Button variant="link" className="p-0 h-auto text-xs text-muted-foreground">
                Cookie Policy
              </Button>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs">Accepted payments:</span>
            <div className="flex gap-1">
              {['VISA', 'MC', 'AMEX', 'PAYPAL'].map((payment) => (
                <div 
                  key={payment} 
                  className="px-2 py-1 bg-muted rounded text-xs font-mono"
                >
                  {payment}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};