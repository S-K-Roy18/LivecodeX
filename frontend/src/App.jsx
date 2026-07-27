import './App.css'
import { SignIn, SignInButton, SignOutButton, UserButton } from '@clerk/react'

function App() {
  return (
    <>
      <h1>Welcome to the app</h1>

      <SignOut>
      <SignInButton mode="modal" >
        <button>Login</button>
      </SignInButton>
      </SignOut>

      <SignIn>
        <SignOutButton />
      </SignIn>

      <UserButton />
    </>
  );
}

export default App;
