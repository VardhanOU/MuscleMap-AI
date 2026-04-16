# MuscleMap AI

A complete, production-ready web application for personalized workout planning with an interactive muscle anatomy interface. Build your perfect body with AI-powered workout plans, clickable SVG anatomy maps, and progress tracking.

## Features

- **Interactive Muscle Anatomy Map** — Clickable SVG body diagrams (front & back views) with exercise lists for each muscle group
- **Smart Workout Generator** — Generates personalized plans based on days per week (3-6), goal (muscle gain/fat loss), and focus muscle
- **Save & Manage Plans** — Create, view, and delete saved workout plans with a clean interface
- **User Authentication** — JWT-based auth with bcrypt password hashing
- **User Dashboard** — Stats overview, quick links, and recent plans
- **Dark Theme** — Beautiful dark UI with purple accent colors throughout
- **Fully Responsive** — Mobile-first design with hamburger navigation

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18 + Vite |
| Styling | Tailwind CSS (JIT mode) |
| Routing | React Router v6 |
| HTTP Client | Axios |
| Backend | Node.js + Express.js |
| Database | MongoDB + Mongoose |
| Auth | JWT (jsonwebtoken) + bcryptjs |
| SVG | Hand-coded interactive anatomy maps |

## Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- npm or yarn

## Setup Instructions

### 1. Clone the repository

```bash
git clone <repository-url>
cd musclemap-ai
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Configure your environment variables in `backend/.env`:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/musclemap
JWT_SECRET=musclemap_super_secret_key_2024
JWT_EXPIRE=7d
```

Start the backend server:

```bash
npm run dev
```

The server will start on `http://localhost:5000`

### 3. Frontend Setup

```bash
cd ../frontend
npm install
```

Start the frontend dev server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### 4. Access the Application

Open your browser and navigate to `http://localhost:5173` to use MuscleMap AI.

## Folder Structure

```
musclemap-ai/
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   │   ├── Navbar.jsx
│   │   │   ├── MuscleMap.jsx
│   │   │   ├── BodyFront.jsx
│   │   │   ├── BodyBack.jsx
│   │   │   ├── ExerciseCard.jsx
│   │   │   ├── ExerciseList.jsx
│   │   │   ├── WorkoutCard.jsx
│   │   │   ├── WorkoutForm.jsx
│   │   │   ├── ProtectedRoute.jsx
│   │   │   ├── LoadingSpinner.jsx
│   │   │   └── Modal.jsx
│   │   ├── pages/          # Route pages
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Generator.jsx
│   │   │   └── SavedPlans.jsx
│   │   ├── context/        # React context
│   │   │   └── AuthContext.jsx
│   │   ├── utils/          # Utility functions
│   │   │   ├── api.js
│   │   │   └── workoutEngine.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
│
├── backend/
│   ├── models/             # Mongoose schemas
│   │   ├── User.model.js
│   │   └── Workout.model.js
│   ├── routes/             # Express routes
│   │   ├── auth.routes.js
│   │   ├── workout.routes.js
│   │   └── user.routes.js
│   ├── middleware/         # Express middleware
│   │   └── authMiddleware.js
│   ├── controllers/        # Route controllers
│   │   ├── auth.controller.js
│   │   ├── workout.controller.js
│   │   └── user.controller.js
│   ├── data/               # Static data
│   │   └── exercises.js
│   ├── server.js
│   ├── .env
│   └── package.json
│
├── .gitignore
└── README.md
```

## API Endpoints

### Authentication

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/auth/register` | Register a new user | No |
| POST | `/api/auth/login` | Login user | No |
| GET | `/api/auth/me` | Get current user | Yes |

### Workouts

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/workouts` | Create a workout plan | Yes |
| GET | `/api/workouts` | Get all user workouts | Yes |
| GET | `/api/workouts/:id` | Get workout by ID | Yes |
| DELETE | `/api/workouts/:id` | Delete a workout | Yes |

### User

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/user/profile` | Get user profile | Yes |
| PUT | `/api/user/profile` | Update user profile | Yes |

## Workout Split Logic

The workout generator uses the following split patterns:

| Days | Split | Pattern |
|------|-------|---------|
| 3 | Full Body | Mon/Wed/Fri — all muscle groups each day |
| 4 | Upper/Lower | Upper, Lower, Upper, Lower |
| 5 | PPL/UL | Push, Pull, Legs, Upper, Lower |
| 6 | PPL x2 | Push, Pull, Legs, Push, Pull, Legs |

Volume adjusts based on focus muscle (extra exercises for focus area) and goal (cardio addition for fat loss, rest period notes for muscle gain).

## Exercise Database

The app includes 50+ exercises across 8 muscle groups:
- Chest (6 exercises)
- Back (6 exercises)
- Shoulders (6 exercises)
- Biceps (6 exercises)
- Triceps (6 exercises)
- Legs (8 exercises — quads, hamstrings, calves)
- Abs (6 exercises)
- Glutes (5 exercises)

Each exercise includes name, default sets, reps, and category (compound/isolation/bodyweight).

## License

MIT
