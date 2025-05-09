
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, MessageSquare, User, FileText } from 'lucide-react';
import { cn } from '@/lib/utils';

const BottomNavigation: React.FC = () => {
  const location = useLocation();
  
  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Forum', path: '/forum', icon: MessageSquare },
    { name: 'Self-Test', path: '/self-test', icon: FileText },
    { name: 'Profile', path: '/profile', icon: User },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-[0_-1px_3px_rgba(0,0,0,0.1)] border-t border-pink-100">
      <div className="flex justify-around">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;
          
          return (
            <Link 
              key={item.name}
              to={item.path}
              className={cn(
                "flex flex-col items-center justify-center py-2 px-4",
                isActive 
                  ? "text-pink-600" 
                  : "text-gray-500 hover:text-pink-400"
              )}
            >
              <Icon className="h-5 w-5" />
              <span className="text-xs mt-1">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNavigation;
