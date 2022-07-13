import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import DayList from './components/DayList';
import WordList from './components/WordList';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import EmptyPage from './components/EmptyPage';
import CreateWord from './components/CreateWord';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <DayList />
        </Route>      
        <Route exact path="/word/:day">
          <WordList />
        </Route> 
        <Route exact path="/create_word">
          <CreateWord />
        </Route> 
        <Route>
          <EmptyPage />
        </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
