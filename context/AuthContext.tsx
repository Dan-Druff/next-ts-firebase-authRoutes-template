import React, { useEffect, useState, useContext, useReducer, ReactNode } from "react";
import Loader from "../components/Loader";
import {auth} from "../firebase/clientApp";
import {User} from 'firebase/auth';
import { useRouter } from "next/router";
import { AuthType, UserData } from "../utilities/constants";

export const AuthContext = React.createContext<AuthType>({currentUser:null,userData:null});

export function useAuth(){
    return useContext(AuthContext);
}
export const AuthProvider = ({children}:{children:ReactNode}) => {

    const [currentUser,setCurrentUser] = useState<User | null>(null);
    const [userData, setUserData] = useState<UserData | null>(null);
    const [authLoading, setAuthLoading] = useState<boolean>(true);
    const Router = useRouter();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            console.log("Auth State Changed. user: ", user);
            if(user){
                const requiredData:UserData = {
                    userProviderId:user.providerData[0].providerId,
                    userId:user.uid,
                    userName:user.displayName,
                    userEmail:user.email,
                    userPhotoLink: user.photoURL,
                }
                setUserData(requiredData);
                setCurrentUser(user);
             
            }else{
                setCurrentUser(null);
                setUserData(null);
         
                // Router.push('/')
            }
            setAuthLoading(false);
        })
        return unsubscribe;
    },[]);
    
    let authValue = {
        currentUser:currentUser,
        userData:userData
      }

    if(authLoading){
        return (
            <Loader />
        )
    }

    return (
        <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
    )
}