import './App.css';
import Header from './components/Header';
import Ajenda from './components/Ajenda';
import Login from './components/Login';
// import Schedule from './components/Schedule';
// import Review from './components/Review';
// import Cheer from './components/Cheer';
// import Feedback from './components/Feedback';
// import Calendar from './components/Calendar';
import NotFound from './components/NotFound';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <>
    <BrowserRouter>
      <Switch>

        <Route exact path='/'>
          <Login />
        </Route>

        <Route path='/home'>
            <Header />
            <Ajenda />
        </Route>


        <Route>
          <NotFound />
        </Route>

      </Switch>

    </BrowserRouter>
    </>
  );
}


export default App;




// import logo from './logo.svg';
// import './App.css';

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

// export default App;
