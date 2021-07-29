import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlogDetails from './components/BlogDetails';
import Create from './components/Create';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Update from './components/Update';



// ts funtional component 
function App() {



  return (
    <Router>
    <div className="App">
      <NavBar />
      <div className="content">
      <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/create'>
              <Create />
            </Route>
            <Route path='/blogs/:id'>
              <BlogDetails />
            </Route>
            <Route path='/update/:id'>
              <Update />
            </Route>
      </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
