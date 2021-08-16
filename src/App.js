import './App.css';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import Home from './pages/home';
import CalcPage from './pages/calculator';
import Quote from './pages/quotes';

function App() {
  return (
    <div className="App">
      <Router>
        <header
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '20px',
          }}
        >
          <h1>Math Magicians</h1>
          <nav>
            <Link className="p-10 border-right" to="/">Home</Link>
            <Link className="p-10 border-right" to="/calculator">Calculator</Link>
            <Link className="p-10" to="/quote">Quote</Link>
          </nav>
        </header>
        <main
          style={{
            padding: '0px 20px',
          }}
        >
          <Switch>
            <Route path="/quote">
              <Quote />
            </Route>
            <Route path="/calculator">
              <CalcPage />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
