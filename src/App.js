import logo from './logo.svg';
import './App.css';
import { LoginButton } from './login';
import { LogOut } from './logout';
import { Profile } from './profile'
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        { isAuthenticated ? (
          <>
          <Profile/>
          <LogOut/>
          </>
        ) : <LoginButton/>}
      </header>
    </div>
  );
}

export default App;
