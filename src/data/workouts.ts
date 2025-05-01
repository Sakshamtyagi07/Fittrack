import { Workout } from '../types';

export const workouts: Workout[] = [
  {
    id: '1',
    name: 'Full Body Workout',
    exercises: [
      {
        exerciseId: '1',
        sets: [
          { reps: 10, weight: 135, completed: true },
          { reps: 8, weight: 145, completed: true },
          { reps: 6, weight: 155, completed: true }
        ]
      },
      {
        exerciseId: '3',
        sets: [
          { reps: 12, weight: 185, completed: true },
          { reps: 10, weight: 205, completed: true },
          { reps: 8, weight: 225, completed: false }
        ]
      },
      {
        exerciseId: '6',
        sets: [
          { reps: 12, weight: 25, completed: true },
          { reps: 12, weight: 25, completed: true },
          { reps: 10, weight: 30, completed: true }
        ]
      }
    ],
    date: '2025-06-15',
    duration: 65,
    notes: 'Felt strong today. Increased bench press weight.'
  },
  {
    id: '2',
    name: 'Upper Body Focus',
    exercises: [
      {
        exerciseId: '1',
        sets: [
          { reps: 10, weight: 135, completed: true },
          { reps: 8, weight: 145, completed: true },
          { reps: 6, weight: 155, completed: true }
        ]
      },
      {
        exerciseId: '2',
        sets: [
          { reps: 8, weight: 0, completed: true },
          { reps: 6, weight: 0, completed: true },
          { reps: 6, weight: 0, completed: true }
        ]
      },
      {
        exerciseId: '4',
        sets: [
          { reps: 10, weight: 40, completed: true },
          { reps: 10, weight: 40, completed: true },
          { reps: 8, weight: 45, completed: true }
        ]
      }
    ],
    date: '2025-06-17',
    duration: 55,
    notes: 'Great pump in the shoulders today.'
  }
];