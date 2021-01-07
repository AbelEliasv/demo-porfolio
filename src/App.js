
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PageAboutMe from './pages/AboutMe';
import PageContact from './pages/Contact';
import NavTop from './components/NavTop';
import PageProject from './pages/Projects';

function App() {

  return (

    <div className="container mx-auto">
      <Router>
        <NavTop></NavTop>
        <Switch>
          <Route path="/demo-porfolio" exact>
            <PageAboutMe />
          </Route>
          <Route path="/contact">
            <PageContact/>
          </Route>
          <Route path="/project">
            <PageProject/>
          </Route>
        </Switch>




      </Router>

    </div>
  );
}

export default App;
