import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GameDetailsView from './components/views/GameDetail/GameDetailsView';
import GameListView from './components/views/GameList/GameListView';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <GameListView />
          </Route>
          <Route exact path="/games/:id" component={GameDetailsView} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
