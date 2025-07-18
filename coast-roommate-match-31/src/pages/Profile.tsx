import { useParams, useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { 
  ArrowLeft, 
  MessageCircle, 
  AlertTriangle, 
  Star, 
  MapPin, 
  Clock, 
  Shield,
  Heart,
  Phone,
  Mail,
  Home,
  Utensils,
  Music
} from "lucide-react";

// Mock data - in a real app, this would come from your database
const profileData: Record<string, any> = {
  1: {
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
    bio: "Third-year psychology student looking for a study-friendly roommate. Love cooking and quiet evenings. I'm passionate about mental health awareness and enjoy reading in my free time. Looking for someone who respects quiet study hours but also enjoys occasional movie nights.",
    highlights: ["Clean & organized", "Early sleeper", "Non-smoker", "Pet-friendly"],
    budget: "500-800 GHS",
    badges: ["Verified Student", "High Match"],
    phone: "+233 50 123 4567",
    email: "sarah.j@student.ucc.edu.gh",
    preferences: {
      lifestyle: "Quiet and studious",
      cleanliness: "Very clean",
      socialLevel: "Moderate - enjoys small gatherings",
      pets: "Loves cats and dogs",
      smoking: "Non-smoker",
      drinking: "Occasional social drinker",
      guests: "Rarely has overnight guests",
      musicVolume: "Quiet/headphones only",
      cookingStyle: "Loves to cook and share meals"
    },
    interests: ["Reading", "Cooking", "Psychology", "Mental Health", "Netflix", "Yoga"],
    dealBreakers: ["Heavy smoking", "Loud parties", "Poor hygiene"],
    photos: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  2: {
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
    bio: "Remote software developer seeking a responsible roommate. Work from home but love weekend social activities. I'm into tech, gaming, and exploring Cape Coast's social scene on weekends.",
    highlights: ["Tech-savvy", "Social weekends", "Clean", "Responsible"],
    budget: "800-1200 GHS",
    badges: ["Verified Professional", "Tech Worker"],
    phone: "+233 50 987 6543",
    email: "michael.asante@techco.com",
    preferences: {
      lifestyle: "Work hard, play hard",
      cleanliness: "Clean and organized",
      socialLevel: "Very social on weekends",
      pets: "Neutral about pets",
      smoking: "Non-smoker",
      drinking: "Social drinker",
      guests: "Regular weekend gatherings",
      musicVolume: "Moderate volume",
      cookingStyle: "Basic cooking, often orders out"
    },
    interests: ["Programming", "Gaming", "Tech", "Social Events", "Football", "Movies"],
    dealBreakers: ["Messy living", "No respect for work schedule", "Drug use"],
    photos: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  3: {
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
    bio: "Teaching assistant at local school. Love reading and quiet activities. Looking for a peaceful living situation where I can focus on my career and personal growth.",
    highlights: ["Quiet lifestyle", "Bookworm", "Organized", "Respectful"],
    budget: "300-500 GHS",
    badges: ["Verified ID", "⚠️ Flagged"],
    warnings: ["Previous roommate reported occasional late-night visitors", "Issues with shared kitchen cleanliness"],
    phone: "+233 50 555 1234",
    email: "akosua.mensah@school.edu.gh",
    preferences: {
      lifestyle: "Quiet and peaceful",
      cleanliness: "Generally clean with occasional lapses",
      socialLevel: "Prefers solitude",
      pets: "No pets",
      smoking: "Non-smoker",
      drinking: "Rarely drinks",
      guests: "Occasional late visitors",
      musicVolume: "Very quiet",
      cookingStyle: "Simple meals, sometimes forgets to clean up"
    },
    interests: ["Reading", "Teaching", "Education", "Quiet Activities", "Nature"],
    dealBreakers: ["Loud noise", "Party lifestyle", "Disrespectful behavior"],
    photos: ["/placeholder.svg", "/placeholder.svg"]
  },
  4: {
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
    bio: "Final year medical student with intensive study schedule. Need someone who understands busy academic life and irregular hours due to hospital rotations.",
    highlights: ["Serious student", "Night owl", "Disciplined", "Goal-oriented"],
    budget: "500-800 GHS",
    badges: ["Verified Student", "Medical Program"],
    phone: "+233 50 777 8888",
    email: "emmanuel.osei@medschool.edu.gh",
    preferences: {
      lifestyle: "Extremely busy, irregular schedule",
      cleanliness: "Very clean and organized",
      socialLevel: "Limited social time",
      pets: "No time for pets",
      smoking: "Non-smoker",
      drinking: "Rarely drinks",
      guests: "Study groups occasionally",
      musicVolume: "Quiet study environment",
      cookingStyle: "Quick meals, meal prep"
    },
    interests: ["Medicine", "Research", "Fitness", "Study Groups", "Healthcare"],
    dealBreakers: ["Disrupting study time", "Unclean living", "Excessive partying"],
    photos: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  }
};

const Profile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const profile = profileData[id || ''];
  
  if (!profile) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-muted/20 flex items-center justify-center">
        <Card className="p-8 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-2">Profile Not Found</h1>
          <p className="text-muted-foreground mb-4">The profile you're looking for doesn't exist.</p>
          <Button onClick={() => navigate('/matches')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Matches
          </Button>
        </Card>
      </div>
    );
  }

  const getCompatibilityColor = (score: number) => {
    if (score >= 90) return "text-green-600";
    if (score >= 80) return "text-primary";
    if (score >= 70) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      {/* Header */}
      <header className="bg-background/95 backdrop-blur-sm border-b border-primary/10 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Button variant="ghost" onClick={() => navigate('/matches')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Matches
          </Button>
          <h1 className="text-xl font-bold text-foreground">{profile.name}'s Profile</h1>
          <div className="flex items-center space-x-2">
            <Button variant="hero" size="sm">
              <MessageCircle className="w-4 h-4 mr-2" />
              Message
            </Button>
            <Button variant="ghost" size="sm">
              <Heart className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Profile Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Basic Info Card */}
            <Card className="p-6 border-primary/10">
              <div className="flex items-start space-x-6">
                <div className="relative">
                  <Avatar className="w-24 h-24">
                    <AvatarImage src={profile.avatar} alt={profile.name} />
                    <AvatarFallback className="text-xl">
                      {profile.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  {profile.verified && (
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <Shield className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h1 className="text-2xl font-bold text-foreground flex items-center space-x-2">
                        <span>{profile.name}</span>
                        {profile.flagged && (
                          <AlertTriangle className="w-5 h-5 text-red-500" />
                        )}
                      </h1>
                      <p className="text-lg text-muted-foreground">
                        {profile.age} • {profile.occupation}
                      </p>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-2">
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{profile.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>Active {profile.lastActive}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Compatibility Score */}
                    <div className="text-center">
                      <div className={`text-3xl font-bold ${getCompatibilityColor(profile.compatibility)}`}>
                        {profile.compatibility}%
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Match Score
                      </p>
                    </div>
                  </div>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {profile.badges.map((badge, index) => (
                      <Badge 
                        key={index} 
                        variant={badge.includes('⚠️') ? 'destructive' : 'secondary'}
                      >
                        {badge}
                      </Badge>
                    ))}
                  </div>

                  {/* Contact Info */}
                  <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4" />
                      <span>{profile.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4" />
                      <span>{profile.email}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Bio */}
            <Card className="p-6 border-primary/10">
              <h2 className="text-xl font-semibold text-foreground mb-4">About Me</h2>
              <p className="text-muted-foreground leading-relaxed">{profile.bio}</p>
            </Card>

            {/* Living Preferences */}
            <Card className="p-6 border-primary/10">
              <h2 className="text-xl font-semibold text-foreground mb-4">Living Preferences</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(profile.preferences).map(([key, value]) => (
                  <div key={key} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-foreground capitalize">
                        {key.replace(/([A-Z])/g, ' $1').toLowerCase()}:
                      </span>
                      <p className="text-muted-foreground">{String(value)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Interests */}
            <Card className="p-6 border-primary/10">
              <h2 className="text-xl font-semibold text-foreground mb-4">Interests</h2>
              <div className="flex flex-wrap gap-2">
                {profile.interests.map((interest, index) => (
                  <Badge key={index} variant="outline" className="px-3 py-1">
                    {interest}
                  </Badge>
                ))}
              </div>
            </Card>

            {/* Deal Breakers */}
            <Card className="p-6 border-primary/10">
              <h2 className="text-xl font-semibold text-foreground mb-4">Deal Breakers</h2>
              <div className="space-y-2">
                {profile.dealBreakers.map((dealBreaker, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                    <span className="text-muted-foreground">{dealBreaker}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Warning if flagged */}
            {profile.flagged && profile.warnings && (
              <Card className="p-6 border-red-200 bg-red-50 dark:bg-red-950/20 dark:border-red-800">
                <h2 className="text-xl font-semibold text-red-600 mb-4 flex items-center space-x-2">
                  <AlertTriangle className="w-5 h-5" />
                  <span>Safety Warnings</span>
                </h2>
                <div className="space-y-3">
                  {profile.warnings?.map((warning: string, index: number) => (
                    <div key={index} className="bg-white border border-red-200 rounded-lg p-3 dark:bg-red-900/20 dark:border-red-700">
                      <p className="text-sm text-red-700 dark:text-red-300">{warning}</p>
                    </div>
                  ))}
                </div>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Compatibility Breakdown */}
            <Card className="p-6 border-primary/10">
              <h3 className="text-lg font-semibold text-foreground mb-4">Compatibility Breakdown</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Lifestyle</span>
                    <span className="text-primary">95%</span>
                  </div>
                  <Progress value={95} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Cleanliness</span>
                    <span className="text-primary">90%</span>
                  </div>
                  <Progress value={90} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Social Level</span>
                    <span className="text-primary">88%</span>
                  </div>
                  <Progress value={88} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Budget Range</span>
                    <span className="text-primary">92%</span>
                  </div>
                  <Progress value={92} className="h-2" />
                </div>
              </div>
            </Card>

            {/* Key Highlights */}
            <Card className="p-6 border-primary/10">
              <h3 className="text-lg font-semibold text-foreground mb-4">Key Highlights</h3>
              <div className="space-y-3">
                {profile.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{highlight}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Budget */}
            <Card className="p-6 border-primary/10">
              <h3 className="text-lg font-semibold text-foreground mb-4">Budget Range</h3>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{profile.budget}</div>
                <p className="text-sm text-muted-foreground">Monthly rent budget</p>
              </div>
            </Card>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button variant="hero" size="lg" className="w-full">
                <MessageCircle className="w-4 h-4 mr-2" />
                Start Conversation
              </Button>
              <Button variant="outline" size="lg" className="w-full">
                <Heart className="w-4 h-4 mr-2" />
                Save Profile
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;