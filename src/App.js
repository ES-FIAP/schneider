import logo from './logo.svg';
import './App.css';
import Button from './components/button';
import Input from './components/Input';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Button text={"Login"}/>
      <Input/>
    </div>
  );
}

export default App;
