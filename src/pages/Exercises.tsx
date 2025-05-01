import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PageContainer from '../components/layout/PageContainer';
import ExerciseCard from '../components/exercises/ExerciseCard';
import ExerciseFilters from '../components/exercises/ExerciseFilters';
import { Exercise, MuscleGroup, Equipment } from '../types';
import { exercises } from '../data/exercises';

const Exercises: React.FC = () => {
  const [filteredExercises, setFilteredExercises] = useState<Exercise[]>([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    // Initialize with all exercises
    setFilteredExercises(exercises);
  }, []);
  
  const handleFilterChange = (filters: {
    search: string;
    muscleGroups: MuscleGroup[];
    equipment: Equipment[];
  }) => {
    let result = [...exercises];
    
    // Filter by search term
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      result = result.filter(exercise => 
        exercise.name.toLowerCase().includes(searchTerm) ||
        exercise.instructions.toLowerCase().includes(searchTerm)
      );
    }
    
    // Filter by muscle groups
    if (filters.muscleGroups.length > 0) {
      result = result.filter(exercise => 
        filters.muscleGroups.includes(exercise.muscleGroup)
      );
    }
    
    // Filter by equipment
    if (filters.equipment.length > 0) {
      result = result.filter(exercise => 
        filters.equipment.includes(exercise.equipment)
      );
    }
    
    setFilteredExercises(result);
  };
  
  const handleExerciseClick = (exerciseId: string) => {
    navigate(`/exercises/${exerciseId}`);
  };
  
  return (
    <PageContainer 
      title="Exercise Library" 
      subtitle="Browse and discover exercises for your workouts"
    >
      <ExerciseFilters onFilterChange={handleFilterChange} />
      
      {filteredExercises.length === 0 ? (
        <div className="text-center py-12">
          <h3 className="text-lg font-medium text-gray-900 mb-2">No exercises match your filters</h3>
          <p className="text-gray-600">Try adjusting your search terms or filters</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredExercises.map((exercise) => (
            <ExerciseCard 
              key={exercise.id} 
              exercise={exercise} 
              onClick={() => handleExerciseClick(exercise.id)}
            />
          ))}
        </div>
      )}
    </PageContainer>
  );
};

export default Exercises;