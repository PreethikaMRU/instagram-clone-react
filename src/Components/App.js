import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from '../Firebase/Firebase';
import '../styles/App.scss';
import Homepage from './Homepage';
import Navigation from './Navigation';
import Signup from './Signup';

function App() {
  const [user]=useAuthState(auth);
  const handleLogin = (log) => {
    if(log===false){
      auth.signOut();
    }
  }
  return (
    <div className='AppContainer'>
      {user? 
      <div className='App'>
        <Navigation handleLogin={handleLogin}/>
        <Homepage />
      </div>:<Signup handleLogin={handleLogin}/>
      }
    </div>
  );
}

export default App;
