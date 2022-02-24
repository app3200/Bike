
import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import { MyProfile } from './Components/Login/MyProfile';
import { SelectBike } from './Components/Policy Flow/SelectBike';
import { SelectedBike } from './Components/Policy Flow/selectedbike';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MyProfile/>}></Route>
    
      </Routes>
     
    </div>
  );
}

export default App;
