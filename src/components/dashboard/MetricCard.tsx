import React from 'react';
import { ArrowUpCircle, ArrowDownCircle } from 'lucide-react';
import { Card, CardContent } from '../ui/Card';
import { DashboardMetric } from '../../types';

interface MetricCardProps {
  metric: DashboardMetric;
  className?: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ metric, className = '' }) => {
  const { label, value, unit, change, changeType } = metric;
  
  return (
    <Card className={`transition-transform duration-300 hover:transform hover:scale-105 ${className}`}>
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-medium text-gray-500">{label}</h3>
          {change !== undefined && (
            <div className={`flex items-center text-sm ${
              changeType === 'increase' 
                ? 'text-green-500' 
                : changeType === 'decrease' 
                  ? 'text-red-500' 
                  : 'text-gray-500'
            }`}>
              {changeType === 'increase' ? (
                <ArrowUpCircle className="h-4 w-4 mr-1" />
              ) : (
                <ArrowDownCircle className="h-4 w-4 mr-1" />
              )}
              {Math.abs(change)}%
            </div>
          )}
        </div>
        <div className="mt-4 flex items-baseline">
          <span className="text-3xl font-bold text-gray-900">{value}</span>
          <span className="ml-2 text-sm text-gray-500">{unit}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default MetricCard;