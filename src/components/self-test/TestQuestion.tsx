
import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';

interface TestQuestionProps {
  number: number;
  question: string;
  options?: string[];
  videoSrc?: string;
  onPrevious: () => void;
  onNext: (value: string) => void;
  isFirst?: boolean;
  isLast?: boolean;
}

const TestQuestion: React.FC<TestQuestionProps> = ({
  number,
  question,
  options = ["Yes", "No", "Not sure"],
  videoSrc,
  onPrevious,
  onNext,
  isFirst = false,
  isLast = false
}) => {
  const [selectedValue, setSelectedValue] = React.useState<string>("");

  const handleNext = () => {
    if (selectedValue) {
      onNext(selectedValue);
    }
  };

  return (
    <div className="p-4">
      <div className="mb-4">
        {videoSrc && (
          <div className="mb-4 rounded-lg overflow-hidden bg-gray-100 aspect-video flex items-center justify-center">
            <video 
              className="w-full h-full object-cover"
              controls
              poster="/placeholder.svg"
            >
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
        
        <h3 className="text-lg font-medium text-gray-800 mb-2">
          {number}. {question}
        </h3>
        
        <Select onValueChange={setSelectedValue} value={selectedValue}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select an option" />
          </SelectTrigger>
          <SelectContent>
            {options.map((option) => (
              <SelectItem key={option} value={option}>{option}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      <div className="flex justify-between mt-6">
        <Button 
          onClick={onPrevious} 
          variant="outline" 
          disabled={isFirst}
          className={isFirst ? "opacity-50" : ""}
        >
          Previous
        </Button>
        <Button 
          onClick={handleNext} 
          disabled={!selectedValue}
          className={!selectedValue ? "opacity-50 bg-pink-600" : "bg-pink-600 hover:bg-pink-700"}
        >
          {isLast ? "Finish" : "Next"}
        </Button>
      </div>
    </div>
  );
};

export default TestQuestion;
