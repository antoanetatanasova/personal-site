import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

import { auth } from './utils/firebase';
import { useEffect, useState } from 'react';
import AuthContext from './contexts/AuthContext';

function App() {


  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(setUser)
  }, []);

  return (
    <AuthContext.Provider value={user}>
      <div className="App">
        <Header user={user} />
        <Main user={user} />
        <Footer />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
