import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './SharedComponents/Navbar/Navbar';
import { Experiments } from './Components/Experiments/Experiments';
import { Home } from './Components/Home/Home';
import { About } from "./Components/About/About";
import { ExperimentDetails } from './Components/ExperimentDetails/ExperimentDetails';
import { Game } from './Components/Game/Game';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/"
          element={
            <>
              <Navbar />
              <Home />
            </>
          }
        />
        <Route exact path="/experiments"
          element={
            <>
              <Navbar />
              <Experiments exp={false} />
            </>
          }
        />
        <Route exact path="/experiments/:id"
          element={
            <>
              <Navbar />
              <Experiments exp={true} />
            </>
          }
        />
        <Route exact path="/experiment/:id/:index"
          element={
            <>
              <Navbar />
              <ExperimentDetails />
            </>
          }
        />
        <Route exact path="/about"
          element={
            <>
              <Navbar />
              <About />
            </>
          } />
        <Route exact path='/naturalConvection'
          element={
            <Game />
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
