
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import BottomNavigation from '@/components/layout/BottomNavigation';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Bell, Settings, User, Shield, LogOut, Calendar, FileText } from 'lucide-react';

const Profile = () => {
  const { toast } = useToast();
  
  const handleLogout = () => {
    toast({
      title: "Logged out",
      description: "You have been successfully logged out",
    });
    // In a real app, this would handle the logout process
  };

  return (
    <div className="min-h-screen bg-pink-50/30 pb-16">
      <Header title="Profile" />
      
      <div className="container max-w-md mx-auto px-4">
        <div className="flex flex-col items-center py-6">
          <div className="h-24 w-24 rounded-full bg-pink-200 flex items-center justify-center mb-4">
            <User className="h-12 w-12 text-pink-600" />
          </div>
          <h2 className="text-xl font-semibold">Jane Doe</h2>
          <p className="text-gray-600">jane.doe@example.com</p>
          
          <Link to="/profile/edit" className="mt-4">
            <Button variant="outline" className="border-pink-200 hover:bg-pink-100">
              Edit Profile
            </Button>
          </Link>
        </div>
        
        <div className="mt-6 bg-white rounded-lg shadow-sm">
          <div className="p-4 border-b border-gray-100">
            <h3 className="font-medium text-gray-800">Account</h3>
          </div>
          
          <div className="divide-y divide-gray-100">
            <Link to="/profile/notifications" className="flex items-center justify-between p-4 hover:bg-gray-50">
              <div className="flex items-center gap-3">
                <Bell className="h-5 w-5 text-pink-600" />
                <span>Notifications</span>
              </div>
              <span className="text-xs bg-pink-100 text-pink-800 px-2 py-1 rounded-full">3</span>
            </Link>
            
            <Link to="/profile/reminders" className="flex items-center justify-between p-4 hover:bg-gray-50">
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-pink-600" />
                <span>Self-Test Reminders</span>
              </div>
              <span className="text-xs text-gray-500">Monthly</span>
            </Link>
            
            <Link to="/profile/history" className="flex items-center justify-between p-4 hover:bg-gray-50">
              <div className="flex items-center gap-3">
                <FileText className="h-5 w-5 text-pink-600" />
                <span>Test History</span>
              </div>
              <span className="text-xs text-gray-500">3 Records</span>
            </Link>
          </div>
        </div>
        
        <div className="mt-4 bg-white rounded-lg shadow-sm">
          <div className="p-4 border-b border-gray-100">
            <h3 className="font-medium text-gray-800">Settings</h3>
          </div>
          
          <div className="divide-y divide-gray-100">
            <Link to="/settings/appearance" className="flex items-center gap-3 p-4 hover:bg-gray-50">
              <Settings className="h-5 w-5 text-gray-600" />
              <span>App Settings</span>
            </Link>
            
            <Link to="/settings/privacy" className="flex items-center gap-3 p-4 hover:bg-gray-50">
              <Shield className="h-5 w-5 text-gray-600" />
              <span>Privacy & Data</span>
            </Link>
          </div>
        </div>
        
        <div className="mt-4 mb-8">
          <Button 
            variant="ghost" 
            className="w-full text-gray-700 hover:text-red-600 hover:bg-red-50" 
            onClick={handleLogout}
          >
            <LogOut className="h-5 w-5 mr-2" />
            Logout
          </Button>
        </div>
      </div>
      
      <BottomNavigation />
    </div>
  );
};

export default Profile;
