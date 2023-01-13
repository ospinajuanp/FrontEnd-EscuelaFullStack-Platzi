import './App.css';
import 'normalize.css'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'

function App() {
  return (
    <div className="App">
      <Container maxWidth="sm">
        <Box  sx={{
          width: '100%',
          height: 300,
          backgroundColor: 'primary.dark',
          '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}></Box>
      </Container>
    </div>
  );
}

export default App;
