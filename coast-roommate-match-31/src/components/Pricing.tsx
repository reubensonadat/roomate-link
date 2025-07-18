import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            One small payment unlocks access to all verified matches and compatibility insights
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <Card className="p-8 bg-card border-primary/20 relative overflow-hidden">
            {/* Popular badge */}
            <div className="absolute top-4 right-4">
              <Badge className="bg-gradient-to-r from-primary to-wave text-white">
                <Star className="w-3 h-3 mr-1" />
                Most Popular
              </Badge>
            </div>
            
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Complete Access Plan
              </h3>
              <p className="text-muted-foreground mb-6">
                Everything you need to find your perfect roommate
              </p>
              
              <div className="flex items-center justify-center space-x-2 mb-6">
                <span className="text-5xl font-bold text-foreground">₵25</span>
                <div className="text-left">
                  <div className="text-sm text-muted-foreground">One-time</div>
                  <div className="text-sm text-muted-foreground">Payment</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4 mb-8">
              {[
                "Complete compatibility questionnaire",
                "Access to all verified profiles",
                "Detailed compatibility breakdowns",
                "Safety warnings and flagged profile alerts",
                "Weekly updated match recommendations",
                "Secure messaging with matches",
                "Profile verification badge",
                "30-day satisfaction guarantee"
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
            
            <Button variant="hero" size="lg" className="w-full" asChild>
              <Link to="/sign-up">
                <CreditCard className="w-5 h-5 mr-2" />
                Get Started - Pay ₵25
              </Link>
            </Button>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                💳 Secure payment via Mobile Money, Bank Transfer, or Card
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                All payments are processed securely. 30-day money-back guarantee.
              </p>
            </div>
          </Card>
          
          {/* Value proposition */}
          <div className="mt-8 text-center space-y-2">
            <p className="text-lg font-semibold text-foreground">
              Why the small fee?
            </p>
            <p className="text-muted-foreground max-w-lg mx-auto">
              The payment ensures serious users only, maintains high-quality matches, 
              and covers our security verification and platform maintenance costs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;