import './App.css'
import FullSidebar from './components/FullSideBar';
import Events from './Events/Events' ;
function App() {
  
  return (
    <div className="App">
        <div className='AppGlass'>
        <FullSidebar/>
        <Events/>
        </div>
      </div>
  );
}

export default App;
