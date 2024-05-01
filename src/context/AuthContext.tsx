import { ReactNode, createContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import { app } from 'firebaseApp';

interface AuthProps {
    children: ReactNode;
}

const AuthContext = createContext({
    user: null as User | null,
});

export const AuthContextProvider = ({ children }: AuthProps) => {
    const auth = getAuth(app);
    const [currentUser, setCurrentUser] = useState<User | null>(null);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
          if(user) { 
            console.log("login success");
            setCurrentUser(user);
          } else {
            console.log('logout !!!');
            setCurrentUser(null);
          }
        })
    }, [auth]);

    return (
        <AuthContext.Provider value={{user: currentUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;