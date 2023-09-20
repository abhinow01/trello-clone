import React from 'react';
import { Paper, Typography } from '@mui/material';
import { useDrag } from 'react-dnd';
import { ItemTypes } from './ItemTypes';

const Task = ({ task }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'TASK',
    item: { id: task.id, status: task.status },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div ref={drag}>
      <Paper
        elevation={3}
        style={{
          padding: '16px',
          marginBottom: '8px',
          width: '175px',
          opacity: isDragging ? 0.5 : 1,
          cursor: 'move',
        }}
      >
        <Typography variant="h6">{task.title}</Typography>
        <Typography variant="subtitle1">
          {task.content} </Typography>{task.icon}
        
      </Paper>
    </div>
  );
};

export default Task;
