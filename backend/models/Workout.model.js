const mongoose = require('mongoose');

const WorkoutSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: {
    type: String,
    required: [true, 'Please provide a workout name']
  },
  goal: {
    type: String,
    enum: ['muscle_gain', 'fat_loss'],
    required: true
  },
  daysPerWeek: {
    type: Number,
    required: true,
    min: 3,
    max: 6
  },
  focusMuscle: {
    type: String,
    default: 'none'
  },
  split: {
    type: String,
    required: true
  },
  plan: [{
    day: String,
    focus: String,
    exercises: [{
      name: String,
      sets: Number,
      reps: String,
      muscleGroup: String,
      category: String
    }],
    notes: String
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Workout', WorkoutSchema);
