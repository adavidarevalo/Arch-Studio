import './App.scss';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Home from './views/Home'
import Layout from './components/Layout/Layout'

function App() {
  return (
    <Router>
      <Layout>
        <Route exact path='/' component={Home}/>
      </Layout>
    </Router>
  );
}

export default App;
