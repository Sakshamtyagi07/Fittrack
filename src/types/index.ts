export interface Exercise {
  id: string;
  name: string;
  muscleGroup: MuscleGroup;
  equipment: Equipment;
  instructions: string;
  imageUrl?: string;
}

export interface Workout {
  id: string;
  name: string;
  exercises: WorkoutExercise[];
  date: string;
  duration: number; // in minutes
  notes?: string;
}

export interface WorkoutExercise {
  exerciseId: string;
  sets: Set[];
}

export interface Set {
  reps: number;
  weight: number;
  completed: boolean;
}

export interface UserProfile {
  name: string;
  weight: number;
  height: number;
  age: number;
  gender: 'male' | 'female' | 'other';
  fitnessGoal: FitnessGoal;
}

export enum MuscleGroup {
  Chest = 'chest',
  Back = 'back',
  Shoulders = 'shoulders',
  Arms = 'arms',
  Legs = 'legs',
  Core = 'core',
  FullBody = 'fullBody',
  Cardio = 'cardio'
}

export enum Equipment {
  Barbell = 'barbell',
  Dumbbell = 'dumbbell',
  Kettlebell = 'kettlebell',
  Cable = 'cable',
  Machine = 'machine',
  Bodyweight = 'bodyweight',
  Other = 'other'
}

export enum FitnessGoal {
  LoseWeight = 'loseWeight',
  BuildMuscle = 'buildMuscle',
  Maintain = 'maintain',
  Improve = 'improve'
}

export type DashboardMetric = {
  label: string;
  value: number;
  unit: string;
  change?: number;
  changeType?: 'increase' | 'decrease';
};