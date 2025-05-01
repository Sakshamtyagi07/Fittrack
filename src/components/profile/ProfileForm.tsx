import React, { useState } from 'react';
import { UserProfile, FitnessGoal } from '../../types';
import Button from '../ui/Button';
import { Card, CardHeader, CardContent, CardFooter } from '../ui/Card';
import { Save } from 'lucide-react';

interface ProfileFormProps {
  initialProfile?: UserProfile;
  onSave: (profile: UserProfile) => void;
}

const defaultProfile: UserProfile = {
  name: '',
  weight: 70,
  height: 170,
  age: 30,
  gender: 'male',
  fitnessGoal: FitnessGoal.BuildMuscle,
};

const ProfileForm: React.FC<ProfileFormProps> = ({ 
  initialProfile = defaultProfile,
  onSave,
}) => {
  const [profile, setProfile] = useState<UserProfile>(initialProfile);
  const [isLoading, setIsLoading] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setProfile(prev => ({
      ...prev,
      [name]: name === 'weight' || name === 'height' || name === 'age' 
        ? Number(value) 
        : value,
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      onSave(profile);
      setIsLoading(false);
    }, 800);
  };
  
  return (
    <Card className="overflow-hidden">
      <CardHeader className="bg-blue-50">
        <h2 className="text-xl font-semibold text-gray-900">Your Profile</h2>
        <p className="text-sm text-gray-600 mt-1">
          Personal information and fitness goals
        </p>
      </CardHeader>
      
      <form onSubmit={handleSubmit}>
        <CardContent className="grid gap-6 p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={profile.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
                Age
              </label>
              <input
                type="number"
                id="age"
                name="age"
                required
                min="16"
                max="120"
                value={profile.age}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                value={profile.gender}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="weight" className="block text-sm font-medium text-gray-700 mb-1">
                Weight (kg)
              </label>
              <input
                type="number"
                id="weight"
                name="weight"
                required
                min="30"
                max="300"
                step="0.1"
                value={profile.weight}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              />
            </div>
            
            <div>
              <label htmlFor="height" className="block text-sm font-medium text-gray-700 mb-1">
                Height (cm)
              </label>
              <input
                type="number"
                id="height"
                name="height"
                required
                min="120"
                max="250"
                value={profile.height}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="fitnessGoal" className="block text-sm font-medium text-gray-700 mb-1">
              Fitness Goal
            </label>
            <select
              id="fitnessGoal"
              name="fitnessGoal"
              value={profile.fitnessGoal}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            >
              <option value={FitnessGoal.LoseWeight}>Lose Weight</option>
              <option value={FitnessGoal.BuildMuscle}>Build Muscle</option>
              <option value={FitnessGoal.Maintain}>Maintain Current Fitness</option>
              <option value={FitnessGoal.Improve}>Improve Overall Fitness</option>
            </select>
          </div>
        </CardContent>
        
        <CardFooter className="bg-gray-50 px-6 py-4">
          <Button 
            type="submit" 
            variant="primary" 
            isLoading={isLoading}
            icon={<Save className="h-4 w-4" />}
          >
            Save Profile
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default ProfileForm;