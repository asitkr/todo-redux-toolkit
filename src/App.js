import { Box } from '@mui/material';
import './App.css';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

function App() {
  return (
    <>
      <Box sx={{
        width: '100%',
        bgcolor: '#2596be',
        background: "linear-gradient(180deg, rgba(169,198,217,1) 15%, rgba(242,167,75,1) 90%)",
        boxShadow: ".2px 12px 18px rgba(131,153,167,0.6)",
        minHeight: '100vh',
      }}>
        <AddTodo />
        <Todos />
      </Box>
    </>
  );
}

export default App;
