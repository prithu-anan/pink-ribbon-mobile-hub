
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Search, X, Filter, Calendar as CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface FilterOptions {
  tags?: string[];
  dateRange?: Date | undefined;
  sortBy?: string;
  sortOrder?: 'ascending' | 'descending';
}

interface ForumFilterProps {
  onFilter: (options: FilterOptions) => void;
}

const ForumFilter: React.FC<ForumFilterProps> = ({ onFilter }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState<FilterOptions>({
    sortBy: 'time',
    sortOrder: 'descending',
  });
  const [date, setDate] = useState<Date>();
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleSearch = () => {
    console.log('Searching:', searchQuery);
    // Handle search logic here
  };

  const resetFilter = () => {
    setOptions({
      sortBy: 'time',
      sortOrder: 'descending',
    });
    setDate(undefined);
    setSearchQuery('');
    onFilter({
      sortBy: 'time',
      sortOrder: 'descending',
    });
  };
  
  const applyFilter = () => {
    onFilter({
      ...options,
      dateRange: date,
    });
  };
  
  return (
    <div className="py-2 space-y-3">
      <div className="flex gap-2">
        <div className="relative flex-grow">
          <Input
            placeholder="Search titles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 pr-4 py-2 rounded-md"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        </div>
        <Button onClick={handleSearch} variant="default" className="bg-pink-600 hover:bg-pink-700">
          Search
        </Button>
        <Button 
          onClick={() => setIsOpen(!isOpen)} 
          variant="outline" 
          className="h-10 w-10 p-0"
        >
          <Filter className="h-4 w-4" />
        </Button>
      </div>
      
      {isOpen && (
        <div className="bg-white border border-gray-200 p-4 rounded-md shadow-sm space-y-4">
          <h3 className="font-medium text-sm text-gray-700 mb-2">Filter Options</h3>
          
          <div className="space-y-3">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Date</label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Sort By</label>
                <Select 
                  value={options.sortBy}
                  onValueChange={(value) => setOptions({...options, sortBy: value})}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Sort By" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="time">Time</SelectItem>
                    <SelectItem value="vote">Vote</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm text-gray-600 mb-1">Order</label>
                <Select 
                  value={options.sortOrder}
                  onValueChange={(value) => setOptions({
                    ...options, 
                    sortOrder: value as 'ascending' | 'descending'
                  })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Order" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ascending">Ascending</SelectItem>
                    <SelectItem value="descending">Descending</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="pt-2 flex gap-2 justify-end">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={resetFilter}
                className="text-gray-600"
              >
                <X className="mr-1 h-4 w-4" />
                Reset
              </Button>
              <Button 
                variant="default" 
                size="sm" 
                onClick={applyFilter}
                className="bg-pink-600 hover:bg-pink-700"
              >
                Apply Filter
              </Button>
            </div>
          </div>
        </div>
      )}
      
      <div className="flex flex-wrap gap-2">
        <h3 className="text-sm font-medium text-orange-600">Trending Topics:</h3>
        <div className="flex flex-wrap gap-1">
          <Badge variant="outline" className="bg-pink-50 text-pink-800 hover:bg-pink-100">Cancer</Badge>
          <Badge variant="outline" className="bg-pink-50 text-pink-800 hover:bg-pink-100">Breast Cancer</Badge>
          <Badge variant="outline" className="bg-pink-50 text-pink-800 hover:bg-pink-100">Health</Badge>
          <Badge variant="outline" className="bg-pink-50 text-pink-800 hover:bg-pink-100">Recently Happened</Badge>
          <Badge variant="outline" className="bg-pink-50 text-pink-800 hover:bg-pink-100">Popular</Badge>
        </div>
      </div>
    </div>
  );
};

export default ForumFilter;
