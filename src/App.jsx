
import React, { useState } from 'react';
import { data, statuses } from './data/data';
import { AppBar, Toolbar, Typography,Button} from '@mui/material';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Col from './components/Col';

const App = () => {
  const [tasks, setTasks] = useState(data);

  const onTaskMove = (task, newStatus) => {
    const updatedTasks = tasks.map(t => {
      if (t.id === task.id) {
        return { ...t, status: newStatus, icon: statuses.find(s => s.status === newStatus).icon };
      }
      return t;
    });
    setTasks(updatedTasks);
  };

  const columns = statuses.map(status => {
    const tasksForStatus = tasks.filter(task => task.status === status.status);
    return <Col key={status.status} title={status.status} tasks={tasksForStatus} onTaskMove={onTaskMove} />;
  });

  return (
  <div>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{color: 'black',
    background:'whitesmoke'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Today's Board
          </Typography>
          <Button color="inherit">LOGOUT</Button>
        </Toolbar>
      </AppBar>
    </Box>
    <div style={{ display: 'flex' , flexWrap: 'wrap',justifyContent: 'center'}}>
      {columns}
    </div>
    </div>
  );
};

export default App;
