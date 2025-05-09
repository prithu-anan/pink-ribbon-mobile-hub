
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const AskQuestion = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [tags, setTags] = React.useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (title.trim() === '') {
      toast({
        title: "Error",
        description: "Please enter a question title",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Question submitted",
      description: "Your question has been posted successfully",
    });
    
    // In a real app, we would submit the question to an API
    navigate('/forum');
  };
  
  return (
    <div className="min-h-screen bg-pink-50/30">
      <Header title="Ask Question" showBackButton backTo="/forum" />
      
      <div className="container max-w-md mx-auto px-4 py-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Question Title
            </label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter your question here"
              className="w-full"
              maxLength={255}
            />
            <p className="text-xs text-gray-500 text-right">
              Max characters: {title.length}/255
            </p>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="tags" className="block text-sm font-medium text-gray-700">
              Tags
            </label>
            <Input
              id="tags"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              placeholder="Add tags to your question (comma separated)"
              className="w-full"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Provide details about your question..."
              className="w-full min-h-[200px]"
            />
          </div>
          
          <p className="text-sm text-gray-600">
            Use the vault to upload any file and refer in text with url.
          </p>
          
          <div className="flex justify-end">
            <Button 
              type="submit" 
              className="bg-pink-500 hover:bg-pink-600"
            >
              Ask Question
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AskQuestion;
