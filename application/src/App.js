import './App.css';
import Menu from './Menu.js'
import Main from './Main.js'

function App() {
  return (
    <div className="App">
      <Menu className='Menu' />
      <div className="Separator"></div>
      <Main className='Main' />
    </div>
  );
}

export default App;
