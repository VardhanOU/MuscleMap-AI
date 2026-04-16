import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import api from '../utils/api'
import WorkoutCard from '../components/WorkoutCard'
import LoadingSpinner from '../components/LoadingSpinner'

const Dashboard = () => {
  const { user } = useAuth()
  const [recentPlans, setRecentPlans] = useState([])
  const [loading, setLoading] = useState(true)
  const [stats, setStats] = useState({ total: 0, lastDate: 'N/A', topGoal: 'N/A', totalExercises: 0 })

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await api.get('/workouts')
        if (response.data.success) {
          const workouts = response.data.data.workouts
          setRecentPlans(workouts.slice(0, 3))

          // Calculate stats
          const total = workouts.length
          const lastDate = total > 0 ? new Date(workouts[0].createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'N/A'

          const goalCounts = workouts.reduce((acc, plan) => {
            acc[plan.goal] = (acc[plan.goal] || 0) + 1
            return acc
          }, {})
          const topGoal = Object.keys(goalCounts).length > 0
            ? Object.entries(goalCounts).sort((a, b) => b[1] - a[1])[0][0]
            : 'N/A'

          const totalExercises = workouts.reduce((sum, plan) => {
            return sum + plan.plan.reduce((daySum, day) => daySum + day.exercises.length, 0)
          }, 0)

          setStats({ total, lastDate, topGoal, totalExercises })
        }
      } catch (error) {
        console.error('Failed to fetch plans:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchPlans()
  }, [])

  const goalLabels = { muscle_gain: 'Muscle Gain', fat_loss: 'Fat Loss' }

  const quickLinks = [
    { to: '/generator', title: 'Make a new plan', desc: 'Set up your workout preferences and generate a plan' },
    { to: '/saved-plans', title: 'See saved plans', desc: 'Look at your past workout plans' },
    { to: '/muscle-map', title: 'Browse muscle map', desc: 'Learn about muscles and exercises' }
  ]

  return (
    <div className="min-h-screen bg-dark pt-24 pb-16 px-6 page-enter">
      <div className="max-w-6xl mx-auto">
        {/* Welcome header */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Hey, <span className="text-primary">{user?.name}</span>
          </h1>
          <p className="text-gray-400">Here is what you have been working on</p>
        </div>

        {/* Stats cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { label: 'Plans made', value: stats.total },
            { label: 'Last plan', value: stats.lastDate },
            { label: 'Main goal', value: goalLabels[stats.topGoal] || stats.topGoal },
            { label: 'Exercises done', value: stats.totalExercises }
          ].map((stat, index) => (
            <div key={index} className="bg-card rounded-lg p-6 border border-border">
              <p className="text-2xl md:text-3xl font-bold text-white truncate">{stat.value}</p>
              <p className="text-gray-500 text-sm mt-2">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Quick links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {quickLinks.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              className="group bg-card rounded-lg p-6 border border-border hover:border-primary transition-all"
            >
              <h3 className="text-white font-semibold mb-2 group-hover:text-primary transition-colors">{link.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{link.desc}</p>
            </Link>
          ))}
        </div>

        {/* Recent plans */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-white">Recent plans</h2>
            {recentPlans.length > 0 && (
              <Link to="/saved-plans" className="text-primary hover:underline text-sm font-medium">
                See all
              </Link>
            )}
          </div>

          {loading ? (
            <LoadingSpinner fullPage={false} />
          ) : recentPlans.length === 0 ? (
            <div className="bg-card rounded-lg p-12 text-center border border-border">
              <h3 className="text-xl font-semibold text-white mb-3">No saved plans yet</h3>
              <p className="text-gray-400 mb-6">Make a plan to get started</p>
              <Link
                to="/generator"
                className="inline-block px-6 py-3 bg-primary hover:bg-opacity-90 text-white font-semibold rounded-lg transition-all"
              >
                Make your first plan
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {recentPlans.map((plan) => (
                <div key={plan._id} className="bg-card rounded-lg border border-border overflow-hidden hover:border-primary transition-all">
                  <div className="p-4 border-b border-border flex items-center justify-between">
                    <div>
                      <h3 className="text-white font-semibold">{plan.name}</h3>
                      <p className="text-gray-500 text-sm">
                        {plan.split} • {plan.daysPerWeek} days • {new Date(plan.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                    <span className={`px-3 py-1 rounded-lg text-xs font-medium ${
                      plan.goal === 'muscle_gain' ? 'bg-stone-500/10 text-stone-300' : 'bg-stone-500/10 text-stone-400'
                    }`}>
                      {goalLabels[plan.goal]}
                    </span>
                  </div>
                  <div className="p-4">
                    {plan.plan.slice(0, 1).map((day, index) => (
                      <WorkoutCard key={index} day={day} />
                    ))}
                    {plan.plan.length > 1 && (
                      <p className="text-gray-500 text-sm mt-3 text-center">+{plan.plan.length - 1} more training days</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
