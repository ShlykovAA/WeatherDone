import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { Home } from './pages/Home';
import { FiveDays } from './pages/FiveDays';
import { Header } from './sections/Header';

function App() {
  return (
    <Router>
      <Provider store={store}>
          <Header />
          <Switch>
            <Route path='/5days'  component={() => <FiveDays />} />
            <Route path='/' exact component={() => <Home />} />
          </Switch>
      </Provider>
    </Router>
  )
};

export default App