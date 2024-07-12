// controllers/activityController.js
const Activity = require('../models/activityModel');

// Crear una nueva actividad
const createActivity = async (req, res) => {
  try {
    const activity = new Activity(req.body);
    await activity.save();
    res.status(201).json(activity);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtener todas las actividades
const getActivities = async (req, res) => {
  try {
    const activities = await Activity.find();
    res.status(200).json(activities);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar una actividad
const updateActivity = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedActivity = await Activity.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedActivity) {
      return res.status(404).json({ error: 'Actividad no encontrada' });
    }
    res.status(200).json(updatedActivity);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Eliminar una actividad
const deleteActivity = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedActivity = await Activity.findByIdAndDelete(id);
    if (!deletedActivity) {
      return res.status(404).json({ error: 'Actividad no encontrada' });
    }
    res.status(200).json({ message: 'Actividad eliminada correctamente' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createActivity, getActivities, updateActivity, deleteActivity };
