import logo from './logo.svg';
import './App.css';
import ButtonComponent from './components/ButtonComponent';
import ImageComponent from './components/ImageComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      <ButtonComponent text="Il mio bottone"/>
      <ImageComponent src="https://techcrunch.com/wp-content/uploads/2019/07/GettyImages-908200362.jpg" alt="programming image"/>
      </header>
    </div>
  );
}

export default App;
