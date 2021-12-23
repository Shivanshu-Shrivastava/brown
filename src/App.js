import './App.css';
import { BrowserRouter as Router,  Route, Switch } from 'react-router-dom'
import Home from './components/Home'
// import Detail from './components/Detail';


function App() {
  return (
    <Router>
      <Switch>


        
        <Route exact path='/'>
          <Home />

        </Route>
        {/* <Route exact path='/extract'>
          <CreateAdmin />

        </Route> */}
   


      </Switch>
    </Router>
  );
}

export default App;
