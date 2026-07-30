import './App.css'
import { SignInButton, SignOutButton, UserButton, useUser } from '@clerk/react'

function App() {
  const { isSignedIn } = useUser()

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Welcome to the app</h1>
      <p>Sign in to continue.</p>

      <div style={{ marginTop: '1rem' }}>
        <SignInButton mode="modal">
          <button>Login</button>
        </SignInButton>
      </div>

      <div style={{ marginTop: '1rem' }}>
        <UserButton />
      </div>

      {isSignedIn && (
        <div style={{ marginTop: '1rem' }}>
          <SignOutButton />
        </div>
      )}
    </div>
  );
}

export default App;
