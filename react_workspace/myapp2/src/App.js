import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import DayList from './components/DayList'
import WorldList from './components/WordlList';

function App() {
  return (
    <div className="App">
      <Header />
      <DayList />
      <WorldList />
    </div>
  );
}

export default App;
