
import './App.css';
import Feed from './component/Feed/Feed';
import Sidebar from './component/Sidebar/Sidebar';
import Widgets from './component/Widget/Widgets';

function App() {
  return (
    <div className="app">
      <Sidebar/>
      <Feed/>
      <Widgets/>
    
    </div>
  );
}

export default App;
