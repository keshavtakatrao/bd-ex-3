const express = require('express');
const { tasksObject } = require('./taskData');
const taskRoute = express.Router();

let addTask = (taskId, text, priority) => {
  tasksObject.push({
    taskId,
    text,
    priority,
  });
  return tasksObject;
};

taskRoute.get('/', (req, res) => {
  res.json({ tasks: tasksObject })
})

taskRoute.get('/add', (req, res) => {
  let { taskId, text, priority } = req.query;
  let tasks = addTask(taskId, text, priority);
  res.json({ tasks })
});

taskRoute.get('/sort-by-priority', (req, res) => {
  let tasks = tasksObject.sort((a, b) => a.priority - b.priority)
  res.json({ tasks })
})

taskRoute.get('/edit-priority', (req, res) => {
  let { taskId, priority } = req.query
  task = tasksObject.find(item => item.taskId == taskId)

  if (task) {
    task.priority = priority
  }

  res.json({ tasks: tasksObject })
})

taskRoute.get('/edit-text', (req, res) => {
  let { taskId, text } = req.query
  task = tasksObject.find(item => item.taskId == taskId)

  if (task) {
    task.text = text
  }

  res.json({ tasks: tasksObject })
})

taskRoute.get('/delete', (req, res) => {
  let { taskId } = req.query
  let tasks = tasksObject.filter(item => item.taskId != taskId)
  res.json({ tasks })
})

taskRoute.get('/filter-by-priority', (req, res) => {
  let { priority } = req.query
  let tasks = tasksObject.filter(item => item.priority == priority)
  res.json({ tasks })
})

module.exports = { taskRoute }