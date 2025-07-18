import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Heart, MessageCircle, AlertTriangle, Star, MapPin, Users, Clock, Shield } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

// Mock data for demonstration
const matches = [
  {
    id: 1,
    name: "Sarah Johnson",
    age: 22,
    occupation: "Psychology Student",
    location: "Near UCC Campus",
    compatibility: 92,
    avatar: "/placeholder.svg",
    verified: true,
    flagged: false,
    lastActive: "2 hours ago",
    bio: "Third-year psychology student looking for a study-friendly roommate. Love cooking and quiet evenings.",
    highlights: ["Clean & organized", "Early sleeper", "Non-smoker", "Pet-friendly"],
    budget: "500-800 GHS",
    badges: ["Verified Student", "High Match"]
  },
  {
    id: 2,
    name: "Michael Asante",
    age: 25,
    occupation: "Software Developer",
    location: "Cape Coast Center",
    compatibility: 87,
    avatar: "/placeholder.svg",
    verified: true,
    flagged: false,
    lastActive: "1 day ago",
    bio: "Remote software developer seeking a responsible roommate. Work from home but love weekend social activities.",
    highlights: ["Tech-savvy", "Social weekends", "Clean", "Responsible"],
    budget: "800-1200 GHS",
    badges: ["Verified Professional", "Tech Worker"]
  },
  {
    id: 3,
    name: "Akosua Mensah",
    age: 24,
    occupation: "Teaching Assistant",
    location: "Residential Area",
    compatibility: 85,
    avatar: "/placeholder.svg",
    verified: true,
    flagged: true,
    lastActive: "3 days ago",
    bio: "Teaching assistant at local school. Love reading and quiet activities. Looking for a peaceful living situation.",
    highlights: ["Quiet lifestyle", "Bookworm", "Organized", "Respectful"],
    budget: "300-500 GHS",
    badges: ["Verified ID", "⚠️ Flagged"],
    warnings: ["Previous roommate reported occasional late-night visitors", "Issues with shared kitchen cleanliness"]
  },
  {
    id: 4,
    name: "Emmanuel Osei",
    age: 23,
    occupation: "Medical Student",
    location: "Near Hospital",
    compatibility: 83,
    avatar: "/placeholder.svg",
    verified: true,
    flagged: false,
    lastActive: "5 hours ago",
    bio: "Final year medical student with intensive study schedule. Need someone who understands busy academic life.",
    highlights: ["Serious student", "Night owl", "Disciplined", "Goal-oriented"],
    budget: "500-800 GHS",
    badges: ["Verified Student", "Medical Program"]
  }
];

const Matches = () => {
  const [selectedMatch, setSelectedMatch] = useState<number | null>(null);
  const navigate = useNavigate();

  const handleSignOut = () => {
    // Clear any stored user data
    localStorage.clear();
    // Redirect to sign in page
    navigate('/signin');
  };

  const getCompatibilityColor = (score: number) => {
    if (score >= 90) return "text-green-600";
    if (score >= 80) return "text-primary";
    if (score >= 70) return "text-yellow-600";
    return "text-red-600";
  };

  const getCompatibilityLabel = (score: number) => {
    if (score >= 90) return "Excellent Match";
    if (score >= 80) return "Great Match";
    if (score >= 70) return "Good Match";
    return "Fair Match";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      {/* Header */}
      <header className="bg-background/95 backdrop-blur-sm border-b border-primary/10 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-primary to-wave rounded-full">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Your Roommate Matches</h1>
              <p className="text-xs text-muted-foreground">Found {matches.length} compatible matches</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm">
              <Users className="w-4 h-4 mr-2" />
              Profile Settings
            </Button>
            <Button variant="ghost" size="sm" onClick={handleSignOut}>Sign Out</Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Matches List */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-foreground">Your Matches</h2>
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">All profiles verified</span>
              </div>
            </div>

            <div className="space-y-4">
              {matches.map((match) => (
                <Card 
                  key={match.id} 
                  className={`p-6 border-primary/10 hover:border-primary/20 transition-all cursor-pointer ${
                    selectedMatch === match.id ? 'ring-2 ring-primary/20 border-primary/30' : ''
                  }`}
                  onClick={() => setSelectedMatch(match.id)}
                >
                  <div className="flex items-start space-x-4">
                    {/* Avatar */}
                    <div className="relative">
                      <Avatar className="w-16 h-16">
                        <AvatarImage src={match.avatar} alt={match.name} />
                        <AvatarFallback>{match.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      {match.verified && (
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                          <Shield className="w-3 h-3 text-white" />
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-lg font-semibold text-foreground flex items-center space-x-2">
                            <span>{match.name}</span>
                            {match.flagged && (
                              <AlertTriangle className="w-4 h-4 text-red-500" />
                            )}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {match.age} • {match.occupation}
                          </p>
                        </div>
                        
                        {/* Compatibility Score */}
                        <div className="text-right">
                          <div className={`text-2xl font-bold ${getCompatibilityColor(match.compatibility)}`}>
                            {match.compatibility}%
                          </div>
                          <p className="text-xs text-muted-foreground">
                            {getCompatibilityLabel(match.compatibility)}
                          </p>
                        </div>
                      </div>

                      {/* Badges */}
                      <div className="flex flex-wrap gap-2 mb-3">
                        {match.badges.map((badge, index) => (
                          <Badge 
                            key={index} 
                            variant={badge.includes('⚠️') ? 'destructive' : 'secondary'}
                            className="text-xs"
                          >
                            {badge}
                          </Badge>
                        ))}
                      </div>

                      {/* Quick Info */}
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-3 h-3" />
                          <span>{match.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-3 h-3" />
                          <span>Active {match.lastActive}</span>
                        </div>
                      </div>

                      {/* Bio */}
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                        {match.bio}
                      </p>

                      {/* Warning if flagged */}
                      {match.flagged && (
                        <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-3 dark:bg-red-950/20 dark:border-red-800">
                          <div className="flex items-center space-x-2 mb-1">
                            <AlertTriangle className="w-4 h-4 text-red-600 dark:text-red-400" />
                            <span className="text-sm font-medium text-red-800 dark:text-red-200">
                              Profile Flagged
                            </span>
                          </div>
                          <p className="text-xs text-red-700 dark:text-red-300">
                            Click to view detailed warnings from previous roommates
                          </p>
                        </div>
                      )}

                      {/* Actions */}
                      <div className="flex items-center space-x-3">
                        <Button variant="hero" size="sm">
                          <MessageCircle className="w-4 h-4 mr-2" />
                          Message
                        </Button>
                        <Button variant="outline" size="sm" asChild>
                          <Link to={`/profile/${match.id}`}>
                            View Full Profile
                          </Link>
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Heart className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center">
              <Button variant="outline">
                Load More Matches
              </Button>
            </div>
          </div>

          {/* Detailed View Sidebar */}
          <div className="lg:col-span-1">
            {selectedMatch ? (
              <Card className="p-6 border-primary/10 sticky top-24">
                {(() => {
                  const match = matches.find(m => m.id === selectedMatch);
                  if (!match) return null;
                  
                  return (
                    <div className="space-y-6">
                      <div className="text-center">
                        <Avatar className="w-20 h-20 mx-auto mb-3">
                          <AvatarImage src={match.avatar} alt={match.name} />
                          <AvatarFallback>{match.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <h3 className="text-lg font-semibold text-foreground">{match.name}</h3>
                        <p className="text-sm text-muted-foreground">{match.occupation}</p>
                      </div>

                      {/* Compatibility Breakdown */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Compatibility Breakdown</h4>
                        <div className="space-y-3">
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span>Lifestyle</span>
                              <span className="text-primary">95%</span>
                            </div>
                            <Progress value={95} className="h-2" />
                          </div>
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span>Cleanliness</span>
                              <span className="text-primary">90%</span>
                            </div>
                            <Progress value={90} className="h-2" />
                          </div>
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span>Social Level</span>
                              <span className="text-primary">88%</span>
                            </div>
                            <Progress value={88} className="h-2" />
                          </div>
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span>Budget Range</span>
                              <span className="text-primary">92%</span>
                            </div>
                            <Progress value={92} className="h-2" />
                          </div>
                        </div>
                      </div>

                      {/* Highlights */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Key Highlights</h4>
                        <div className="space-y-2">
                          {match.highlights.map((highlight, index) => (
                            <div key={index} className="flex items-center space-x-2">
                              <Star className="w-4 h-4 text-primary flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Warnings if flagged */}
                      {match.warnings && (
                        <div>
                          <h4 className="font-semibold text-red-600 mb-3 flex items-center space-x-2">
                            <AlertTriangle className="w-4 h-4" />
                            <span>Safety Warnings</span>
                          </h4>
                          <div className="space-y-2">
                            {match.warnings.map((warning, index) => (
                              <div key={index} className="bg-red-50 border border-red-200 rounded p-2 dark:bg-red-950/20 dark:border-red-800">
                                <p className="text-xs text-red-700 dark:text-red-300">{warning}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      <Button variant="hero" size="lg" className="w-full">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Start Conversation
                      </Button>
                    </div>
                  );
                })()}
              </Card>
            ) : (
              <Card className="p-6 border-primary/10 text-center">
                <Heart className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Select a Match</h3>
                <p className="text-sm text-muted-foreground">
                  Click on any match to see detailed compatibility breakdown and safety information.
                </p>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Matches;