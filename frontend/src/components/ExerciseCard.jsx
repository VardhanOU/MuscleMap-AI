const ExerciseCard = ({ exercise }) => {
  const categoryColors = {
    compound: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    isolation: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    bodyweight: 'bg-green-500/10 text-green-400 border-green-500/20',
    plyometric: 'bg-orange-500/10 text-orange-400 border-orange-500/20'
  }

  return (
    <a 
      href={`https://www.google.com/search?q=${encodeURIComponent(exercise.name + " exercise")}`}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-dark/30 rounded-xl p-4 border border-border/30 group hover:border-red-500/30 hover:bg-dark/50 transition-all duration-200 cursor-pointer"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <h4 className="text-white font-medium group-hover:text-red-400 transition-colors truncate">
            {exercise.name}
          </h4>
        </div>
        <span className={`px-2.5 py-1 text-xs font-medium rounded-full border capitalize flex-shrink-0 ${
          categoryColors[exercise.category] || 'bg-gray-500/10 text-gray-400 border-gray-500/20'
        }`}>
          {exercise.category}
        </span>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-red-500/10 text-red-400 text-sm font-medium rounded-lg">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          {exercise.sets} sets × {exercise.reps}
        </span>
        <svg className="w-4 h-4 text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </div>
    </a>
  )
}

export default ExerciseCard
