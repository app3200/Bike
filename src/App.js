
import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
<<<<<<< Updated upstream
=======
import { SelectBike } from './Components/Policy Flow/SelectBike';
import { SelectedBike } from './Components/Policy Flow/selectedbike';
>>>>>>> Stashed changes

function App() {
  return (
    <div className="App">
<<<<<<< Updated upstream
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
=======
      <Routes>
        <Route path='/' element={<SelectBike/>}></Route>
        <Route path='/selected/:id' element={<SelectedBike/>}></Route>
      </Routes>
     
>>>>>>> Stashed changes
    </div>
  );
}

export default App;
