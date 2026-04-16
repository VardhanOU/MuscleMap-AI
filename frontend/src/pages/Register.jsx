import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Register = () => {
  const { register } = useAuth()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' })
  const [errors, setErrors] = useState({})
  const [submitError, setSubmitError] = useState('')
  const [loading, setLoading] = useState(false)
  const [passwordStrength, setPasswordStrength] = useState(0)

  const getPasswordStrength = (password) => {
    let score = 0
    if (password.length >= 6) score++
    if (password.length >= 10) score++
    if (/[A-Z]/.test(password)) score++
    if (/[0-9]/.test(password)) score++
    if (/[^A-Za-z0-9]/.test(password)) score++
    return score
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitError('')

    if (!validate()) return

    setLoading(true)
    try {
      await register(formData.name, formData.email, formData.password)
      navigate('/dashboard')
    } catch (error) {
      console.error('Registration error:', error)
      const errorMessage = error.response?.data?.message || 
                          error.message || 
                          'Registration failed. Please try again.'
      setSubmitError(errorMessage)
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' })
    }
    if (e.target.name === 'password') {
      setPasswordStrength(getPasswordStrength(e.target.value))
    }
  }

  const strengthColors = ['bg-gray-600', 'bg-stone-500', 'bg-stone-500', 'bg-stone-500', 'bg-stone-500', 'bg-stone-500']
  const strengthLabels = ['Too weak', 'Weak', 'Fair', 'Good', 'Strong']

  return (
    <div className="min-h-screen bg-dark flex items-center justify-center px-6 py-16 page-enter">
      <div className="relative w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-10">
          <Link to="/" className="inline-flex items-center justify-center mb-6">
            <span className="text-2xl font-bold text-primary">
              MuscleMap AI
            </span>
          </Link>
          <h1 className="text-2xl font-bold text-white mb-2">Create an account</h1>
          <p className="text-gray-500">It takes about a minute</p>
        </div>

        {/* Card */}
        <div className="bg-card rounded-lg p-8 border border-border">
          {submitError && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm">
              {submitError}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-gray-400 text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full bg-dark text-white border rounded-lg px-4 py-3 transition-all ${
                  errors.name ? 'border-red-500' : 'border-border focus:border-primary'
                }`}
                placeholder="John Doe"
                autoComplete="name"
              />
              {errors.name && <p className="text-red-400 text-sm mt-1.5">{errors.name}</p>}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-gray-400 text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full bg-dark text-white border rounded-lg px-4 py-3 transition-all ${
                  errors.email ? 'border-red-500' : 'border-border focus:border-primary'
                }`}
                placeholder="you@example.com"
                autoComplete="email"
              />
              {errors.email && <p className="text-red-400 text-sm mt-1.5">{errors.email}</p>}
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-gray-400 text-sm font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full bg-dark text-white border rounded-lg px-4 py-3 transition-all ${
                  errors.password ? 'border-red-500' : 'border-border focus:border-primary'
                }`}
                placeholder="At least 6 characters"
                autoComplete="new-password"
              />
              {formData.password && (
                <div className="mt-2">
                  <div className="flex gap-1 mb-1">
                    {[1, 2, 3, 4, 5].map((level) => (
                      <div
                        key={level}
                        className={`h-1 flex-1 rounded-full transition-colors ${
                          level <= passwordStrength ? strengthColors[passwordStrength] : 'bg-gray-700'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-xs text-gray-500">
                    {passwordStrength > 0 ? strengthLabels[passwordStrength - 1] : ''}
                  </p>
                </div>
              )}
              {errors.password && <p className="text-red-400 text-sm mt-1.5">{errors.password}</p>}
            </div>

            {/* Confirm Password */}
            <div>
              <label htmlFor="confirmPassword" className="block text-gray-400 text-sm font-medium mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`w-full bg-dark text-white border rounded-lg px-4 py-3 transition-all ${
                  errors.confirmPassword ? 'border-red-500' : 'border-border focus:border-primary'
                }`}
                placeholder="Re-enter your password"
                autoComplete="new-password"
              />
              {formData.confirmPassword && formData.password === formData.confirmPassword && (
                <p className="text-stone-400 text-sm mt-1.5">
                  Passwords match
                </p>
              )}
              {errors.confirmPassword && <p className="text-red-400 text-sm mt-1.5">{errors.confirmPassword}</p>}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary hover:bg-opacity-90 text-white font-semibold py-3 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Creating account...
                </span>
              ) : (
                'Create account'
              )}
            </button>
          </form>
        </div>

        {/* Footer link */}
        <p className="text-center text-gray-500 mt-8">
          Already have an account?{' '}
          <Link to="/login" className="text-primary hover:text-opacity-80 font-medium transition-colors">
            Log in
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Register
