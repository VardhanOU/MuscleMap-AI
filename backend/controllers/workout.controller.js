const Workout = require('../models/Workout.model');

// @desc    Create a workout
// @route   POST /api/workouts
// @access  Private
exports.createWorkout = async (req, res) => {
  try {
    const { name, goal, daysPerWeek, focusMuscle, split, plan } = req.body;

    const workout = await Workout.create({
      user: req.user._id,
      name,
      goal,
      daysPerWeek,
      focusMuscle,
      split,
      plan
    });

    res.status(201).json({
      success: true,
      message: 'Workout plan created successfully',
      data: { workout }
    });
  } catch (error) {
    console.error('Create workout error:', error);
    res.status(500).json({ success: false, message: 'Server error creating workout' });
  }
};

// @desc    Get user workouts
// @route   GET /api/workouts
// @access  Private
exports.getUserWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find({ user: req.user._id }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: workouts.length,
      data: { workouts }
    });
  } catch (error) {
    console.error('Get workouts error:', error);
    res.status(500).json({ success: false, message: 'Server error fetching workouts' });
  }
};

// @desc    Get workout by ID
// @route   GET /api/workouts/:id
// @access  Private
exports.getWorkoutById = async (req, res) => {
  try {
    const workout = await Workout.findById(req.params.id);

    if (!workout) {
      return res.status(404).json({ success: false, message: 'Workout not found' });
    }

    // Check ownership
    if (workout.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ success: false, message: 'Not authorized to view this workout' });
    }

    res.status(200).json({
      success: true,
      data: { workout }
    });
  } catch (error) {
    console.error('Get workout error:', error);
    if (error.kind === 'ObjectId') {
      return res.status(404).json({ success: false, message: 'Workout not found' });
    }
    res.status(500).json({ success: false, message: 'Server error fetching workout' });
  }
};

// @desc    Delete workout
// @route   DELETE /api/workouts/:id
// @access  Private
exports.deleteWorkout = async (req, res) => {
  try {
    const workout = await Workout.findById(req.params.id);

    if (!workout) {
      return res.status(404).json({ success: false, message: 'Workout not found' });
    }

    // Check ownership
    if (workout.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ success: false, message: 'Not authorized to delete this workout' });
    }

    await workout.deleteOne();

    res.status(200).json({
      success: true,
      message: 'Workout deleted successfully'
    });
  } catch (error) {
    console.error('Delete workout error:', error);
    if (error.kind === 'ObjectId') {
      return res.status(404).json({ success: false, message: 'Workout not found' });
    }
    res.status(500).json({ success: false, message: 'Server error deleting workout' });
  }
};
