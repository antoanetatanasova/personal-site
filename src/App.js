import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

import { auth } from './utils/firebase';
import { useEffect, useState } from 'react';

function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(setUser)
  }, []);

  return (
    <div className="App">
      <Header user={user} />
      <Main user={user} />
      <Footer />
    </div>
  );
}

export default App;
