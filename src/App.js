import { Fragment } from 'react/jsx-runtime';
import { useSelector } from 'react-redux';
import Header from './components/Header';
import UserProfile from './components/UserProfile';
import Auth from './components/Auth';
import Counter from './components/Counter';

function App() {
  const auth = useSelector((state) => state.auth.isAuthenticated);
  return (
    <Fragment>
      <Header />
      {auth ? <UserProfile /> : <Auth />}
      <Counter />
    </Fragment>
  );
}

export default App;
