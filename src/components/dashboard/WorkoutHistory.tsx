import React from 'react';
import { Calendar, Clock } from 'lucide-react';
import { Card, CardHeader, CardContent } from '../ui/Card';
import { Workout } from '../../types';
import { exercises } from '../../data/exercises';

interface WorkoutHistoryProps {
  workouts: Workout[];
}

const WorkoutHistory: React.FC<WorkoutHistoryProps> = ({ workouts }) => {
  // Sort workouts by date (most recent first)
  const sortedWorkouts = [...workouts].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  
  const getExerciseName = (exerciseId: string) => {
    const exercise = exercises.find(ex => ex.id === exerciseId);
    return exercise ? exercise.name : 'Unknown exercise';
  };
  
  return (
    <Card className="h-full">
      <CardHeader className="bg-blue-50">
        <h2 className="text-xl font-semibold text-gray-900">Recent Workouts</h2>
      </CardHeader>
      <CardContent className="p-0 divide-y divide-gray-200">
        {sortedWorkouts.length === 0 ? (
          <div className="p-6 text-center text-gray-500">
            No workout history yet.
          </div>
        ) : (
          sortedWorkouts.map((workout) => (
            <div key={workout.id} className="p-4 hover:bg-gray-50 transition-colors">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-gray-900">{workout.name}</h3>
                  <div className="mt-1 flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{formatDate(workout.date)}</span>
                    <span className="mx-2">•</span>
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{workout.duration} mins</span>
                  </div>
                </div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  {workout.exercises.length} exercises
                </span>
              </div>
              <div className="mt-2">
                <p className="text-sm text-gray-600 line-clamp-1">
                  {workout.exercises.map(ex => getExerciseName(ex.exerciseId)).join(', ')}
                </p>
              </div>
            </div>
          ))
        )}
      </CardContent>
    </Card>
  );
};

export default WorkoutHistory;