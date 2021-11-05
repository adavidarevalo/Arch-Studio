import './App.scss';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Home from './views/Home'
import AboutUs from './views/AboutUs'
import Portfolio from './views/Portfolio'
import Contact from './views/Contact'
import Layout from './components/Layout/Layout'

function App() {
  return (
    <Router>
      <Layout>
        <Route exact path='/' component={Home}/>
        <Route exact path='/AboutUs' component={AboutUs}/>
        <Route exact path='/Portfolio' component={Portfolio}/>
        <Route exact path='/Contact' component={Contact}/>
      </Layout>
    </Router>
  );
}

export default App;
