import React, { useState } from 'react';
import PageContainer from '../components/layout/PageContainer';
import ProfileForm from '../components/profile/ProfileForm';
import { UserProfile } from '../types';
import { Card, CardHeader, CardContent } from '../components/ui/Card';
import { Activity, TrendingUp, Award } from 'lucide-react';

// Sample initial profile
const initialProfile: UserProfile = {
  name: 'John Doe',
  weight: 75,
  height: 180,
  age: 32,
  gender: 'male',
  fitnessGoal: 'buildMuscle'
};

const Profile: React.FC = () => {
  const [profile, setProfile] = useState<UserProfile>(initialProfile);
  const [showSuccess, setShowSuccess] = useState(false);
  
  const handleSaveProfile = (updatedProfile: UserProfile) => {
    setProfile(updatedProfile);
    setShowSuccess(true);
    
    // Hide success message after 3 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };
  
  return (
    <PageContainer
      title="Your Profile"
      subtitle="Manage your personal information and fitness goals"
    >
      {showSuccess && (
        <div className="mb-6 p-4 bg-green-100 border border-green-200 text-green-800 rounded-md flex items-center">
          <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          Profile successfully updated!
        </div>
      )}
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <ProfileForm 
            initialProfile={profile} 
            onSave={handleSaveProfile} 
          />
        </div>
        
        <div className="space-y-6">
          <Card>
            <CardHeader className="bg-blue-50 flex items-center">
              <Activity className="h-5 w-5 text-blue-600 mr-2" />
              <h2 className="text-xl font-semibold text-gray-900">Fitness Stats</h2>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-500">BMI (Body Mass Index)</div>
                  <div className="flex items-baseline mt-1">
                    <div className="text-2xl font-bold text-gray-900">
                      {(profile.weight / ((profile.height / 100) ** 2)).toFixed(1)}
                    </div>
                    <div className="ml-2 text-sm text-gray-500">kg/m²</div>
                  </div>
                </div>
                
                <div>
                  <div className="text-sm text-gray-500">Workout Frequency</div>
                  <div className="flex items-baseline mt-1">
                    <div className="text-2xl font-bold text-gray-900">3</div>
                    <div className="ml-2 text-sm text-gray-500">sessions/week</div>
                  </div>
                </div>
                
                <div>
                  <div className="text-sm text-gray-500">Average Workout Duration</div>
                  <div className="flex items-baseline mt-1">
                    <div className="text-2xl font-bold text-gray-900">55</div>
                    <div className="ml-2 text-sm text-gray-500">minutes</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="bg-blue-50 flex items-center">
              <TrendingUp className="h-5 w-5 text-blue-600 mr-2" />
              <h2 className="text-xl font-semibold text-gray-900">Progress</h2>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">Strength</span>
                    <span className="text-sm text-gray-500">75%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">Endurance</span>
                    <span className="text-sm text-gray-500">60%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">Consistency</span>
                    <span className="text-sm text-gray-500">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-orange-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="bg-blue-50 flex items-center">
              <Award className="h-5 w-5 text-blue-600 mr-2" />
              <h2 className="text-xl font-semibold text-gray-900">Top Achievements</h2>
            </CardHeader>
            <CardContent className="p-0">
              <ul className="divide-y divide-gray-200">
                <li className="p-4 flex items-center">
                  <div className="bg-yellow-100 text-yellow-600 p-2 rounded-full mr-4">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Dedication Master</h3>
                    <p className="text-xs text-gray-500">Completed 30 workouts</p>
                  </div>
                </li>
                <li className="p-4 flex items-center">
                  <div className="bg-blue-100 text-blue-600 p-2 rounded-full mr-4">
                    <TrendingUp className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Strength Milestone</h3>
                    <p className="text-xs text-gray-500">Increased max weight by 20%</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageContainer>
  );
};

export default Profile;