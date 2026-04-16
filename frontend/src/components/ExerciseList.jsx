import ExerciseCard from './ExerciseCard'

const ExerciseList = ({ muscleName, exercises }) => {
  if (!muscleName) {
    return (
      <div className="text-center text-gray-400 py-16">
        <div className="text-7xl mb-6">🏋️</div>
        <h3 className="text-lg font-semibold text-white mb-2">Explore Exercises</h3>
        <p className="text-gray-500">Select a muscle to see available exercises</p>
      </div>
    )
  }

  const compoundCount = exercises.filter(e => e.category === 'compound').length
  const isolationCount = exercises.filter(e => e.category === 'isolation').length

  return (
    <div>
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-border/50">
        <div>
          <h3 className="text-xl font-bold text-white capitalize flex items-center gap-2">
            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
            {muscleName}
          </h3>
          <p className="text-gray-500 text-sm mt-1">Exercises targeting this muscle group</p>
        </div>
        <div className="flex gap-3">
          <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs font-medium rounded-full">
            {compoundCount} Compound
          </span>
          <span className="px-3 py-1 bg-purple-500/10 text-purple-400 text-xs font-medium rounded-full">
            {isolationCount} Isolation
          </span>
        </div>
      </div>
      <div className="space-y-3">
        {exercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </div>
    </div>
  )
}

export default ExerciseList
