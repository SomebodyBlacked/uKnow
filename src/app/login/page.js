"use client";

import { auth } from '@/firebaseConfig';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import Cookies from 'js-cookie';
import Button from '@/components/Button';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const token = await result.user.getIdToken();
      Cookies.set('auth-token', token, { expires: 300 });
      window.location.reload();
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  };

  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center">
      {isAuthenticated && (
        <div className="bg-white rounded-3xl">
          <div className="p-6 space-y-4">
            <h1 className="text-3xl font-bold text-center text-gray-950">Login</h1>
            <Button onClick={handleGoogleLogin}>
              Login with Google
            </Button>
          </div>
        </div>
      )}
      {!isAuthenticated && (
        <div className="mt-4 text-center">
          <Button onClick={() => router.push('/')}>
            Return to Home Page
          </Button>
        </div>
      )}
    </div>
  );
}