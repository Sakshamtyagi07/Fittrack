import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardContent, CardFooter } from '../ui/Card';
import Button from '../ui/Button';

interface BMIRange {
  category: string;
  range: string;
  color: string;
}

const BMIRanges: BMIRange[] = [
  { category: 'Underweight', range: 'Less than 18.5', color: 'text-blue-500' },
  { category: 'Normal weight', range: '18.5 - 24.9', color: 'text-green-500' },
  { category: 'Overweight', range: '25 - 29.9', color: 'text-yellow-500' },
  { category: 'Obesity', range: '30 or greater', color: 'text-red-500' },
];

const BMICalculator: React.FC = () => {
  const [weight, setWeight] = useState<number>(70);
  const [height, setHeight] = useState<number>(170);
  const [bmi, setBMI] = useState<number | null>(null);
  const [category, setCategory] = useState<string>('');
  
  useEffect(() => {
    calculateBMI();
  }, [weight, height]);
  
  const calculateBMI = () => {
    if (weight > 0 && height > 0) {
      const heightInMeters = height / 100;
      const calculatedBMI = weight / (heightInMeters * heightInMeters);
      setBMI(parseFloat(calculatedBMI.toFixed(1)));
      
      // Determine BMI category
      if (calculatedBMI < 18.5) {
        setCategory('Underweight');
      } else if (calculatedBMI >= 18.5 && calculatedBMI < 25) {
        setCategory('Normal weight');
      } else if (calculatedBMI >= 25 && calculatedBMI < 30) {
        setCategory('Overweight');
      } else {
        setCategory('Obesity');
      }
    } else {
      setBMI(null);
      setCategory('');
    }
  };
  
  const getCategoryColor = () => {
    const categoryInfo = BMIRanges.find(item => item.category === category);
    return categoryInfo ? categoryInfo.color : 'text-gray-700';
  };
  
  const resetValues = () => {
    setWeight(70);
    setHeight(170);
  };
  
  return (
    <Card className="overflow-hidden">
      <CardHeader className="bg-blue-50">
        <h2 className="text-xl font-semibold text-gray-900">BMI Calculator</h2>
        <p className="text-sm text-gray-600 mt-1">
          Body Mass Index is a measure of body fat based on height and weight.
        </p>
      </CardHeader>
      
      <CardContent className="py-6">
        <div className="space-y-6">
          <div>
            <label htmlFor="weight" className="block text-sm font-medium text-gray-700 mb-1">
              Weight (kg): {weight} kg
            </label>
            <input
              type="range"
              id="weight"
              min="30"
              max="150"
              step="0.5"
              value={weight}
              onChange={(e) => setWeight(parseFloat(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>30 kg</span>
              <span>150 kg</span>
            </div>
          </div>
          
          <div>
            <label htmlFor="height" className="block text-sm font-medium text-gray-700 mb-1">
              Height (cm): {height} cm
            </label>
            <input
              type="range"
              id="height"
              min="120"
              max="220"
              step="0.5"
              value={height}
              onChange={(e) => setHeight(parseFloat(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>120 cm</span>
              <span>220 cm</span>
            </div>
          </div>
          
          {bmi !== null && (
            <div className="mt-6 text-center p-4 bg-gray-50 rounded-lg">
              <h3 className="text-gray-700 font-medium">Your BMI:</h3>
              <div className="mt-2 text-3xl font-bold mb-2">{bmi}</div>
              <p className={`font-medium ${getCategoryColor()}`}>{category}</p>
            </div>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="bg-gray-50 flex justify-between">
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-2">BMI Categories:</h4>
          <ul className="text-sm space-y-1">
            {BMIRanges.map((range, index) => (
              <li key={index} className="flex items-center">
                <span className={`font-medium ${range.color}`}>{range.category}:</span>
                <span className="ml-1 text-gray-600">{range.range}</span>
              </li>
            ))}
          </ul>
        </div>
        <Button variant="outline" onClick={resetValues}>
          Reset
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BMICalculator;