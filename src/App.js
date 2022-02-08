import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import BeaniesPage from './BeaniesPage.js';
import BeanieDetail from './BeanieDetail.js';

export default function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path="/">
            {/* this home page route should list all the beanies */}
            <BeaniesPage />

          </Route>
          <Route exact path="/beanie-babies/:id"> 
            {/* this route should point to a particular beanie baby by id and render that specific BeanieDetail page */}
            <BeanieDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}