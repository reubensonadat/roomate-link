import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserPlus, FileText, CreditCard, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Create Your Profile",
      description: "Provide basic information about yourself including age, occupation, and preferences.",
      details: "Takes 3-5 minutes"
    },
    {
      icon: FileText,
      title: "Complete Questionnaire",
      description: "Answer detailed questions about your lifestyle, habits, and living preferences.",
      details: "15-20 questions"
    },
    {
      icon: CreditCard,
      title: "Secure Payment",
      description: "Small one-time fee to access our matching algorithm and verified profiles.",
      details: "Safe & encrypted"
    },
    {
      icon: Users,
      title: "View Your Matches",
      description: "Get personalized roommate recommendations with compatibility scores and detailed breakdowns.",
      details: "Updated weekly"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            How Coast Roommate Link Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our proven 4-step process connects you with compatible roommates in Cape Coast
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="p-6 h-full bg-card border-primary/10 hover:border-primary/20 transition-all hover:shadow-lg">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-wave rounded-full flex items-center justify-center mx-auto mb-4">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-4">
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      {step.description}
                    </p>
                    <span className="text-sm text-primary font-medium">
                      {step.details}
                    </span>
                  </div>
                </Card>
                
                {/* Arrow connector for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-primary/40" />
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="hero" size="lg" asChild>
              <Link to="/sign-up">
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;