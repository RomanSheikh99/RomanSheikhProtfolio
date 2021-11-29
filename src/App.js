import './App.css';
import Aside from './Components/Aside/Aside';
import Main from './Components/Main/Main';


function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="aside">
        <div className="add-padding">
          <Aside></Aside>
         </div>
        </div>
        <div className="main">
          <div className="add-padding">
          <Main></Main>
         </div>
        </div>
      </div>
    </div>
  );
}

export default App;
