import React from 'react';
import { Paper, Typography } from '@mui/material';
import Task from './Task';
import { useDrop } from 'react-dnd';

const Col = ({ title, tasks, onTaskMove }) => {
  const [, drop] = useDrop({
    accept: 'TASK',
    drop: (item) => {
      onTaskMove(item, title); // Update the task status when dropped
    }
  });

  return (
    <Paper elevation={3} style={{ margin: 20, padding: 16, width: 300 }} ref={drop}>
      <Typography variant="h2">{title}</Typography>
      {tasks.map((task, index) => (
        <Task key={task.id} task={task} index={index} />
      ))}
    </Paper>
  );
};

export default Col;
