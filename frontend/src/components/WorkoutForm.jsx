import { useState } from 'react'

const WorkoutForm = ({ onGenerate }) => {
  const [daysPerWeek, setDaysPerWeek] = useState(3)
  const [goal, setGoal] = useState('muscle_gain')
  const [focusMuscle, setFocusMuscle] = useState('none')

  const handleSubmit = (e) => {
    e.preventDefault()
    onGenerate({ daysPerWeek, goal, focusMuscle })
  }

  const splitPreview = {
    3: 'Full Body (Mon/Wed/Fri)',
    4: 'Upper/Lower Split',
    5: 'PPL + Upper/Lower',
    6: 'PPL x2 (6 days)'
  }

  return (
    <form onSubmit={handleSubmit} className="bg-card rounded-lg p-6 border border-border">
      <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        Configure Your Plan
      </h3>

      <div className="space-y-6">
        {/* Days per week */}
        <div>
          <label className="block text-white font-medium mb-3">
            Training Days: <span className="text-primary font-bold">{daysPerWeek}</span> days/week
          </label>
          <div className="grid grid-cols-4 gap-2">
            {[3, 4, 5, 6].map((days) => (
              <button
                key={days}
                type="button"
                onClick={() => setDaysPerWeek(days)}
                className={`py-3 rounded-lg font-semibold transition-all ${
                  daysPerWeek === days
                    ? 'bg-primary text-white'
                    : 'bg-dark text-gray-400 hover:text-white hover:bg-card border border-border'
                }`}
              >
                {days}
              </button>
            ))}
          </div>
          <p className="text-gray-500 text-sm mt-2">
            Split: {splitPreview[daysPerWeek]}
          </p>
        </div>

        {/* Goal */}
        <div>
          <label className="block text-white font-medium mb-3">Your Goal</label>
          <div className="grid grid-cols-2 gap-3">
            {[
              { value: 'muscle_gain', label: 'Muscle Gain', desc: 'Build size and strength' },
              { value: 'fat_loss', label: 'Fat Loss', desc: 'Burn fat and get lean' }
            ].map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => setGoal(option.value)}
                className={`p-4 rounded-lg text-left transition-all border ${
                  goal === option.value
                    ? 'bg-primary/10 border-primary text-white'
                    : 'bg-dark border-border text-gray-400 hover:border-card'
                }`}
              >
                <div className="font-semibold">{option.label}</div>
                <div className="text-xs text-gray-500">{option.desc}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Focus Muscle */}
        <div>
          <label className="block text-white font-medium mb-3">
            Focus Muscle <span className="text-gray-500 font-normal">(optional)</span>
          </label>
          <select
            value={focusMuscle}
            onChange={(e) => setFocusMuscle(e.target.value)}
            className="w-full bg-dark text-white border border-border rounded-lg px-4 py-3 focus:border-primary transition-colors appearance-none cursor-pointer"
          >
            <option value="none">No focus - balanced plan</option>
            <option value="chest">Chest</option>
            <option value="back">Back</option>
            <option value="shoulders">Shoulders</option>
            <option value="biceps">Biceps</option>
            <option value="triceps">Triceps</option>
            <option value="forearms">Forearms</option>
            <option value="traps">Traps and neck</option>
            <option value="quads">Quads</option>
            <option value="hamstrings">Hamstrings</option>
            <option value="abs">Abs</option>
            <option value="glutes">Glutes</option>
          </select>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="w-full bg-primary hover:bg-opacity-90 text-white font-semibold py-4 rounded-lg transition-all flex items-center justify-center gap-2 text-lg"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Generate Plan
        </button>
      </div>
    </form>
  )
}

export default WorkoutForm
