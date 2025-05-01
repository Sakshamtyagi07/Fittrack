import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PageContainer from '../components/layout/PageContainer';
import { Card, CardHeader, CardContent, CardFooter } from '../components/ui/Card';
import Button from '../components/ui/Button';
import { workouts } from '../data/workouts';
import { exercises } from '../data/exercises';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  Edit, 
  Trash, 
  CheckCircle,
  XCircle
} from 'lucide-react';

const WorkoutDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const workout = workouts.find(w => w.id === id);
  
  if (!workout) {
    return (
      <PageContainer>
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Workout Not Found</h2>
          <p className="text-gray-600 mb-8">The workout you're looking for doesn't exist.</p>
          <Button variant="primary" onClick={() => navigate('/workouts')}>
            Back to Workouts
          </Button>
        </div>
      </PageContainer>
    );
  }
  
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long',
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  
  const getExercise = (exerciseId: string) => {
    return exercises.find(ex => ex.id === exerciseId);
  };
  
  const handleEdit = () => {
    // In a real app, this would navigate to an edit form
    alert('This would open the workout edit form in a complete application');
  };
  
  const handleDelete = () => {
    // In a real app, this would show a confirmation dialog and delete
    alert('This would delete the workout in a complete application');
    navigate('/workouts');
  };
  
  return (
    <PageContainer>
      <div className="mb-6">
        <Button 
          variant="outline" 
          icon={<ArrowLeft className="h-4 w-4" />}
          onClick={() => navigate('/workouts')}
        >
          Back to Workouts
        </Button>
      </div>
      
      <Card className="mb-8">
        <CardHeader className="bg-blue-50">
          <div className="flex justify-between items-start">
            <h1 className="text-2xl font-bold text-gray-900">{workout.name}</h1>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
              {workout.exercises.length} exercises
            </span>
          </div>
          
          <div className="flex items-center text-gray-500 mt-2">
            <Calendar className="h-4 w-4 mr-1" />
            <span className="mr-4">{formatDate(workout.date)}</span>
            <Clock className="h-4 w-4 mr-1" />
            <span>{workout.duration} minutes</span>
          </div>
        </CardHeader>
        
        <CardContent className="p-6">
          {workout.notes && (
            <div className="mb-6 p-4 bg-gray-50 rounded-md border border-gray-200">
              <h3 className="font-medium text-gray-700 mb-2">Notes:</h3>
              <p className="text-gray-600 italic">{workout.notes}</p>
            </div>
          )}
          
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Exercises</h2>
          
          <div className="space-y-6">
            {workout.exercises.map((workoutExercise) => {
              const exercise = getExercise(workoutExercise.exerciseId);
              
              if (!exercise) return null;
              
              return (
                <div key={workoutExercise.exerciseId} className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-gray-50 p-4 border-b border-gray-200">
                    <div className="flex items-center">
                      {exercise.imageUrl && (
                        <div className="h-12 w-12 bg-gray-200 rounded overflow-hidden mr-4">
                          <img 
                            src={exercise.imageUrl} 
                            alt={exercise.name} 
                            className="h-full w-full object-cover"
                          />
                        </div>
                      )}
                      <div>
                        <h3 className="font-medium text-gray-900">{exercise.name}</h3>
                        <div className="flex space-x-2 mt-1">
                          <span className="text-xs text-gray-500">{exercise.muscleGroup}</span>
                          <span className="text-xs text-gray-500">•</span>
                          <span className="text-xs text-gray-500">{exercise.equipment}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead>
                          <tr>
                            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Set</th>
                            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Weight</th>
                            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reps</th>
                            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Completed</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {workoutExercise.sets.map((set, index) => (
                            <tr key={index} className={set.completed ? '' : 'bg-gray-50'}>
                              <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
                              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">{set.weight} kg</td>
                              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">{set.reps}</td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                {set.completed ? (
                                  <CheckCircle className="h-5 w-5 text-green-500" />
                                ) : (
                                  <XCircle className="h-5 w-5 text-red-500" />
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
        
        <CardFooter className="bg-gray-50 flex justify-between">
          <Button 
            variant="outline" 
            icon={<Edit className="h-4 w-4" />}
            onClick={handleEdit}
          >
            Edit Workout
          </Button>
          <Button 
            variant="outline" 
            className="text-red-600 hover:text-red-700 border-red-200 hover:border-red-300 hover:bg-red-50"
            icon={<Trash className="h-4 w-4" />}
            onClick={handleDelete}
          >
            Delete
          </Button>
        </CardFooter>
      </Card>
    </PageContainer>
  );
};

export default WorkoutDetail;