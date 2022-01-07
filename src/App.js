import logo from './logo.svg';
import './App.css';
import { InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import Searchbar from './components/Searchbar';
// api key : SE73JlZEM4UQ5rhViu0ssckbWhgQSd3lHZjei85S

function App() {
  return (
    <div className="App">
      <div> Search Bar</div>
      <Searchbar />
    </div>
  );
}


export default App;
