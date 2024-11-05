"use client";

import { auth } from '@/firebaseConfig';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

export default function LoginPage() {
  const router = useRouter();

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const token = await result.user.getIdToken();
      Cookies.set('auth-token', token, { expires: 300 });
      router.push('/');
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  };

  return (
    <div>
      <button onClick={handleGoogleLogin} className='bg-indigo-600 px-4 py-3 text-center text-sm font-bold cursor-pointer uppercase'>Login with Google</button>
    </div>
  );
}