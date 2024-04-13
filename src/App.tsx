import Router from './components/Router';
import { app } from 'firebaseApp';
import { getAuth } from 'firebase/auth';
import { useState } from 'react';

function App() {
  const auth = getAuth(app);
  console.log(auth);

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  return <Router isAuthenticated={isAuthenticated}/>;
}

export default App;
