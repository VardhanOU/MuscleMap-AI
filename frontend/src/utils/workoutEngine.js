const exerciseData = {
  chest: [
    { name: "Barbell Bench Press", sets: 4, reps: "8-10", category: "compound" },
    { name: "Incline Dumbbell Press", sets: 3, reps: "10-12", category: "compound" },
    { name: "Cable Flyes", sets: 3, reps: "12-15", category: "isolation" },
    { name: "Push-Ups", sets: 3, reps: "15-20", category: "bodyweight" },
    { name: "Dips", sets: 3, reps: "10-12", category: "compound" },
    { name: "Pec Deck Machine", sets: 3, reps: "12-15", category: "isolation" }
  ],
  back: [
    { name: "Pull-Ups", sets: 4, reps: "8-12", category: "compound" },
    { name: "Barbell Rows", sets: 4, reps: "8-10", category: "compound" },
    { name: "Lat Pulldown", sets: 3, reps: "10-12", category: "isolation" },
    { name: "Seated Cable Row", sets: 3, reps: "10-12", category: "compound" },
    { name: "T-Bar Row", sets: 3, reps: "10-12", category: "compound" },
    { name: "Face Pulls", sets: 3, reps: "12-15", category: "isolation" }
  ],
  shoulders: [
    { name: "Overhead Press", sets: 4, reps: "8-10", category: "compound" },
    { name: "Lateral Raises", sets: 3, reps: "12-15", category: "isolation" },
    { name: "Front Raises", sets: 3, reps: "12-15", category: "isolation" },
    { name: "Reverse Flyes", sets: 3, reps: "12-15", category: "isolation" },
    { name: "Arnold Press", sets: 3, reps: "10-12", category: "compound" },
    { name: "Upright Rows", sets: 3, reps: "10-12", category: "compound" }
  ],
  biceps: [
    { name: "Barbell Curl", sets: 3, reps: "10-12", category: "isolation" },
    { name: "Dumbbell Curl", sets: 3, reps: "10-12", category: "isolation" },
    { name: "Hammer Curl", sets: 3, reps: "10-12", category: "isolation" },
    { name: "Preacher Curl", sets: 3, reps: "10-12", category: "isolation" },
    { name: "Incline Dumbbell Curl", sets: 3, reps: "10-12", category: "isolation" },
    { name: "Cable Curl", sets: 3, reps: "12-15", category: "isolation" }
  ],
  triceps: [
    { name: "Close-Grip Bench Press", sets: 3, reps: "10-12", category: "compound" },
    { name: "Tricep Dips", sets: 3, reps: "10-12", category: "bodyweight" },
    { name: "Overhead Tricep Extension", sets: 3, reps: "10-12", category: "isolation" },
    { name: "Tricep Pushdown", sets: 3, reps: "12-15", category: "isolation" },
    { name: "Skull Crushers", sets: 3, reps: "10-12", category: "isolation" },
    { name: "Diamond Push-Ups", sets: 3, reps: "12-15", category: "bodyweight" }
  ],
  forearms: [
    { name: "Wrist Curl", sets: 3, reps: "12-15", category: "isolation" },
    { name: "Reverse Wrist Curl", sets: 3, reps: "12-15", category: "isolation" },
    { name: "Farmer's Walk", sets: 3, reps: "30-60 sec", category: "compound" },
    { name: "Reverse Barbell Curl", sets: 3, reps: "10-12", category: "isolation" },
    { name: "Wrist Roller", sets: 3, reps: "10-12", category: "isolation" },
    { name: "Plate Pinch Hold", sets: 3, reps: "20-30 sec", category: "isolation" }
  ],
  traps: [
    { name: "Barbell Shrugs", sets: 4, reps: "10-12", category: "isolation" },
    { name: "Dumbbell Shrugs", sets: 3, reps: "12-15", category: "isolation" },
    { name: "Face Pulls", sets: 3, reps: "12-15", category: "isolation" },
    { name: "Upright Rows", sets: 3, reps: "10-12", category: "compound" },
    { name: "Neck Curl", sets: 3, reps: "12-15", category: "isolation" },
    { name: "Cable Shrugs", sets: 3, reps: "12-15", category: "isolation" }
  ],
  quads: [
    { name: "Barbell Squat", sets: 4, reps: "8-10", category: "compound" },
    { name: "Leg Press", sets: 4, reps: "10-12", category: "compound" },
    { name: "Leg Extension", sets: 3, reps: "12-15", category: "isolation" },
    { name: "Bulgarian Split Squat", sets: 3, reps: "10-12", category: "compound" },
    { name: "Walking Lunges", sets: 3, reps: "12-15", category: "compound" },
    { name: "Front Squat", sets: 3, reps: "10-12", category: "compound" }
  ],
  hamstrings: [
    { name: "Romanian Deadlift", sets: 4, reps: "8-10", category: "compound" },
    { name: "Leg Curl", sets: 3, reps: "12-15", category: "isolation" },
    { name: "Good Mornings", sets: 3, reps: "10-12", category: "compound" },
    { name: "Single Leg Deadlift", sets: 3, reps: "10-12", category: "compound" },
    { name: "Nordic Curl", sets: 3, reps: "8-10", category: "bodyweight" },
    { name: "Calf Raises", sets: 4, reps: "15-20", category: "isolation" }
  ],
  abs: [
    { name: "Crunches", sets: 3, reps: "15-20", category: "bodyweight" },
    { name: "Hanging Leg Raises", sets: 3, reps: "12-15", category: "bodyweight" },
    { name: "Plank", sets: 3, reps: "30-60 sec", category: "bodyweight" },
    { name: "Cable Crunch", sets: 3, reps: "12-15", category: "isolation" },
    { name: "Russian Twist", sets: 3, reps: "15-20", category: "bodyweight" },
    { name: "Ab Wheel Rollout", sets: 3, reps: "10-12", category: "bodyweight" }
  ],
  glutes: [
    { name: "Hip Thrust", sets: 4, reps: "10-12", category: "compound" },
    { name: "Glute Bridge", sets: 3, reps: "12-15", category: "bodyweight" },
    { name: "Cable Kickback", sets: 3, reps: "12-15", category: "isolation" },
    { name: "Sumo Deadlift", sets: 3, reps: "10-12", category: "compound" },
    { name: "Step-Ups", sets: 3, reps: "12-15", category: "compound" }
  ]
}

function getExercisesForMuscle(muscle, count) {
  const exercises = exerciseData[muscle] || []
  return exercises.slice(0, count).map(ex => ({
    ...ex,
    muscleGroup: muscle
  }))
}

export function generateWorkout(daysPerWeek, goal, focusMuscle) {
  let split = ''
  const plan = []

  if (daysPerWeek === 3) {
    split = 'Full Body'
    const days = ['Monday', 'Wednesday', 'Friday']
    days.forEach((day, index) => {
      const exercises = []
      const chestEx = getExercisesForMuscle('chest', index % 2 === 0 ? 2 : 1)
      const backEx = getExercisesForMuscle('back', index % 2 === 0 ? 2 : 1)
      const shoulderEx = getExercisesForMuscle('shoulders', 1)
      const quadsEx = getExercisesForMuscle('quads', 1)
      const hamstringsEx = getExercisesForMuscle('hamstrings', 1)
      const absEx = getExercisesForMuscle('abs', 1)

      exercises.push(...chestEx, ...backEx, ...shoulderEx, ...quadsEx, ...hamstringsEx, ...absEx)

      if (focusMuscle !== 'none' && exerciseData[focusMuscle]) {
        const focusEx = getExercisesForMuscle(focusMuscle, 1)
        exercises.push(...focusEx)
      }

      // Limit to maximum 7 exercises
      const finalExercises = exercises.slice(0, 7)

      let notes = ''
      if (goal === 'muscle_gain') {
        notes = 'Rest 60-90 seconds between sets. Focus on progressive overload.'
      } else {
        notes = 'Rest 30-45 seconds between sets. Add 20 min HIIT or 30 min steady state cardio after workout.'
      }

      plan.push({
        day: `Day ${index + 1} - ${day}`,
        focus: 'Full Body',
        exercises: finalExercises,
        notes
      })
    })
  } else if (daysPerWeek === 4) {
    split = 'Upper/Lower'
    const schedule = [
      { day: 'Day 1 - Monday', focus: 'Upper Body' },
      { day: 'Day 2 - Tuesday', focus: 'Lower Body' },
      { day: 'Day 3 - Thursday', focus: 'Upper Body' },
      { day: 'Day 4 - Friday', focus: 'Lower Body' }
    ]

    schedule.forEach((item, index) => {
      const exercises = []
      const isUpper = item.focus === 'Upper Body'

      if (isUpper) {
        const chestCount = index % 2 === 0 ? 2 : 1
        const backCount = index % 2 === 0 ? 2 : 1
        exercises.push(...getExercisesForMuscle('chest', chestCount))
        exercises.push(...getExercisesForMuscle('back', backCount))
        exercises.push(...getExercisesForMuscle('shoulders', 1))
        exercises.push(...getExercisesForMuscle('biceps', 1))
        exercises.push(...getExercisesForMuscle('triceps', 1))
      } else {
        exercises.push(...getExercisesForMuscle('quads', 2))
        exercises.push(...getExercisesForMuscle('hamstrings', 2))
        exercises.push(...getExercisesForMuscle('glutes', 1))
        exercises.push(...getExercisesForMuscle('abs', 1))
      }

      if (focusMuscle !== 'none' && exerciseData[focusMuscle]) {
        const isFocusRelevant = isUpper
          ? ['chest', 'back', 'shoulders', 'biceps', 'triceps'].includes(focusMuscle)
          : ['quads', 'hamstrings', 'glutes', 'abs'].includes(focusMuscle)
        if (isFocusRelevant) {
          const focusEx = getExercisesForMuscle(focusMuscle, 1)
          exercises.push(...focusEx)
        }
      }

      // Limit to maximum 7 exercises
      const finalExercises = exercises.slice(0, 7)

      let notes = ''
      if (goal === 'muscle_gain') {
        notes = 'Rest 60-90 seconds between sets. Focus on progressive overload.'
      } else {
        notes = 'Rest 30-45 seconds between sets. Add 20 min HIIT or 30 min steady state cardio after workout.'
      }

      plan.push({
        ...item,
        exercises: finalExercises,
        notes
      })
    })
  } else if (daysPerWeek === 5) {
    split = 'Push/Pull/Legs/Upper/Lower'
    const schedule = [
      { day: 'Day 1 - Monday', focus: 'Push' },
      { day: 'Day 2 - Tuesday', focus: 'Pull' },
      { day: 'Day 3 - Wednesday', focus: 'Legs' },
      { day: 'Day 4 - Thursday', focus: 'Upper Body' },
      { day: 'Day 5 - Friday', focus: 'Lower Body' }
    ]

    schedule.forEach((item) => {
      const exercises = []

      switch (item.focus) {
        case 'Push':
          exercises.push(...getExercisesForMuscle('chest', 3))
          exercises.push(...getExercisesForMuscle('shoulders', 2))
          exercises.push(...getExercisesForMuscle('triceps', 2))
          break
        case 'Pull':
          exercises.push(...getExercisesForMuscle('back', 3))
          exercises.push(...getExercisesForMuscle('biceps', 2))
          exercises.push(...getExercisesForMuscle('abs', 2))
          break
        case 'Legs':
          exercises.push(...getExercisesForMuscle('quads', 3))
          exercises.push(...getExercisesForMuscle('hamstrings', 2))
          exercises.push(...getExercisesForMuscle('glutes', 2))
          break
        case 'Upper Body':
          exercises.push(...getExercisesForMuscle('chest', 2))
          exercises.push(...getExercisesForMuscle('back', 2))
          exercises.push(...getExercisesForMuscle('shoulders', 1))
          exercises.push(...getExercisesForMuscle('biceps', 1))
          exercises.push(...getExercisesForMuscle('triceps', 1))
          break
        case 'Lower Body':
          exercises.push(...getExercisesForMuscle('quads', 3))
          exercises.push(...getExercisesForMuscle('hamstrings', 2))
          exercises.push(...getExercisesForMuscle('glutes', 1))
          exercises.push(...getExercisesForMuscle('abs', 1))
          break
        default:
          break
      }

      if (focusMuscle !== 'none' && exerciseData[focusMuscle]) {
        const focusMap = {
          'Push': ['chest', 'shoulders', 'triceps'],
          'Pull': ['back', 'biceps'],
          'Legs': ['quads', 'hamstrings', 'glutes'],
          'Upper Body': ['chest', 'back', 'shoulders', 'biceps', 'triceps'],
          'Lower Body': ['quads', 'hamstrings', 'glutes', 'abs']
        }
        if (focusMap[item.focus] && focusMap[item.focus].includes(focusMuscle)) {
          const focusEx = getExercisesForMuscle(focusMuscle, 1)
          exercises.push(...focusEx)
        }
      }

      // Limit to maximum 7 exercises
      const finalExercises = exercises.slice(0, 7)

      let notes = ''
      if (goal === 'muscle_gain') {
        notes = 'Rest 60-90 seconds between sets. Focus on progressive overload.'
      } else {
        notes = 'Rest 30-45 seconds between sets. Add 20 min HIIT or 30 min steady state cardio after workout.'
      }

      plan.push({
        ...item,
        exercises: finalExercises,
        notes
      })
    })
  } else if (daysPerWeek === 6) {
    split = 'Push/Pull/Legs (x2)'
    const schedule = [
      { day: 'Day 1 - Monday', focus: 'Push' },
      { day: 'Day 2 - Tuesday', focus: 'Pull' },
      { day: 'Day 3 - Wednesday', focus: 'Legs' },
      { day: 'Day 4 - Thursday', focus: 'Push' },
      { day: 'Day 5 - Friday', focus: 'Pull' },
      { day: 'Day 6 - Saturday', focus: 'Legs' }
    ]

    schedule.forEach((item, index) => {
      const exercises = []
      const isSecondRound = index >= 3

      switch (item.focus) {
        case 'Push':
          exercises.push(...getExercisesForMuscle('chest', isSecondRound ? 2 : 3))
          exercises.push(...getExercisesForMuscle('shoulders', isSecondRound ? 2 : 2))
          exercises.push(...getExercisesForMuscle('triceps', 2))
          break
        case 'Pull':
          exercises.push(...getExercisesForMuscle('back', isSecondRound ? 3 : 3))
          exercises.push(...getExercisesForMuscle('biceps', isSecondRound ? 2 : 2))
          exercises.push(...getExercisesForMuscle('abs', 2))
          break
        case 'Legs':
          exercises.push(...getExercisesForMuscle('quads', isSecondRound ? 3 : 3))
          exercises.push(...getExercisesForMuscle('hamstrings', isSecondRound ? 2 : 2))
          exercises.push(...getExercisesForMuscle('glutes', 2))
          break
        default:
          break
      }

      if (focusMuscle !== 'none' && exerciseData[focusMuscle]) {
        const focusMap = {
          'Push': ['chest', 'shoulders', 'triceps'],
          'Pull': ['back', 'biceps'],
          'Legs': ['quads', 'hamstrings', 'glutes']
        }
        if (focusMap[item.focus] && focusMap[item.focus].includes(focusMuscle)) {
          const focusEx = getExercisesForMuscle(focusMuscle, 1)
          exercises.push(...focusEx)
        }
      }

      // Limit to maximum 7 exercises
      const finalExercises = exercises.slice(0, 7)

      let notes = ''
      if (goal === 'muscle_gain') {
        notes = 'Rest 60-90 seconds between sets. Focus on progressive overload.'
      } else {
        notes = 'Rest 30-45 seconds between sets. Add 20 min HIIT or 30 min steady state cardio after workout.'
      }

      plan.push({
        ...item,
        exercises: finalExercises,
        notes
      })
    })
  }

  return { split, plan }
}

export default { generateWorkout }
