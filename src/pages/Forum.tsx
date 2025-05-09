import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import ForumFilter from '@/components/forum/ForumFilter';
import QuestionCard from '@/components/forum/QuestionCard';
import BottomNavigation from '@/components/layout/BottomNavigation';
import { Button } from '@/components/ui/button';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationEllipsis } from '@/components/ui/pagination';
import { Plus } from 'lucide-react';

interface Question {
  id: string;
  title: string;
  author: string;
  time: string;
  votes: number;
}

const mockQuestions: Question[] = [
  {
    id: '1',
    title: 'How to perform a proper self-examination?',
    author: 'Jane Doe',
    time: '2 hours ago',
    votes: 15
  },
  {
    id: '2',
    title: 'What are the early symptoms I should look for?',
    author: 'Sarah Smith',
    time: '5 hours ago',
    votes: 23
  },
  {
    id: '3',
    title: 'Post-surgery recovery tips?',
    author: 'Lisa Johnson',
    time: '1 day ago',
    votes: 42
  },
  {
    id: '4',
    title: 'Support groups in Los Angeles area?',
    author: 'Maria Garcia',
    time: '2 days ago',
    votes: 8
  }
];

const Forum = () => {
  const [filteredQuestions, setFilteredQuestions] = useState<Question[]>(mockQuestions);
  
  const handleFilter = (options: any) => {
    console.log('Filter options:', options);
    // In a real app, this would filter the questions based on the options
    // For now, we'll just keep the mock data
  };
  
  return (
    <div className="min-h-screen bg-pink-50/30 pb-16">
      <Header title="Question Threads" />
      
      <div className="container max-w-md mx-auto px-4">
        <ForumFilter onFilter={handleFilter} />
        
        <div className="mb-4">
          {filteredQuestions.map(question => (
            <QuestionCard
              key={question.id}
              id={question.id}
              title={question.title}
              author={question.author}
              time={question.time}
              votes={question.votes}
            />
          ))}
        </div>
        
        <div className="flex justify-center mt-6">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationLink href="#" aria-label="Go to first page">
                  «
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" aria-label="Go to previous page">
                  ‹
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" aria-label="Go to next page">
                  ›
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" aria-label="Go to last page">
                  »
                </PaginationLink>
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
      
      <div className="fixed right-4 bottom-20">
        <Link to="/forum/ask">
          <Button className="rounded-full h-14 w-14 bg-pink-500 hover:bg-pink-600 shadow-md">
            <Plus size={24} />
          </Button>
        </Link>
      </div>
      
      <BottomNavigation />
    </div>
  );
};

export default Forum;
