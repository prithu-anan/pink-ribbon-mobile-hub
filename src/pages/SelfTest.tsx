
import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import BottomNavigation from '@/components/layout/BottomNavigation';
import ProgressIndicator from '@/components/self-test/ProgressIndicator';
import TestQuestion from '@/components/self-test/TestQuestion';
import { useToast } from '@/components/ui/use-toast';
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogAction } from '@/components/ui/alert-dialog';

interface Question {
  number: number;
  text: string;
  options?: string[];
  videoSrc?: string;
}

const questions: Question[] = [
  {
    number: 1,
    text: "Have you noticed any changes in size or shape of your breast or nipples?",
    options: ["Yes", "No", "Not sure"],
    videoSrc: ""
  },
  {
    number: 2,
    text: "Have you noticed any skin redness, rashes, dimpling, or puckering?",
    options: ["Yes", "No", "Not sure"],
    videoSrc: ""
  },
  {
    number: 3,
    text: "After raising your arms, have you noticed any changes?",
    options: ["Yes", "No", "Not sure"],
    videoSrc: ""
  },
  {
    number: 4,
    text: "Have you felt any lumps or painful areas?",
    options: ["Yes", "No", "Not sure"],
    videoSrc: ""
  }
];

const SelfTest = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);
  const { toast } = useToast();
  
  const handleNext = (value: string) => {
    const newAnswers = { ...answers, [currentStep]: value };
    setAnswers(newAnswers);
    
    if (currentStep < questions.length) {
      setCurrentStep(currentStep + 1);
    } else {
      // Check if any answers are "Yes"
      const hasYesAnswer = Object.values(newAnswers).includes("Yes");
      if (hasYesAnswer) {
        setShowResults(true);
      } else {
        toast({
          title: "Self-test completed",
          description: "No concerning symptoms detected. Remember to perform self-exams monthly.",
        });
        setCurrentStep(1);
        setAnswers({});
      }
    }
  };
  
  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  const handleCloseResults = () => {
    setShowResults(false);
    setCurrentStep(1);
    setAnswers({});
  };
  
  const currentQuestion = questions[currentStep - 1];
  
  return (
    <div className="min-h-screen bg-pink-50/30 pb-16">
      <Header title="Self Test Page" showBackButton backTo="/" />
      
      <ProgressIndicator totalSteps={questions.length} currentStep={currentStep} />
      
      <div className="container max-w-md mx-auto p-4">
        <TestQuestion
          number={currentQuestion.number}
          question={currentQuestion.text}
          options={currentQuestion.options}
          videoSrc={currentQuestion.videoSrc}
          onPrevious={handlePrevious}
          onNext={handleNext}
          isFirst={currentStep === 1}
          isLast={currentStep === questions.length}
        />
      </div>
      
      <AlertDialog open={showResults}>
        <AlertDialogContent className="max-w-md">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-center">Suggestion</AlertDialogTitle>
            <AlertDialogDescription className="text-center">
              <p className="text-red-500 font-medium text-lg">Please consult a doctor.</p>
              <p className="mt-4 text-gray-700">
                Based on your responses, we recommend consulting a healthcare professional for a proper examination.
                Early detection is key for successful treatment.
              </p>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="flex justify-center">
            <AlertDialogAction onClick={handleCloseResults} className="bg-pink-500 hover:bg-pink-600">
              I Understand
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      
      <BottomNavigation />
    </div>
  );
};

export default SelfTest;
