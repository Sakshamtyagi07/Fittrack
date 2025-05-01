import React from 'react';
import { Exercise } from '../../types';
import { Card, CardContent } from '../ui/Card';
import Button from '../ui/Button';
import { ChevronRight } from 'lucide-react';

interface ExerciseCardProps {
  exercise: Exercise;
  onClick?: () => void;
}

const ExerciseCard: React.FC<ExerciseCardProps> = ({ exercise, onClick }) => {
  return (
    <Card className="h-full transition-all duration-300 hover:shadow-lg overflow-hidden group">
      <div className="aspect-video overflow-hidden bg-gray-200">
        {exercise.imageUrl ? (
          <img
            src={exercise.imageUrl}
            alt={exercise.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            No image available
          </div>
        )}
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold text-gray-900">{exercise.name}</h3>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            {exercise.muscleGroup}
          </span>
        </div>
        <p className="mt-2 text-gray-600 text-sm line-clamp-2">{exercise.instructions}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-sm text-gray-500">{exercise.equipment}</span>
          <Button
            size="sm"
            variant="ghost"
            onClick={onClick}
            className="text-blue-600 hover:text-blue-700"
            icon={<ChevronRight size={16} />}
          >
            Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ExerciseCard;