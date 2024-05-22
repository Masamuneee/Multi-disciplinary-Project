import { useAuthContext } from '@/context/userContext';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { user } = useAuthContext();

  useEffect(() => {
    if (!user) {
      router.push('/');
    }
  }, [router, user]);

  return <div>{user ? children : null}</div>;
};

export default ProtectedRoute;