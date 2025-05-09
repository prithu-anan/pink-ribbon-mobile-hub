
import React from 'react';
import { cn } from '@/lib/utils';

interface ProgressIndicatorProps {
  totalSteps: number;
  currentStep: number;
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ 
  totalSteps, 
  currentStep 
}) => {
  return (
    <div className="px-4 py-3 bg-gray-50">
      <div className="flex items-center justify-between mb-2">
        <div className="flex space-x-1">
          {Array.from({ length: totalSteps }).map((_, index) => (
            <div 
              key={index}
              className={cn(
                "h-2 w-8 rounded-sm transition-colors", 
                index < currentStep 
                  ? "bg-pink-500" 
                  : index === currentStep 
                    ? "bg-pink-300" 
                    : "bg-gray-200"
              )}
            />
          ))}
        </div>
        <span className="text-sm font-medium text-gray-700">
          {currentStep}/{totalSteps}
        </span>
      </div>
    </div>
  );
};

export default ProgressIndicator;
