import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import GameList from './components/GameList';
import GameDetails from './components/GameDetails';

function App() {
  return (
    <div className='App'>
      <Header title="G@mer's hub" />
      <Router>
        <Switch>
          <Route exact path='/'>
            <GameList />
          </Route>
          <Route exact path='/games/:id' component={GameDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
