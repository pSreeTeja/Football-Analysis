import './App.css';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Home from "./containers/Home"
import DatabaseDesign from "./containers/DatabaseDesign";
import Schema from "./containers/Schema";
import Mappings from "./containers/Mappings";
import Workflows from "./containers/Workflows";
import Reports from "./containers/Reports";
import MyNavbar from './components/MyNavbar';
function App() {
  const [activePage,setActivePage]=useState("abstract")
  let handleActivePage=(activepage)=>{  
    setActivePage(activepage)
  }
  return ( 
    <div className="App">
      <div className='websiteMainDiv'>
        <BrowserRouter>
          <MyNavbar activePage={activePage} handleActivePage={handleActivePage}/>
          <div className='appBottomDiv'>
            <Routes>
              <Route exact path="/" element={<Home />}/>
              <Route exact path="/databasedesign" element={<DatabaseDesign setActivePage={setActivePage}  />}/>
              <Route exact path="/schema" element={<Schema setActivePage={setActivePage} />}/>
              <Route exact path="/mappings" element={<Mappings setActivePage={setActivePage} />}/>
              <Route exact path="/workflows" element={<Workflows setActivePage={setActivePage} />}/>
              <Route exact path="/reports" element={<Reports setActivePage={setActivePage} />}/>
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
