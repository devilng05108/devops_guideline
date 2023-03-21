// import logo from './logo.svg';
// import './App.css';
import { Route, Switch } from 'react-router-dom';
import WestrumQS from './pages/WestrumQS';
import DoraQS from './pages/DoraQS';

function App(){
  return (
    <div>
      <Switch>
        <Route path="/">
          <WestrumQS />
        </Route>
        <Route path="/dora">
          <DoraQS />
        </Route>
      </Switch>
    </div>
  );

}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
