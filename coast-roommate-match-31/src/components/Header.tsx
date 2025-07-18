import { Button } from "@/components/ui/button";
import { Heart, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-primary/10 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-primary to-wave rounded-full">
            <Heart className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">Coast Roommate Link</h1>
            <p className="text-xs text-muted-foreground">Cape Coast's trusted matching platform</p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors">How It Works</a>
          <a href="#safety" className="text-foreground hover:text-primary transition-colors">Safety</a>
          <a href="#pricing" className="text-foreground hover:text-primary transition-colors">Pricing</a>
        </nav>
        
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/sign-in">Sign In</Link>
          </Button>
          <Button variant="default" size="sm" asChild>
            <Link to="/sign-up">Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;