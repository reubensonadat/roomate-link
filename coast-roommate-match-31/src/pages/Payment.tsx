import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Heart, CreditCard, Smartphone, Building, CheckCircle, ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState("mobile-money");
  const [formData, setFormData] = useState({
    phoneNumber: "",
    network: "mtn",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    nameOnCard: ""
  });
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For demo purposes, navigate directly to matches
    navigate("/matches");
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const paymentMethods = [
    {
      id: "mobile-money",
      name: "Mobile Money",
      icon: Smartphone,
      description: "MTN MoMo, Vodafone Cash, AirtelTigo Money"
    },
    {
      id: "card",
      name: "Debit/Credit Card",
      icon: CreditCard,
      description: "Visa, Mastercard"
    },
    {
      id: "bank-transfer",
      name: "Bank Transfer",
      icon: Building,
      description: "Direct bank transfer"
    }
  ];

  const renderPaymentForm = () => {
    switch (paymentMethod) {
      case "mobile-money":
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Mobile Network</Label>
              <RadioGroup
                value={formData.network}
                onValueChange={(value) => handleInputChange("network", value)}
                className="flex space-x-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="mtn" id="mtn" />
                  <Label htmlFor="mtn">MTN</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="vodafone" id="vodafone" />
                  <Label htmlFor="vodafone">Vodafone</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="airteltigo" id="airteltigo" />
                  <Label htmlFor="airteltigo">AirtelTigo</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="space-y-2">
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <Input
                id="phoneNumber"
                type="tel"
                placeholder="0XX XXX XXXX"
                value={formData.phoneNumber}
                onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                required
              />
            </div>
          </div>
        );

      case "card":
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="nameOnCard">Name on Card</Label>
              <Input
                id="nameOnCard"
                value={formData.nameOnCard}
                onChange={(e) => handleInputChange("nameOnCard", e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cardNumber">Card Number</Label>
              <Input
                id="cardNumber"
                placeholder="1234 5678 9012 3456"
                value={formData.cardNumber}
                onChange={(e) => handleInputChange("cardNumber", e.target.value)}
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="expiryDate">Expiry Date</Label>
                <Input
                  id="expiryDate"
                  placeholder="MM/YY"
                  value={formData.expiryDate}
                  onChange={(e) => handleInputChange("expiryDate", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cvv">CVV</Label>
                <Input
                  id="cvv"
                  placeholder="123"
                  value={formData.cvv}
                  onChange={(e) => handleInputChange("cvv", e.target.value)}
                  required
                />
              </div>
            </div>
          </div>
        );

      case "bank-transfer":
        return (
          <div className="space-y-4">
            <div className="bg-muted/30 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Bank Transfer Details</h4>
              <div className="space-y-1 text-sm">
                <p><strong>Bank:</strong> GCB Bank</p>
                <p><strong>Account Name:</strong> Coast Roommate Link</p>
                <p><strong>Account Number:</strong> 1234567890</p>
                <p><strong>Reference:</strong> Your email address</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              After making the transfer, your account will be activated within 24 hours.
              You'll receive an email confirmation.
            </p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/questionnaire" className="inline-flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors mb-4">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to questionnaire</span>
          </Link>
          
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary to-wave rounded-full">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div className="text-left">
              <h1 className="text-xl font-bold text-foreground">Coast Roommate Link</h1>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-foreground mb-2">Complete Your Payment</h2>
          <p className="text-muted-foreground">Unlock access to your roommate matches</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Payment Form */}
          <div className="lg:col-span-2">
            <Card className="p-6 border-primary/10">
              <h3 className="text-lg font-semibold text-foreground mb-4">Choose Payment Method</h3>
              
              {/* Payment Method Selection */}
              <RadioGroup
                value={paymentMethod}
                onValueChange={setPaymentMethod}
                className="space-y-3 mb-6"
              >
                {paymentMethods.map((method) => (
                  <div key={method.id} className="flex items-center space-x-3">
                    <RadioGroupItem value={method.id} id={method.id} />
                    <Label htmlFor={method.id} className="cursor-pointer flex-1">
                      <div className="flex items-center space-x-3">
                        <method.icon className="w-5 h-5 text-primary" />
                        <div>
                          <div className="font-medium">{method.name}</div>
                          <div className="text-sm text-muted-foreground">{method.description}</div>
                        </div>
                      </div>
                    </Label>
                  </div>
                ))}
              </RadioGroup>

              <Separator className="my-6" />

              {/* Payment Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {renderPaymentForm()}
                
                <Button type="submit" variant="hero" size="lg" className="w-full">
                  Complete Payment - ₵25
                </Button>
              </form>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="p-6 border-primary/10 sticky top-4">
              <h3 className="text-lg font-semibold text-foreground mb-4">Order Summary</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Complete Access Plan</span>
                  <span className="font-semibold">₵25.00</span>
                </div>
                
                <Separator />
                
                <div className="flex justify-between text-lg font-semibold">
                  <span>Total</span>
                  <span className="text-primary">₵25.00</span>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <h4 className="font-medium text-foreground">What's included:</h4>
                <div className="space-y-2">
                  {[
                    "Access to all verified profiles",
                    "Detailed compatibility analysis",
                    "Safety warnings & flags",
                    "Weekly match updates",
                    "Secure messaging",
                    "30-day guarantee"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 p-3 bg-primary/5 rounded-lg">
                <p className="text-xs text-muted-foreground text-center">
                  🔒 Your payment is secure and encrypted. 
                  30-day money-back guarantee.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;