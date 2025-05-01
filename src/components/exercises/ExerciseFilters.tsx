import React, { useState } from 'react';
import { MuscleGroup, Equipment } from '../../types';
import { Search, Filter, X } from 'lucide-react';
import Button from '../ui/Button';

interface ExerciseFiltersProps {
  onFilterChange: (filters: {
    search: string;
    muscleGroups: MuscleGroup[];
    equipment: Equipment[];
  }) => void;
}

const ExerciseFilters: React.FC<ExerciseFiltersProps> = ({ onFilterChange }) => {
  const [search, setSearch] = useState('');
  const [selectedMuscleGroups, setSelectedMuscleGroups] = useState<MuscleGroup[]>([]);
  const [selectedEquipment, setSelectedEquipment] = useState<Equipment[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    onFilterChange({
      search: e.target.value,
      muscleGroups: selectedMuscleGroups,
      equipment: selectedEquipment,
    });
  };
  
  const toggleMuscleGroup = (muscleGroup: MuscleGroup) => {
    let updatedGroups;
    if (selectedMuscleGroups.includes(muscleGroup)) {
      updatedGroups = selectedMuscleGroups.filter(mg => mg !== muscleGroup);
    } else {
      updatedGroups = [...selectedMuscleGroups, muscleGroup];
    }
    
    setSelectedMuscleGroups(updatedGroups);
    onFilterChange({
      search,
      muscleGroups: updatedGroups,
      equipment: selectedEquipment,
    });
  };
  
  const toggleEquipment = (equipment: Equipment) => {
    let updatedEquipment;
    if (selectedEquipment.includes(equipment)) {
      updatedEquipment = selectedEquipment.filter(eq => eq !== equipment);
    } else {
      updatedEquipment = [...selectedEquipment, equipment];
    }
    
    setSelectedEquipment(updatedEquipment);
    onFilterChange({
      search,
      muscleGroups: selectedMuscleGroups,
      equipment: updatedEquipment,
    });
  };
  
  const clearFilters = () => {
    setSearch('');
    setSelectedMuscleGroups([]);
    setSelectedEquipment([]);
    onFilterChange({
      search: '',
      muscleGroups: [],
      equipment: [],
    });
  };
  
  const muscleGroups = Object.values(MuscleGroup);
  const equipmentTypes = Object.values(Equipment);
  
  const hasActiveFilters = search || selectedMuscleGroups.length > 0 || selectedEquipment.length > 0;
  
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
      <div className="flex items-center">
        <div className="relative flex-grow">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search exercises..."
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out sm:text-sm"
            value={search}
            onChange={handleSearchChange}
          />
        </div>
        <Button
          variant={showFilters ? 'primary' : 'outline'}
          className="ml-3"
          icon={<Filter className="h-4 w-4" />}
          onClick={() => setShowFilters(!showFilters)}
        >
          Filters
        </Button>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            className="ml-2 text-red-500 hover:text-red-700"
            icon={<X className="h-4 w-4" />}
            onClick={clearFilters}
          >
            Clear
          </Button>
        )}
      </div>
      
      {showFilters && (
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-medium text-gray-700 mb-2">Muscle Groups</h3>
            <div className="flex flex-wrap gap-2">
              {muscleGroups.map((group) => (
                <button
                  key={group}
                  className={`px-3 py-1 rounded-full text-sm ${
                    selectedMuscleGroups.includes(group as MuscleGroup)
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                  onClick={() => toggleMuscleGroup(group as MuscleGroup)}
                >
                  {group}
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-700 mb-2">Equipment</h3>
            <div className="flex flex-wrap gap-2">
              {equipmentTypes.map((eq) => (
                <button
                  key={eq}
                  className={`px-3 py-1 rounded-full text-sm ${
                    selectedEquipment.includes(eq as Equipment)
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                  onClick={() => toggleEquipment(eq as Equipment)}
                >
                  {eq}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExerciseFilters;