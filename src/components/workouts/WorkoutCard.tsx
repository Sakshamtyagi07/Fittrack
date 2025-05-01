import React from 'react';
import { Calendar, Clock } from 'lucide-react';
import { Card, CardContent } from '../ui/Card';
import { Workout } from '../../types';
import { exercises } from '../../data/exercises';
import Button from '../ui/Button';

interface WorkoutCardProps {
  workout: Workout;
  onClick?: () => void;
}

const WorkoutCard: React.FC<WorkoutCardProps> = ({ workout, onClick }) => {
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  
  // Count total sets and total reps
  const totalSets = workout.exercises.reduce((acc, ex) => acc + ex.sets.length, 0);
  const totalReps = workout.exercises.reduce(
    (acc, ex) => acc + ex.sets.reduce((setAcc, set) => setAcc + set.reps, 0), 0
  );
  
  // Get exercise names for display
  const exerciseNames = workout.exercises.map(ex => {
    const exercise = exercises.find(e => e.id === ex.exerciseId);
    return exercise ? exercise.name : 'Unknown';
  });
  
  return (
    <Card className="h-full transition-all duration-300 hover:shadow-lg cursor-pointer" onClick={onClick}>
      <CardContent className="p-5">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold text-gray-900">{workout.name}</h3>
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
            {workout.exercises.length} exercises
          </span>
        </div>
        
        <div className="mt-3 flex items-center text-sm text-gray-500">
          <Calendar className="h-4 w-4 mr-1" />
          <span>{formatDate(workout.date)}</span>
          <span className="mx-2">•</span>
          <Clock className="h-4 w-4 mr-1" />
          <span>{workout.duration} mins</span>
        </div>
        
        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="bg-blue-50 p-2 rounded">
            <div className="text-xs text-gray-500">Total Sets</div>
            <div className="text-lg font-semibold text-blue-700">{totalSets}</div>
          </div>
          <div className="bg-blue-50 p-2 rounded">
            <div className="text-xs text-gray-500">Total Reps</div>
            <div className="text-lg font-semibold text-blue-700">{totalReps}</div>
          </div>
        </div>
        
        <div className="mt-4">
          <h4 className="text-sm font-medium text-gray-700 mb-1">Exercises:</h4>
          <p className="text-sm text-gray-600 line-clamp-2">
            {exerciseNames.join(', ')}
          </p>
        </div>
        
        {workout.notes && (
          <div className="mt-3 pt-3 border-t border-gray-200">
            <p className="text-sm text-gray-600 italic line-clamp-2">
              "{workout.notes}"
            </p>
          </div>
        )}
        
        <div className="mt-4 flex justify-end">
          <Button size="sm" variant="ghost">
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default WorkoutCard;