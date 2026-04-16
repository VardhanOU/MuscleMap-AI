const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const {
  createWorkout,
  getUserWorkouts,
  getWorkoutById,
  deleteWorkout
} = require('../controllers/workout.controller');

router.post('/', protect, createWorkout);
router.get('/', protect, getUserWorkouts);
router.get('/:id', protect, getWorkoutById);
router.delete('/:id', protect, deleteWorkout);

module.exports = router;
