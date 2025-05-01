import { Exercise, MuscleGroup, Equipment } from '../types';

export const exercises: Exercise[] = [
  {
    id: '1',
    name: 'Barbell Bench Press',
    muscleGroup: MuscleGroup.Chest,
    equipment: Equipment.Barbell,
    instructions: 'Lie on a bench, grip the barbell with hands slightly wider than shoulder-width apart, lower the bar to your chest, then press it back up.',
    imageUrl: 'https://images.pexels.com/photos/2261485/pexels-photo-2261485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '2',
    name: 'Pull-up',
    muscleGroup: MuscleGroup.Back,
    equipment: Equipment.Bodyweight,
    instructions: 'Hang from a bar with palms facing away, pull yourself up until your chin is over the bar, then lower back down.',
    imageUrl: 'https://images.pexels.com/photos/2294363/pexels-photo-2294363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '3',
    name: 'Barbell Squat',
    muscleGroup: MuscleGroup.Legs,
    equipment: Equipment.Barbell,
    instructions: 'Place a barbell on your upper back, bend your knees and hips to lower down, then push through your heels to stand back up.',
    imageUrl: 'https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '4',
    name: 'Shoulder Press',
    muscleGroup: MuscleGroup.Shoulders,
    equipment: Equipment.Dumbbell,
    instructions: 'Sit or stand with a dumbbell in each hand at shoulder height, press weights overhead until arms are extended, then lower back down.',
    imageUrl: 'https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '5',
    name: 'Plank',
    muscleGroup: MuscleGroup.Core,
    equipment: Equipment.Bodyweight,
    instructions: 'Get in a push-up position but resting on your forearms, keep your body in a straight line from head to heels, and hold the position.',
    imageUrl: 'https://images.pexels.com/photos/6456301/pexels-photo-6456301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '6',
    name: 'Bicep Curl',
    muscleGroup: MuscleGroup.Arms,
    equipment: Equipment.Dumbbell,
    instructions: 'Stand with a dumbbell in each hand, palms facing forward, curl the weights toward your shoulders, then lower back down.',
    imageUrl: 'https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '7',
    name: 'Deadlift',
    muscleGroup: MuscleGroup.Back,
    equipment: Equipment.Barbell,
    instructions: 'Stand with feet hip-width apart, bend at the hips and knees to grip the bar, then stand up by driving through the heels.',
    imageUrl: 'https://images.pexels.com/photos/6550862/pexels-photo-6550862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '8',
    name: 'Treadmill Run',
    muscleGroup: MuscleGroup.Cardio,
    equipment: Equipment.Machine,
    instructions: 'Start with a warm-up walk, gradually increase speed to a jog or run, maintain for desired duration, then cool down.',
    imageUrl: 'https://images.pexels.com/photos/3757954/pexels-photo-3757954.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];