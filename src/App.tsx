import './App.css';
import React from 'react'
import 'antd/dist/antd'
import { Home } from './pages/home.tsx'
import { Switch, HashRouter, Route } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
