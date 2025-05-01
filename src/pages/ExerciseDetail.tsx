import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PageContainer from '../components/layout/PageContainer';
import { Card, CardHeader, CardContent } from '../components/ui/Card';
import Button from '../components/ui/Button';
import { exercises } from '../data/exercises';
import { ArrowLeft, Dumbbell, Target, Info } from 'lucide-react';

const ExerciseDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const exercise = exercises.find(ex => ex.id === id);
  
  if (!exercise) {
    return (
      <PageContainer>
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Exercise Not Found</h2>
          <p className="text-gray-600 mb-8">The exercise you're looking for doesn't exist.</p>
          <Button variant="primary" onClick={() => navigate('/exercises')}>
            Back to Exercises
          </Button>
        </div>
      </PageContainer>
    );
  }
  
  return (
    <PageContainer>
      <div className="mb-6">
        <Button 
          variant="outline" 
          icon={<ArrowLeft className="h-4 w-4" />}
          onClick={() => navigate('/exercises')}
        >
          Back to Exercises
        </Button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader className="bg-blue-50">
              <h1 className="text-2xl font-bold text-gray-900">{exercise.name}</h1>
              <div className="flex mt-2 space-x-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  {exercise.muscleGroup}
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                  {exercise.equipment}
                </span>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="aspect-video overflow-hidden">
                {exercise.imageUrl ? (
                  <img
                    src={exercise.imageUrl}
                    alt={exercise.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                    No image available
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Info className="h-5 w-5 mr-2 text-blue-600" />
                  Instructions
                </h2>
                <p className="text-gray-700 whitespace-pre-line">{exercise.instructions}</p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div>
          <Card className="mb-6">
            <CardHeader className="bg-blue-50 flex items-center">
              <Target className="h-5 w-5 text-blue-600 mr-2" />
              <h2 className="text-xl font-semibold text-gray-900">Muscles Targeted</h2>
            </CardHeader>
            <CardContent className="p-6">
              <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="text-center p-8">
                  <p className="text-gray-500">
                    Muscle visualization would appear here, highlighting the primary muscle groups targeted by this exercise.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="bg-blue-50 flex items-center">
              <Dumbbell className="h-5 w-5 text-blue-600 mr-2" />
              <h2 className="text-xl font-semibold text-gray-900">Similar Exercises</h2>
            </CardHeader>
            <CardContent className="p-0">
              <ul className="divide-y divide-gray-200">
                {exercises
                  .filter(ex => ex.id !== exercise.id && ex.muscleGroup === exercise.muscleGroup)
                  .slice(0, 3)
                  .map(ex => (
                    <li 
                      key={ex.id} 
                      className="p-4 hover:bg-gray-50 cursor-pointer transition-colors"
                      onClick={() => navigate(`/exercises/${ex.id}`)}
                    >
                      <div className="flex items-center">
                        <div className="h-12 w-12 bg-gray-200 rounded overflow-hidden mr-4">
                          {ex.imageUrl && (
                            <img 
                              src={ex.imageUrl} 
                              alt={ex.name} 
                              className="h-full w-full object-cover"
                            />
                          )}
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">{ex.name}</h3>
                          <p className="text-sm text-gray-500">{ex.equipment}</p>
                        </div>
                      </div>
                    </li>
                  ))
                }
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageContainer>
  );
};

export default ExerciseDetail;