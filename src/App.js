import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import './App.css';
import Home from './Views/Home/Home';
import TeamList from './Views/Teams/TeamList';
import TeamDetail from './Views/Teams/TeamDetail';
import PlayerList from './Views/Players/PlayerList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="header">
          <NavLink to="/" exact>
            Home
          </NavLink>
          <NavLink to="/players">Players</NavLink>
          <NavLink to="/teams">Teams</NavLink>
        </header>
        <Switch>
          <Route path="/players/:id"></Route>

          <Route exact path="/players">
            <PlayerList />
          </Route>

          <Route path="/teams/:id">
            <TeamDetail />
          </Route>

          <Route exact path="/teams">
            <TeamList />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
