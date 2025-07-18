import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Shield, Users, Heart, Star } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-coastal.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5"></div>
      <div 
        className="absolute inset-0 opacity-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Trusted & Secure Platform</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
            Find Your Perfect
            <span className="block bg-gradient-to-r from-primary to-wave bg-clip-text text-transparent">
              Roommate Match
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Coast Roommate Link connects you with compatible roommates in Cape Coast through 
            intelligent matching, safety verification, and detailed compatibility analysis.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="lg" className="group" asChild>
              <Link to="/sign-up">
                Start Matching Now
                <Heart className="w-5 h-5 ml-2 group-hover:animate-pulse" />
              </Link>
            </Button>
            <Button variant="outline" size="lg">
              Learn How It Works
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/10">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">Smart Matching</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Advanced compatibility algorithm analyzes lifestyle preferences
              </p>
            </Card>
            
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/10">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">Safety First</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Profile verification and warning system for flagged users
              </p>
            </Card>
            
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/10">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">Proven Results</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                High success rate in Cape Coast roommate connections
              </p>
            </Card>
          </div>
          
          {/* Social proof */}
          <div className="mt-12 flex items-center justify-center space-x-2 text-muted-foreground">
            <div className="flex items-center space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-4 h-4 text-wave fill-current" />
              ))}
            </div>
            <span className="text-sm">Trusted by 500+ Cape Coast students & professionals</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;