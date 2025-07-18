import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, AlertTriangle, CheckCircle, Lock, Eye, UserCheck } from "lucide-react";

const Safety = () => {
  const safetyFeatures = [
    {
      icon: Shield,
      title: "Profile Verification",
      description: "All users must verify their identity before accessing matches",
      status: "Active"
    },
    {
      icon: AlertTriangle,
      title: "Warning System",
      description: "Users can flag problematic profiles for community safety",
      status: "24/7 Monitoring"
    },
    {
      icon: Lock,
      title: "Secure Data Storage",
      description: "Your personal information is encrypted and securely stored",
      status: "Bank-level Security"
    },
    {
      icon: Eye,
      title: "Manual Review",
      description: "Our team manually reviews flagged profiles and reports",
      status: "Human Verification"
    }
  ];

  return (
    <section id="safety" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Your Safety is Our Priority</span>
          </div>
          
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Safe & Secure Roommate Matching
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Multiple layers of protection ensure you connect with trustworthy roommates
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {safetyFeatures.map((feature, index) => (
              <Card key={index} className="p-6 border-primary/10 hover:border-primary/20 transition-all">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-foreground">
                        {feature.title}
                      </h3>
                      <Badge variant="secondary" className="text-xs">
                        {feature.status}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          {/* Warning indicator example */}
          <Card className="p-6 bg-red-50 border-red-200 dark:bg-red-950/20 dark:border-red-800">
            <div className="flex items-center space-x-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-red-600 dark:text-red-400" />
              <h3 className="text-lg font-semibold text-red-800 dark:text-red-200">
                Example: Profile Warning System
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <p className="text-sm text-red-700 dark:text-red-300 font-medium">
                  ⚠️ This profile has been flagged by previous users for:
                </p>
                <ul className="text-sm text-red-600 dark:text-red-400 space-y-1 ml-4">
                  <li>• Late night noise complaints</li>
                  <li>• Cleanliness issues</li>
                  <li>• Payment delays</li>
                </ul>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-red-700 dark:text-red-300 font-medium">
                  Our recommendation:
                </p>
                <p className="text-sm text-red-600 dark:text-red-400">
                  Consider other matches or proceed with additional caution and thorough discussions about expectations.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Safety;