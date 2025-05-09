
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  title: string;
  showBackButton?: boolean;
  backTo?: string;
}

const Header: React.FC<HeaderProps> = ({ 
  title, 
  showBackButton = false, 
  backTo = "/" 
}) => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container flex items-center justify-between h-14 px-4">
        <div className="flex items-center gap-2">
          {showBackButton && (
            <Link to={backTo}>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <ChevronLeft className="h-5 w-5" />
              </Button>
            </Link>
          )}
          <h1 className="text-lg font-semibold">{title}</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
