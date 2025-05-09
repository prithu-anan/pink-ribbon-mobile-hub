
import React from 'react';
import { FileText, MessageSquare, Heart, Hospital } from 'lucide-react';
import FeatureCard from '@/components/home/FeatureCard';
import BottomNavigation from '@/components/layout/BottomNavigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-pink-50/50 pb-16">
      {/* Header */}
      <div className="bg-gradient-to-b from-pink-500 to-pink-400 text-white p-6 pt-10 pb-10 rounded-b-3xl shadow-md">
        <h1 className="text-3xl font-bold mb-2">PinkLifeLine</h1>
        <p className="text-pink-100">Early detection and community support</p>
      </div>
      
      {/* Feature Grid */}
      <div className="max-w-md mx-auto p-4 -mt-6">
        <div className="grid grid-cols-1 gap-4 mb-6">
          <FeatureCard
            title="Self-Test Guide"
            description="Step-by-step visual guide for breast self-examination"
            icon={<FileText className="text-pink-700" />}
            to="/self-test"
            color="bg-white shadow-sm border border-pink-100"
          />
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <FeatureCard
            title="Community Forum"
            description="Ask questions and share experiences"
            icon={<MessageSquare className="text-purple-500" />}
            to="/forum"
            color="bg-purple-100"
          />
          
          <FeatureCard
            title="Support Groups"
            description="Connect with others on similar journeys"
            icon={<Heart className="text-pink-600" />}
            to="/support"
            color="bg-pink-100"
          />
          
          <FeatureCard
            title="Medical Resources"
            description="Find care providers and treatment information"
            icon={<Hospital className="text-blue-500" />}
            to="/resources"
            color="bg-blue-100"
          />
          
          <FeatureCard
            title="Latest News"
            description="Updates on research and treatments"
            icon={<FileText className="text-green-500" />}
            to="/news"
            color="bg-green-100"
          />
        </div>
        
        <div className="mt-8 p-4 bg-white rounded-lg shadow-sm border border-pink-100">
          <h2 className="text-lg font-semibold mb-2">Did You Know?</h2>
          <p className="text-sm text-gray-700">
            Regular breast self-examinations can help detect cancer in its early stages, 
            when it's most treatable. The recommended frequency is once a month.
          </p>
        </div>
      </div>
      
      <BottomNavigation />
    </div>
  );
};

export default Index;
