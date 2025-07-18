import { Heart, Shield, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-8 h-8 bg-white/20 rounded-full">
                <Heart className="w-4 h-4" />
              </div>
              <span className="text-xl font-bold">Coast Roommate Link</span>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Connecting compatible roommates in Cape Coast through intelligent matching and safety-first approach.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#how-it-works" className="text-primary-foreground/80 hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#safety" className="text-primary-foreground/80 hover:text-white transition-colors">Safety Features</a></li>
              <li><a href="#pricing" className="text-primary-foreground/80 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">Success Stories</a></li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-primary-foreground/60" />
                <span className="text-primary-foreground/80">Cape Coast, Ghana</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary-foreground/60" />
                <span className="text-primary-foreground/80">hello@coastroommate.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary-foreground/60" />
                <span className="text-primary-foreground/80">+233 XX XXX XXXX</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-primary-foreground/80">
            © 2024 Coast Roommate Link. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <Shield className="w-4 h-4 text-primary-foreground/60" />
            <span className="text-xs text-primary-foreground/80">
              Verified & Secure Platform
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;