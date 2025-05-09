
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import BottomNavigation from '@/components/layout/BottomNavigation';
import { Button } from '@/components/ui/button';
import { ThumbsUp, ThumbsDown, MoreVertical, MessageSquare } from 'lucide-react';

interface Answer {
  id: string;
  author: string;
  content: string;
  time: string;
  votes: number;
  replies?: Answer[];
}

interface Question {
  id: string;
  title: string;
  author: string;
  content: string;
  time: string;
  votes: number;
  tags: string[];
  answers: Answer[];
}

const mockQuestions: Record<string, Question> = {
  '1': {
    id: '1',
    title: 'How to perform a proper self-examination?',
    author: 'Jane Doe',
    content: 'I recently became aware of the importance of regular breast self-exams, but I\'m not sure if I\'m doing it correctly. Can someone please share the proper technique or resources?',
    time: '2 hours ago',
    votes: 15,
    tags: ['Self-Exam', 'Education'],
    answers: [
      {
        id: 'a1',
        author: 'Dr. Smith',
        content: 'It\'s great that you\'re taking this step! The best technique is to use the pads of your fingers and move in a circular pattern from the outside to the center. Also check for visual changes in a mirror with your arms at different positions. The CDC has excellent resources on their website.',
        time: '1 hour ago',
        votes: 12
      },
      {
        id: 'a2',
        author: 'Cancer Survivor',
        content: 'I found video tutorials really helpful when learning. Check the PinkLifeLine self-test section for step-by-step guidance. Remember to do it at the same time each month!',
        time: '30 minutes ago',
        votes: 8,
        replies: [
          {
            id: 'r1',
            author: 'Jane Doe',
            content: 'Thank you so much for the suggestion! I\'ll definitely check out those videos.',
            time: '15 minutes ago',
            votes: 3
          }
        ]
      }
    ]
  }
};

const ForumQuestion = () => {
  const { id } = useParams<{ id: string }>();
  
  // In a real app, you would fetch the question data based on the ID
  const question = mockQuestions[id || '1'];
  
  if (!question) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Question not found</p>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-pink-50/30 pb-16">
      <Header title="Question Thread" showBackButton backTo="/forum" />
      
      <div className="container max-w-md mx-auto px-4">
        {/* Question */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-4 border border-pink-100">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-2 mb-3">
              <div className="rounded-full bg-gray-200 h-8 w-8 flex items-center justify-center text-sm">
                {question.author.charAt(0).toUpperCase()}
              </div>
              <div>
                <span className="font-medium">{question.author}</span>
                <p className="text-xs text-gray-500">{question.time}</p>
              </div>
            </div>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </div>
          
          <h2 className="text-xl font-semibold mb-2">{question.title}</h2>
          <p className="text-gray-700 mb-4">{question.content}</p>
          
          <div className="flex flex-wrap gap-2 mb-3">
            {question.tags.map(tag => (
              <span 
                key={tag} 
                className="bg-pink-50 text-pink-700 text-xs px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex items-center justify-between text-sm text-gray-500 pt-2 border-t">
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="sm" className="h-8 text-gray-500">
                <ThumbsUp className="mr-1 h-4 w-4" />
                {question.votes}
              </Button>
              <Button variant="ghost" size="sm" className="h-8 text-gray-500">
                <ThumbsDown className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex items-center">
              <MessageSquare className="h-4 w-4 mr-1" />
              <span>{question.answers.length} answers</span>
            </div>
          </div>
        </div>
        
        {/* Answers */}
        <h3 className="font-semibold text-lg mb-3">Answers</h3>
        
        {question.answers.map((answer) => (
          <div key={answer.id} className="bg-white rounded-lg shadow-sm p-4 mb-4 border border-pink-100">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-2 mb-3">
                <div className="rounded-full bg-gray-200 h-8 w-8 flex items-center justify-center text-sm">
                  {answer.author.charAt(0).toUpperCase()}
                </div>
                <div>
                  <span className="font-medium">{answer.author}</span>
                  <p className="text-xs text-gray-500">{answer.time}</p>
                </div>
              </div>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </div>
            
            <p className="text-gray-700 mb-3">{answer.content}</p>
            
            <div className="flex items-center text-sm text-gray-500 pt-2 border-t">
              <Button variant="ghost" size="sm" className="h-8 text-gray-500">
                <ThumbsUp className="mr-1 h-4 w-4" />
                {answer.votes}
              </Button>
              <Button variant="ghost" size="sm" className="h-8 text-gray-500">
                <ThumbsDown className="h-4 w-4" />
              </Button>
            </div>
            
            {/* Replies */}
            {answer.replies && answer.replies.length > 0 && (
              <div className="ml-6 mt-3 pt-3 border-t border-gray-100">
                {answer.replies.map((reply) => (
                  <div key={reply.id} className="mb-3">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="rounded-full bg-gray-200 h-6 w-6 flex items-center justify-center text-xs">
                        {reply.author.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <span className="font-medium text-sm">{reply.author}</span>
                        <span className="text-xs text-gray-500 ml-2">{reply.time}</span>
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-700 ml-8">{reply.content}</p>
                    
                    <div className="flex items-center ml-8 mt-1 text-xs text-gray-500">
                      <Button variant="ghost" size="sm" className="h-6 text-gray-500 p-0 mr-2">
                        <ThumbsUp className="mr-1 h-3 w-3" />
                        {reply.votes}
                      </Button>
                      <Button variant="ghost" size="sm" className="h-6 text-gray-500 p-0">
                        <ThumbsDown className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
        
        <div className="my-6 flex justify-center">
          <Button className="bg-pink-500 hover:bg-pink-600">
            Write an Answer
          </Button>
        </div>
      </div>
      
      <BottomNavigation />
    </div>
  );
};

export default ForumQuestion;
