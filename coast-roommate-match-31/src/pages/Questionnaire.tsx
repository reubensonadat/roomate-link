import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Heart, ArrowLeft, ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const questions = [
  {
    id: "sleepSchedule",
    title: "What's your typical sleep schedule?",
    type: "radio",
    options: [
      { value: "early", label: "Early bird (sleep by 10 PM, wake by 7 AM)" },
      { value: "normal", label: "Normal schedule (sleep by 11 PM, wake by 8 AM)" },
      { value: "night", label: "Night owl (sleep after midnight, wake after 9 AM)" },
      { value: "irregular", label: "Irregular/shift work schedule" }
    ]
  },
  {
    id: "cleanliness",
    title: "How would you rate your cleanliness level?",
    type: "slider",
    min: 1,
    max: 10,
    step: 1,
    description: "1 = Very messy, 10 = Extremely clean"
  },
  {
    id: "socialLevel",
    title: "How social are you at home?",
    type: "radio",
    options: [
      { value: "very-social", label: "Love having friends over regularly" },
      { value: "somewhat-social", label: "Occasional gatherings are fine" },
      { value: "quiet", label: "Prefer a quiet, peaceful home" },
      { value: "private", label: "Keep to myself, rarely have guests" }
    ]
  },
  {
    id: "noiseLevel",
    title: "What's your tolerance for noise?",
    type: "slider",
    min: 1,
    max: 10,
    step: 1,
    description: "1 = Need absolute quiet, 10 = Don't mind loud music/TV"
  },
  {
    id: "sharedSpaces",
    title: "How do you feel about sharing common spaces?",
    type: "radio",
    options: [
      { value: "love-sharing", label: "Love cooking and hanging out together" },
      { value: "comfortable", label: "Comfortable sharing but respect personal time" },
      { value: "minimal", label: "Minimal interaction, quick hellos" },
      { value: "separate", label: "Prefer to keep interactions separate" }
    ]
  },
  {
    id: "budget",
    title: "What's your monthly budget for rent (in GHS)?",
    type: "radio",
    options: [
      { value: "300-500", label: "300 - 500 GHS" },
      { value: "500-800", label: "500 - 800 GHS" },
      { value: "800-1200", label: "800 - 1200 GHS" },
      { value: "1200+", label: "1200+ GHS" }
    ]
  },
  {
    id: "pets",
    title: "What's your stance on pets?",
    type: "radio",
    options: [
      { value: "love-pets", label: "Love pets, have or want one" },
      { value: "okay-pets", label: "Okay with pets if they're well-behaved" },
      { value: "no-pets", label: "Prefer no pets" },
      { value: "allergic", label: "Allergic to certain animals" }
    ]
  },
  {
    id: "smoking",
    title: "Smoking preference?",
    type: "radio",
    options: [
      { value: "smoker", label: "I smoke" },
      { value: "occasional", label: "Occasional social smoker" },
      { value: "no-smoking", label: "No smoking in the house" },
      { value: "strictly-no", label: "Strictly no smoking anywhere on property" }
    ]
  },
  {
    id: "workStudy",
    title: "What's your work/study situation?",
    type: "radio",
    options: [
      { value: "student", label: "Full-time student" },
      { value: "working", label: "Full-time professional" },
      { value: "both", label: "Working student" },
      { value: "freelance", label: "Freelancer/entrepreneur" }
    ]
  },
  {
    id: "location",
    title: "Preferred area in Cape Coast?",
    type: "radio",
    options: [
      { value: "university", label: "Near University of Cape Coast" },
      { value: "city-center", label: "Cape Coast city center" },
      { value: "residential", label: "Quiet residential areas" },
      { value: "beach", label: "Near the beach/coast" }
    ]
  },
  {
    id: "lifestyle",
    title: "Additional lifestyle preferences?",
    type: "textarea",
    placeholder: "Tell us about any specific preferences, hobbies, or lifestyle choices we should know about when matching you..."
  }
];

const Questionnaire = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const navigate = useNavigate();

  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswer = (questionId: string, value: any) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      // Complete questionnaire - redirect to payment
      navigate("/payment");
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const canProceed = () => {
    const answer = answers[currentQ.id];
    if (currentQ.type === "textarea") {
      return true; // Optional field
    }
    return answer !== undefined && answer !== null;
  };

  const renderQuestion = () => {
    const answer = answers[currentQ.id];

    switch (currentQ.type) {
      case "radio":
        return (
          <RadioGroup
            value={answer || ""}
            onValueChange={(value) => handleAnswer(currentQ.id, value)}
            className="space-y-3"
          >
            {currentQ.options?.map((option) => (
              <div key={option.value} className="flex items-center space-x-2">
                <RadioGroupItem value={option.value} id={option.value} />
                <Label htmlFor={option.value} className="cursor-pointer flex-1">
                  {option.label}
                </Label>
              </div>
            ))}
          </RadioGroup>
        );

      case "slider":
        return (
          <div className="space-y-6">
            <div className="px-4">
              <Slider
                value={answer ? [answer] : [5]}
                onValueChange={(value) => handleAnswer(currentQ.id, value[0])}
                max={currentQ.max}
                min={currentQ.min}
                step={currentQ.step}
                className="w-full"
              />
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>{currentQ.min}</span>
              <span className="text-lg font-semibold text-primary">
                {answer || 5}
              </span>
              <span>{currentQ.max}</span>
            </div>
            {currentQ.description && (
              <p className="text-sm text-muted-foreground text-center">
                {currentQ.description}
              </p>
            )}
          </div>
        );

      case "textarea":
        return (
          <Textarea
            value={answer || ""}
            onChange={(e) => handleAnswer(currentQ.id, e.target.value)}
            placeholder={currentQ.placeholder}
            rows={4}
            className="resize-none"
          />
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
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary to-wave rounded-full">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div className="text-left">
              <h1 className="text-xl font-bold text-foreground">Coast Roommate Link</h1>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Compatibility Questionnaire
          </h2>
          <p className="text-muted-foreground">
            Question {currentQuestion + 1} of {questions.length}
          </p>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <Progress value={progress} className="h-2" />
          <div className="flex justify-between text-sm text-muted-foreground mt-2">
            <span>Getting to know you...</span>
            <span>{Math.round(progress)}% complete</span>
          </div>
        </div>

        {/* Question Card */}
        <Card className="p-8 border-primary/10 mb-8">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground">
              {currentQ.title}
            </h3>
            
            {renderQuestion()}
          </div>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className="flex items-center space-x-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Previous</span>
          </Button>

          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              {currentQuestion === questions.length - 1 
                ? "Complete questionnaire" 
                : "Continue to next question"}
            </p>
          </div>

          <Button
            variant="hero"
            onClick={handleNext}
            disabled={!canProceed()}
            className="flex items-center space-x-2"
          >
            <span>
              {currentQuestion === questions.length - 1 ? "Complete" : "Next"}
            </span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Exit option */}
        <div className="text-center mt-8">
          <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Save progress and exit
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Questionnaire;