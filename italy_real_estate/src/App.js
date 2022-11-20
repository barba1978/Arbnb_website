import React from 'react'

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ErrorBoundary from './components/ErrorBoundary.js';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import Service from './components/Service'
import Book from './components/Book'
import Attractions from './components/Attractions'
import NavBar from './components/NavBar'


import './App.css';

function App() {
  return (
    <div>
 <NavBar/>
   
     
   <Router>
   <div className="App">
   <header className="App-header">
 

   <Switch>
   <Route exact path="/"><Home/></Route>
   <Route path="/about"><About/> </Route>
   <Route path="/service"><Service/> </Route>
   <Route path="/book"><Book/></Route>
   <Route path="/attractions"><Attractions/></Route>
   </Switch>
  
  
   
       
     
     </header>
   </div>
   </Router>



    </div>
   
   
  );
}

export default App;
