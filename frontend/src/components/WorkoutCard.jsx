const WorkoutCard = ({ day }) => {
  return (
    <div className="workout-card p-5">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-bold text-white">{day.day}</h3>
        </div>
        <span className="px-3 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full">
          {day.focus}
        </span>
      </div>

      {/* Exercise table */}
      <div className="overflow-x-auto rounded-lg bg-dark/50">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-4 text-gray-500 text-xs font-semibold uppercase tracking-wider">Exercise</th>
              <th className="text-center py-3 px-4 text-gray-500 text-xs font-semibold uppercase tracking-wider">Sets</th>
              <th className="text-center py-3 px-4 text-gray-500 text-xs font-semibold uppercase tracking-wider">Reps</th>
              <th className="text-left py-3 px-4 text-gray-500 text-xs font-semibold uppercase tracking-wider hidden sm:table-cell">Type</th>
            </tr>
          </thead>
          <tbody>
            {day.exercises.map((exercise, index) => (
              <tr
                key={index}
                className={`border-b border-border/50 hover:bg-white/[0.03] transition-colors ${
                  index === day.exercises.length - 1 ? 'border-b-0' : ''
                }`}
              >
                <td className="py-3 px-4 text-white text-sm font-medium">{exercise.name}</td>
                <td className="py-3 px-4 text-gray-300 text-sm text-center">{exercise.sets}</td>
                <td className="py-3 px-4 text-gray-300 text-sm text-center">{exercise.reps}</td>
                <td className="py-3 px-4 hidden sm:table-cell">
                  <span className={`inline-block px-2 py-0.5 text-xs rounded-full capitalize ${
                    exercise.category === 'compound' ? 'bg-stone-500/10 text-stone-300' :
                    exercise.category === 'isolation' ? 'bg-stone-500/10 text-stone-400' :
                    exercise.category === 'bodyweight' ? 'bg-stone-500/10 text-stone-500' :
                    'bg-stone-500/10 text-stone-500'
                  }`}>
                    {exercise.category}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Notes */}
      {day.notes && (
        <div className="mt-4 p-4 bg-dark/50 rounded-lg border border-border">
          <div className="flex items-start gap-2">
            <span className="text-primary flex-shrink-0 font-bold">Tip:</span>
            <p className="text-gray-400 text-sm">{day.notes}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default WorkoutCard
