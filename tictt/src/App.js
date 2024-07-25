import logo from './logo.svg';
import './App.css';
import TicTacToe from './Components/TicTacToe';

function App() {
  return (
    <div className="App">
      <TicTacToe size={4}/>
    </div>
  );
}

export default App;
