import { useState } from 'react'
import BodyFront from './BodyFront'
import BodyBack from './BodyBack'
import ExerciseList from './ExerciseList'

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
  ],
  calves: [
    { name: "Standing Calf Raise", sets: 4, reps: "15-20", category: "isolation" },
    { name: "Seated Calf Raise", sets: 3, reps: "15-20", category: "isolation" },
    { name: "Donkey Calf Raise", sets: 3, reps: "12-15", category: "isolation" },
    { name: "Smith Machine Calf Raise", sets: 3, reps: "15-20", category: "isolation" },
    { name: "Single-Leg Calf Raise", sets: 3, reps: "12-15", category: "bodyweight" },
    { name: "Box Jump", sets: 3, reps: "10-12", category: "plyometric" }
  ]
}

const MuscleMap = () => {
  const [selectedMuscle, setSelectedMuscle] = useState(null)
  const [side, setSide] = useState('front')

  const muscles = exerciseData[selectedMuscle] || []
  const muscleNames = Object.keys(exerciseData)

  return (
    <div className="min-h-screen bg-dark pt-24 pb-16 px-6 page-enter">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            <span className="text-primary">Muscle</span> map
          </h1>
          <p className="text-gray-400 max-w-lg mx-auto leading-relaxed">
            Click on a muscle to see exercises. Switch between front and back views.
          </p>
        </div>

        {/* View tabs */}
        <div className="flex justify-center gap-2 mb-8">
          <button
            onClick={() => { setSide('front'); setSelectedMuscle(null) }}
            className={`px-8 py-3 rounded-xl font-semibold text-sm uppercase tracking-wide transition-all ${
              side === 'front'
                ? 'bg-red-600 text-white shadow-lg shadow-red-600/25'
                : 'bg-card text-gray-400 hover:text-white hover:bg-card/80 border border-border'
            }`}
          >
            Front View
          </button>
          <button
            onClick={() => { setSide('back'); setSelectedMuscle(null) }}
            className={`px-8 py-3 rounded-xl font-semibold text-sm uppercase tracking-wide transition-all ${
              side === 'back'
                ? 'bg-red-600 text-white shadow-lg shadow-red-600/25'
                : 'bg-card text-gray-400 hover:text-white hover:bg-card/80 border border-border'
            }`}
          >
            Back View
          </button>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Anatomy SVG */}
          <div className="lg:col-span-5">
            <div className="bg-card rounded-2xl p-6 border border-border/50 sticky top-24">
              <div className="bg-dark/30 rounded-xl p-4">
                {side === 'front' ? (
                  <BodyFront selectedMuscle={selectedMuscle} onSelectMuscle={setSelectedMuscle} />
                ) : (
                  <BodyBack selectedMuscle={selectedMuscle} onSelectMuscle={setSelectedMuscle} />
                )}
              </div>
              <p className="text-center text-gray-500 mt-4 text-sm">
                Tap a muscle group to explore exercises
              </p>

              {/* Muscle legend */}
              <div className="mt-6 pt-4 border-t border-border/50">
                <p className="text-xs text-gray-500 mb-3 uppercase tracking-wider">Muscle Groups</p>
                <div className="flex flex-wrap gap-2">
                  {muscleNames.map((m) => (
                    <button
                      key={m}
                      onClick={() => setSelectedMuscle(selectedMuscle === m ? null : m)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium capitalize transition-all ${
                        selectedMuscle === m
                          ? 'bg-red-600 text-white shadow-md shadow-red-600/30'
                          : 'bg-dark/50 text-gray-400 hover:text-white hover:bg-dark'
                      }`}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Exercise list */}
          <div className="lg:col-span-7">
            <div className="bg-card rounded-2xl p-6 border border-border/50 min-h-[500px]">
              {selectedMuscle ? (
                <ExerciseList muscleName={selectedMuscle} exercises={muscles} />
              ) : (
                <div className="flex items-center justify-center h-96 text-gray-400">
                  <div className="text-center">
                    <svg className="w-16 h-16 mx-auto mb-4 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                    <h3 className="text-lg font-semibold text-white mb-2">Explore Muscles</h3>
                    <p className="text-gray-500 max-w-xs text-sm">
                      Click on any muscle region on the body map or select from the list below.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MuscleMap
