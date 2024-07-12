// routes/activityRoutes.js
const express = require('express');
const {
  createActivity,
  getActivities,
  updateActivity,
  deleteActivity
} = require('../controllers/activityController');
const router = express.Router();

router.post('/activities', createActivity);
router.get('/activities', getActivities);
router.put('/activities/:id', updateActivity);
router.delete('/activities/:id', deleteActivity);

module.exports = router;
