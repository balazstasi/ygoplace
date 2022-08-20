import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import { useAuth } from '~/lib/firebase';

export const SignInButton = () => {
  const handleClick = () => {
    const provider = new GoogleAuthProvider();
    const auth = useAuth();
    // @see https://firebase.google.com/docs/auth/web/google-signin
    auth.languageCode = 'ja';

    signInWithRedirect(auth, provider);
  };

  return (
    <button onClick={handleClick} type="button" className="btn btn-primary min-w-60 bg-red-500">
      Sign In With Google
    </button>
  );
};
