import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import DayList from './components/DayList'
import WorldList from './components/WordlList';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Switch>
          <Route exact path ="/">
            <DayList />
          </Route>
          <Route exact path ="/word/:day">
            <WorldList />
          </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
