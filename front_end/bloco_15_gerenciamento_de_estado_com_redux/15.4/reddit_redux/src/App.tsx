import { Link, Route, Switch } from 'react-router-dom';
import ReactJs from './pages/ReactJS';
import FrontEnd from './pages/FrontEnd';

function App() {
  return (
    <div>
      <Link to="/">ReactJS</Link>
      <Link to="/frontend">FrontEnd</Link>

      <Switch>
        <Route exact path="/">
          <ReactJs />
        </Route>
        <Route exact path="/frontend">
          <FrontEnd />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
