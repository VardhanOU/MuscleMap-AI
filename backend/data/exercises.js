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
};

module.exports = exerciseData;
