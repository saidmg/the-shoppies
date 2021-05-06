import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReactLoader from './components/Loader';
import * as ROUTES from './constants/routes';


const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const NotFound = lazy(() => import('./pages/Not-Found'));

export default function App() {

  return (
      <Router>
        <Suspense fallback={<ReactLoader />}>
          <Switch>
            <Route path={ROUTES.Home} component={Home} />
            <Route path={ROUTES.About} component={About} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </Router>
  );
}