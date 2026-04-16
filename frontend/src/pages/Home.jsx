import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="min-h-screen bg-dark page-enter">
      {/* Hero section */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            MuscleMap{' '}
            <span className="text-primary">
              AI
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-xl mx-auto leading-relaxed">
            Build workout plans. Study muscle anatomy. Track your progress.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/register"
              className="px-8 py-4 bg-primary hover:bg-opacity-90 text-white font-semibold rounded-lg transition-all text-lg"
            >
              Get started
              <span className="inline-block ml-2">→</span>
            </Link>
            <Link
              to="/muscle-map"
              className="px-8 py-4 bg-card hover:bg-opacity-80 border border-border text-white font-semibold rounded-lg transition-all text-lg"
            >
              View muscle map
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-500 text-sm">
            2026 MuscleMap AI
          </p>
          <div className="flex gap-8 text-sm text-gray-500">
            <Link to="/muscle-map" className="hover:text-primary transition-colors">Muscle map</Link>
            <Link to="/register" className="hover:text-primary transition-colors">Sign up</Link>
            <Link to="/login" className="hover:text-primary transition-colors">Log in</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
