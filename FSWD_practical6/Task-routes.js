const express = require('express');
const Task = require('../models/Task');
const router = express.Router();
router.get('/', async (req, res) => {
const tasks = await Task.find();
res.json(tasks);
});
router.post('/', async (req, res) => {
const newTask = new Task({ title: req.body.title });
await newTask.save();
res.status(201).json(newTask);
});
router.delete('/:id', async (req, res) => {
await Task.findByIdAndDelete(req.params.id);
res.status(204).send();
});
module.exports = router;