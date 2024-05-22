import React from 'react';
import {
    onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '@/utils/firebase.util';
import SignInPage from '@/app/signIn/page';
import SideBar from '@/components/sidebar';

export const AuthContext = React.createContext({});

export const useAuthContext = () => React.useContext(AuthContext);

export const AuthContextProvider = ({
    children,
}: {children: React.ReactNode}) => {
    const [user, setUser] = React.useState(null);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                localStorage.setItem('user', JSON.stringify(user));
            } else {
                setUser(null);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ user }}>
            {
              loading ? <div>Loading...</div> :
              user ?
                <div className='flex flex-row'>
                  <SideBar />
                  <div className='p-8 h-[100vh] w-full bg-gray-100'>
                    {children}
                  </div>
                </div>
              : <SignInPage />}
        </AuthContext.Provider>
    );
};