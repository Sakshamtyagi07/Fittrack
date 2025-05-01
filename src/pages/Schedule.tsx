import React, { useState } from 'react';
import PageContainer from '../components/layout/PageContainer';
import { Card, CardHeader, CardContent } from '../components/ui/Card';
import Button from '../components/ui/Button';
import { workouts } from '../data/workouts';
import { Plus, ChevronLeft, ChevronRight } from 'lucide-react';

const Schedule: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  
  // Generate calendar data
  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };
  
  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };
  
  const generateCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = getFirstDayOfMonth(year, month);
    
    const days = [];
    
    // Add empty slots for days before the first of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push({ day: 0, hasWorkout: false });
    }
    
    // Add actual days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      // Check if there's a workout on this day
      const dateString = `${year}-${String(month + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
      const hasWorkout = workouts.some(workout => workout.date === dateString);
      
      days.push({ day: i, hasWorkout });
    }
    
    return days;
  };
  
  const calendarDays = generateCalendarDays();
  
  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };
  
  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };
  
  const formatMonthYear = (date: Date) => {
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };
  
  const handleNewSchedule = () => {
    // In a real app, this would open a form to schedule a new workout
    alert('This would open a form to schedule a new workout in a complete application');
  };
  
  return (
    <PageContainer
      title="Workout Schedule"
      subtitle="Plan and view your upcoming workouts"
    >
      <div className="flex justify-between items-center mb-6">
        <Button 
          variant="primary" 
          icon={<Plus className="h-4 w-4" />}
          onClick={handleNewSchedule}
        >
          Schedule Workout
        </Button>
      </div>
      
      <Card>
        <CardHeader className="bg-blue-50 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-900">{formatMonthYear(currentDate)}</h2>
          <div className="flex space-x-2">
            <Button 
              variant="outline" 
              size="sm"
              onClick={handlePrevMonth}
              icon={<ChevronLeft className="h-4 w-4" />}
            >
              Prev
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={handleNextMonth}
              icon={<ChevronRight className="h-4 w-4" />}
            >
              Next
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <div className="grid grid-cols-7 gap-px bg-gray-200">
            {/* Weekday headers */}
            {weekdays.map((day) => (
              <div key={day} className="bg-white p-2 text-center text-sm font-medium text-gray-700">
                {day}
              </div>
            ))}
            
            {/* Calendar days */}
            {calendarDays.map((day, index) => (
              <div 
                key={index} 
                className={`bg-white p-2 min-h-[80px] ${
                  day.day === 0 ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                {day.day > 0 && (
                  <div className="h-full">
                    <div className={`rounded-full w-7 h-7 flex items-center justify-center mb-1 ${
                      day.hasWorkout ? 'bg-blue-100 text-blue-700' : ''
                    }`}>
                      {day.day}
                    </div>
                    {day.hasWorkout && (
                      <div className="text-xs p-1 bg-blue-50 text-blue-700 rounded">
                        Workout scheduled
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Upcoming Workouts</h2>
        
        {workouts.length > 0 ? (
          <div className="space-y-4">
            {workouts
              .filter(workout => new Date(workout.date) >= new Date())
              .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
              .map(workout => (
                <Card key={workout.id} className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-4 flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-gray-900">{workout.name}</h3>
                      <p className="text-sm text-gray-500">{new Date(workout.date).toLocaleDateString()} • {workout.duration} mins</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                  </CardContent>
                </Card>
              ))
            }
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 mb-2">No upcoming workouts</h3>
            <p className="text-gray-600 mb-6">Start planning your fitness routine by scheduling workouts</p>
            <Button 
              variant="primary" 
              icon={<Plus className="h-4 w-4" />}
              onClick={handleNewSchedule}
            >
              Schedule Workout
            </Button>
          </div>
        )}
      </div>
    </PageContainer>
  );
};

export default Schedule;