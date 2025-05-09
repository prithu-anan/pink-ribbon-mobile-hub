
import React from 'react';
import { Link } from 'react-router-dom';
import { ThumbsUp } from 'lucide-react';

interface QuestionCardProps {
  id: string;
  title: string;
  author: string;
  time: string;
  votes: number;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  id,
  title,
  author,
  time,
  votes
}) => {
  return (
    <Link to={`/forum/${id}`} className="block">
      <div className="bg-white rounded-lg shadow-sm p-4 mb-4 border border-pink-100 hover:border-pink-300 transition-colors">
        <h3 className="font-semibold text-lg mb-1">{title}</h3>
        <div className="flex items-center text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <span className="rounded-full bg-gray-200 h-6 w-6 flex items-center justify-center text-xs">
              {author.charAt(0).toUpperCase()}
            </span>
            <span>{author}</span>
          </div>
          <span className="mx-2">•</span>
          <span>{time}</span>
          
          <div className="ml-auto flex items-center gap-1">
            <ThumbsUp className="h-4 w-4" />
            <span>{votes}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default QuestionCard;
