import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import './App.css';
import Home from './Views/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="header">
          <NavLink to="/players">Players</NavLink>
          <NavLink to="/teams">Teams</NavLink>
        </header>
        <Switch>
          <Route path="/players"></Route>
          <Route path="/players/:id"></Route>
          <Route path="/teams"></Route>
          <Route path="/teams/:id"></Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
