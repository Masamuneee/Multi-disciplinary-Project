import React from 'react';
import {
    onAuthStateChanged,
} from 'firebase/auth';
import { auth, signIn, signUp, logOut } from '@/utils/firebase.util';
import SignInPage from '@/app/signIn/page';
import SideBar from '@/components/sidebar';

export const AuthContext = React.createContext({});

export const useAuthContext = () => React.useContext(AuthContext);

export const AuthContextProvider = ({
    children,
}: { children: React.ReactNode }) => {
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
        <AuthContext.Provider value={{ user, signIn, signUp, logOut }}>
            {loading ? <div>Loading...</div> : children}
        </AuthContext.Provider>
    );
};