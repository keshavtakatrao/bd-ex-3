const express = require('express');
const taskRoute = express.Route();

let addTask = (taskId, text, priority) => {
  tasksObject.push({
    taskId,
    text,
    priority,
  });
  return tasksObject;
};

taskRoute.get('/add', (req, res) => {
  let { taskId, text, priority } = req.query;
  taskaddTask(taskId, text, priority);
});
