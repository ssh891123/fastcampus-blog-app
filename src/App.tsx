import Router from './components/Router';
import { app } from 'firebaseApp';
import { getAuth } from 'firebase/auth';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const auth = getAuth(app);
  console.log(auth);

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  return (
    <>
      <ToastContainer />
      <Router isAuthenticated={isAuthenticated} />
    </>
  );
}

export default App;
