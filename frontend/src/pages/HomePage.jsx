import { SignInButton, SignOutButton, UserButton, useUser } from '@clerk/react';
import { toast } from 'react-hot-toast';

function HomePage() {

  const { isSignedIn } = useUser();
  return (
    <div>
      <button className="btn btn-secondary" onClick={() => toast.success("This is a success toast")}>Click Me</button>

      {!isSignedIn ? (
        <SignInButton mode="modal">
          <button>Login</button>
        </SignInButton>
      ) : (
        <SignOutButton />
      )}

      <UserButton />
    </div>
  );
}
export default HomePage