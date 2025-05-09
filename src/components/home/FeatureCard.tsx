
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  to: string;
  color?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
  to,
  color = "bg-pink-100"
}) => {
  return (
    <Link 
      to={to}
      className={cn(
        "block rounded-lg p-5 transition-transform hover:scale-[1.02]",
        color
      )}
    >
      <div className="flex flex-col space-y-2">
        <div className="text-2xl mb-2">{icon}</div>
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-sm text-gray-700">{description}</p>
      </div>
    </Link>
  );
};

export default FeatureCard;
