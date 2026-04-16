import { useState } from 'react'
import { generateWorkout } from '../utils/workoutEngine'
import api from '../utils/api'
import WorkoutForm from '../components/WorkoutForm'
import WorkoutCard from '../components/WorkoutCard'

const Generator = () => {
  const [generatedPlan, setGeneratedPlan] = useState(null)
  const [planName, setPlanName] = useState('')
  const [saveStatus, setSaveStatus] = useState(null)
  const [saveMessage, setSaveMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [planParams, setPlanParams] = useState(null)

  const handleGenerate = ({ daysPerWeek, goal, focusMuscle }) => {
    const plan = generateWorkout(daysPerWeek, goal, focusMuscle)
    setGeneratedPlan(plan)
    setPlanParams({ daysPerWeek, goal, focusMuscle })
    setSaveStatus(null)
    setSaveMessage('')
  }

  const handleSavePlan = async () => {
    if (!planName.trim()) {
      setSaveStatus('error')
      setSaveMessage('Please enter a plan name')
      return
    }

    if (!generatedPlan || !planParams) {
      setSaveStatus('error')
      setSaveMessage('Generate a plan first')
      return
    }

    setLoading(true)
    try {
      const response = await api.post('/workouts', {
        name: planName,
        goal: planParams.goal,
        daysPerWeek: planParams.daysPerWeek,
        focusMuscle: planParams.focusMuscle,
        split: generatedPlan.split,
        plan: generatedPlan.plan
      })

      if (response.data.success) {
        setSaveStatus('success')
        setSaveMessage('Plan saved. You can find it in your saved plans.')
        setPlanName('')
      }
    } catch (error) {
      setSaveStatus('error')
      setSaveMessage(error.response?.data?.message || 'Failed to save plan. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const totalExercises = generatedPlan
    ? generatedPlan.plan.reduce((sum, day) => sum + day.exercises.length, 0)
    : 0

  return (
    <div className="min-h-screen bg-dark pt-24 pb-16 px-6 page-enter">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Workout <span className="text-primary">generator</span>
          </h1>
          <p className="text-gray-400 max-w-lg mx-auto leading-relaxed">
            Pick your training days, goal, and a focus muscle. We will build a plan for you.
          </p>
        </div>

        {/* Form */}
        <div className="max-w-xl mx-auto mb-12">
          <WorkoutForm onGenerate={handleGenerate} />
        </div>

        {/* Generated plan */}
        {generatedPlan && (
          <div>
            {/* Plan summary */}
            <div className="bg-card rounded-lg p-6 border border-border mb-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-1">
                    {generatedPlan.split}
                  </h2>
                  <div className="flex flex-wrap gap-3 text-sm text-gray-400">
                    <span>{planParams.daysPerWeek} days/week</span>
                    <span>•</span>
                    <span>{totalExercises} total exercises</span>
                    <span>•</span>
                    <span>{planParams.focusMuscle !== 'none' && `Focus: ${planParams.focusMuscle}`}</span>
                    {planParams.goal === 'muscle_gain' && <span>Muscle Gain</span>}
                    {planParams.goal === 'fat_loss' && <span>Fat Loss</span>}
                  </div>
                </div>
              </div>

              {/* Save section */}
              <div className="bg-dark/50 rounded-lg p-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="text"
                    value={planName}
                    onChange={(e) => setPlanName(e.target.value)}
                    placeholder="Name your plan"
                    className="flex-1 bg-dark text-white border border-border rounded-lg px-4 py-3 focus:border-primary transition-colors"
                  />
                  <button
                    onClick={handleSavePlan}
                    disabled={loading}
                    className="px-8 py-3 bg-primary hover:bg-opacity-90 text-white font-semibold rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Saving...
                      </span>
                    ) : 'Save Plan'}
                  </button>
                </div>
                {saveStatus && (
                  <div className={`mt-3 text-sm ${
                    saveStatus === 'success' ? 'text-stone-400' : 'text-red-400'
                  }`}>
                    {saveMessage}
                  </div>
                )}
              </div>
            </div>

            {/* Plan days */}
            <div className="grid grid-cols-1 gap-6">
              {generatedPlan.plan.map((day, index) => (
                <div key={index}>
                  <WorkoutCard day={day} />
                </div>
              ))}
            </div>
          </div>
        )}

        {!generatedPlan && (
          <div className="text-center py-16">
            <h3 className="text-xl font-semibold text-white mb-3">Ready to make a plan?</h3>
            <p className="text-gray-400 max-w-md mx-auto leading-relaxed">
              Fill out the form above and we will build you a workout plan.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Generator
