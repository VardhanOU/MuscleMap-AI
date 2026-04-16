import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import api from '../utils/api'
import WorkoutCard from '../components/WorkoutCard'
import Modal from '../components/Modal'
import LoadingSpinner from '../components/LoadingSpinner'

const SavedPlans = () => {
  const [plans, setPlans] = useState([])
  const [loading, setLoading] = useState(true)
  const [expandedPlanId, setExpandedPlanId] = useState(null)
  const [deleteModal, setDeleteModal] = useState({ isOpen: false, planId: null, planName: '' })
  const [deleteStatus, setDeleteStatus] = useState(null)

  useEffect(() => {
    fetchPlans()
  }, [])

  const fetchPlans = async () => {
    try {
      const response = await api.get('/workouts')
      if (response.data.success) {
        setPlans(response.data.data.workouts)
      }
    } catch (error) {
      console.error('Failed to fetch plans:', error)
    } finally {
      setLoading(false)
    }
  }

  const toggleExpand = (planId) => {
    setExpandedPlanId(expandedPlanId === planId ? null : planId)
  }

  const openDeleteModal = (planId, planName) => {
    setDeleteModal({ isOpen: true, planId, planName })
  }

  const closeDeleteModal = () => {
    setDeleteModal({ isOpen: false, planId: null, planName: '' })
  }

  const handleDelete = async () => {
    if (!deleteModal.planId) return

    try {
      const response = await api.delete(`/workouts/${deleteModal.planId}`)
      if (response.data.success) {
        setPlans(plans.filter((plan) => plan._id !== deleteModal.planId))
        if (expandedPlanId === deleteModal.planId) {
          setExpandedPlanId(null)
        }
        setDeleteStatus('success')
        setTimeout(() => setDeleteStatus(null), 3000)
      }
    } catch (error) {
      console.error('Failed to delete plan:', error)
      setDeleteStatus('error')
      setTimeout(() => setDeleteStatus(null), 3000)
    } finally {
      closeDeleteModal()
    }
  }

  const goalLabels = { muscle_gain: 'Muscle Gain', fat_loss: 'Fat Loss' }

  if (loading) {
    return <LoadingSpinner />
  }

  return (
    <div className="min-h-screen bg-dark pt-24 pb-16 px-6 page-enter">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Saved <span className="text-primary">plans</span>
          </h1>
          <p className="text-gray-400 max-w-lg mx-auto leading-relaxed">
            All your past workout plans in one place.
          </p>
        </div>

        {/* Status messages */}
        {deleteStatus === 'success' && (
          <div className="mb-8 p-4 bg-stone-500/10 border border-stone-500/30 rounded-lg text-stone-400 text-sm">
            Plan deleted successfully
          </div>
        )}

        {plans.length === 0 ? (
          <div className="bg-card rounded-lg p-16 text-center border border-border">
            <h2 className="text-2xl font-bold text-white mb-3">No saved plans</h2>
            <p className="text-gray-400 mb-8 max-w-md mx-auto leading-relaxed">
              Make a plan in the generator and save it here.
            </p>
            <Link
              to="/generator"
              className="inline-block px-8 py-3 bg-primary hover:bg-opacity-90 text-white font-semibold rounded-lg transition-all"
            >
              Make a plan
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {plans.map((plan) => (
              <div
                key={plan._id}
                className="bg-card rounded-lg border border-border overflow-hidden hover:border-primary transition-all"
              >
                {/* Plan header */}
                <div className="p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-white truncate">{plan.name}</h3>
                    <div className="flex flex-wrap gap-2 mt-2 text-sm">
                      <span className="px-2.5 py-0.5 bg-primary/10 text-primary rounded-full">{plan.split}</span>
                      <span className="text-gray-500">{plan.daysPerWeek} days</span>
                      <span className="text-gray-500">•</span>
                      <span className={`px-2.5 py-0.5 rounded-full ${
                        plan.goal === 'muscle_gain' ? 'bg-stone-500/10 text-stone-300' : 'bg-stone-500/10 text-stone-400'
                      }`}>
                        {goalLabels[plan.goal]}
                      </span>
                      <span className="text-gray-500">•</span>
                      <span className="text-gray-500">{new Date(plan.createdAt).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <div className="flex gap-2 flex-shrink-0">
                    <button
                      onClick={() => toggleExpand(plan._id)}
                      className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                        expandedPlanId === plan._id
                          ? 'bg-gray-700 text-white'
                          : 'bg-primary/10 text-primary hover:bg-primary/20'
                      }`}
                    >
                      {expandedPlanId === plan._id ? 'Collapse' : 'View'}
                    </button>
                    <button
                      onClick={() => openDeleteModal(plan._id, plan.name)}
                      className="p-2 text-gray-500 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
                      aria-label="Delete plan"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Expanded plan */}
                {expandedPlanId === plan._id && (
                  <div className="border-t border-border p-6 space-y-6">
                    {plan.plan.map((day, index) => (
                      <WorkoutCard key={index} day={day} />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Delete confirmation modal */}
        <Modal
          isOpen={deleteModal.isOpen}
          onClose={closeDeleteModal}
          onConfirm={handleDelete}
          title="Delete Plan"
          message={`Are you sure you want to delete "${deleteModal.planName}"? This action cannot be undone.`}
        />
      </div>
    </div>
  )
}

export default SavedPlans
