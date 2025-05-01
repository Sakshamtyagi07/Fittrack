import React, { useState } from 'react';
import PageContainer from '../components/layout/PageContainer';
import MetricCard from '../components/dashboard/MetricCard';
import WorkoutHistory from '../components/dashboard/WorkoutHistory';
import BMICalculator from '../components/calculators/BMICalculator';
import { Card, CardHeader, CardContent } from '../components/ui/Card';
import { DashboardMetric } from '../types';
import { workouts } from '../data/workouts';
import { BarChart, Activity, Calendar, Award } from 'lucide-react';

const Dashboard: React.FC = () => {
  // Sample metrics that could be pulled from user profile/workout history
  const [metrics] = useState<DashboardMetric[]>([
    { 
      label: 'Workouts This Week', 
      value: 3, 
      unit: 'sessions', 
      change: 20, 
      changeType: 'increase' 
    },
    { 
      label: 'Total Weight Lifted', 
      value: 12540, 
      unit: 'kg', 
      change: 15, 
      changeType: 'increase' 
    },
    { 
      label: 'Average Workout Time', 
      value: 58, 
      unit: 'minutes', 
      change: 5, 
      changeType: 'decrease' 
    },
    { 
      label: 'Streak', 
      value: 5, 
      unit: 'days', 
      change: 3, 
      changeType: 'increase' 
    }
  ]);

  return (
    <PageContainer 
      title="Dashboard" 
      subtitle="Track your fitness progress and upcoming workouts"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {metrics.map((metric, index) => (
          <MetricCard key={index} metric={metric} />
        ))}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <Card className="h-full">
            <CardHeader className="bg-blue-50 flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-900">Workout Stats</h2>
              <BarChart className="h-5 w-5 text-blue-600" />
            </CardHeader>
            <CardContent className="p-4">
              <div className="aspect-[16/9] bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="text-center p-8">
                  <Activity size={48} className="mx-auto text-blue-500 mb-4" />
                  <h3 className="text-lg font-medium text-gray-700">Weekly Progress Chart</h3>
                  <p className="text-gray-500 mt-2">
                    Your workout data visualization would appear here, showing progress over time for key metrics.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div>
          <WorkoutHistory workouts={workouts} />
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div>
          <BMICalculator />
        </div>
        
        <div>
          <Card className="h-full">
            <CardHeader className="bg-blue-50 flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-900">Upcoming Workouts</h2>
              <Calendar className="h-5 w-5 text-blue-600" />
            </CardHeader>
            <CardContent className="p-4">
              <div className="text-center py-8 px-4">
                <Calendar size={48} className="mx-auto text-blue-500 mb-4" />
                <h3 className="text-lg font-medium text-gray-700">No upcoming workouts</h3>
                <p className="text-gray-500 mt-2">
                  Schedule your next workout session to see it here.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div>
          <Card className="h-full">
            <CardHeader className="bg-blue-50 flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-900">Achievements</h2>
              <Award className="h-5 w-5 text-blue-600" />
            </CardHeader>
            <CardContent className="p-0">
              <ul className="divide-y divide-gray-200">
                <li className="p-4 flex items-center">
                  <div className="bg-orange-100 text-orange-600 p-2 rounded-full mr-4">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">First Workout</h3>
                    <p className="text-sm text-gray-500">Completed your first workout</p>
                  </div>
                </li>
                <li className="p-4 flex items-center">
                  <div className="bg-blue-100 text-blue-600 p-2 rounded-full mr-4">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">5-Day Streak</h3>
                    <p className="text-sm text-gray-500">Worked out 5 days in a row</p>
                  </div>
                </li>
                <li className="p-4 flex items-center">
                  <div className="bg-green-100 text-green-600 p-2 rounded-full mr-4">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">10,000 kg Club</h3>
                    <p className="text-sm text-gray-500">Lifted over 10,000 kg total</p>
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

export default Dashboard;