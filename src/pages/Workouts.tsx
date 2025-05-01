import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageContainer from '../components/layout/PageContainer';
import WorkoutCard from '../components/workouts/WorkoutCard';
import Button from '../components/ui/Button';
import { workouts } from '../data/workouts';
import { Plus } from 'lucide-react';

const Workouts: React.FC = () => {
  const navigate = useNavigate();
  
  const handleWorkoutClick = (workoutId: string) => {
    navigate(`/workouts/${workoutId}`);
  };
  
  const handleNewWorkout = () => {
    // In a real app, this would navigate to a new workout form or open a modal
    alert('This would open a new workout form in a complete application');
  };
  
  return (
    <PageContainer
      title="Your Workouts"
      subtitle="View and manage your workout history"
    >
      <div className="flex justify-between items-center mb-6">
        <div className="flex space-x-2">
          <Button variant="primary" icon={<Plus className="h-4 w-4" />} onClick={handleNewWorkout}>
            New Workout
          </Button>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500">Total: {workouts.length} workouts</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {workouts.map((workout) => (
          <WorkoutCard
            key={workout.id}
            workout={workout}
            onClick={() => handleWorkoutClick(workout.id)}
          />
        ))}
      </div>
      
      {workouts.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-lg font-medium text-gray-900 mb-2">No workouts yet</h3>
          <p className="text-gray-600 mb-6">Start tracking your fitness journey by creating your first workout</p>
          <Button variant="primary" icon={<Plus className="h-4 w-4" />} onClick={handleNewWorkout}>
            Create Workout
          </Button>
        </div>
      )}
    </PageContainer>
  );
};

export default Workouts;