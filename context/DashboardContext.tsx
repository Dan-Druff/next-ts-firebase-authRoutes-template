import {ReactNode, createContext, useReducer, useContext, useState} from "react";
import { DashboardActions,  DefDashDisp, MainType, SubType, DashboardContextType } from "../utilities/constants";
import type {DashboardType} from '../utilities/constants';


export const DashboardContext = createContext<DashboardContextType>({dashboard:[],mainState:'init',subState:'init',dashboardDispatch:DefDashDisp});

export const DashboardProvider = ({children}:{children:ReactNode}) => {
    const [mainState,setMainState] = useState<MainType>('init');
    const [subState,setSubState] = useState<SubType>('init');
    function dashboardReducer(state:DashboardType, action:DashboardActions){
        switch (action.type) {
            case 'login':
                setMainState('loggedIn');
                setSubState('dashboard');
                return state;
            case 'logout':
                setMainState('init');
                setSubState('init');
                return state;
            default:
                return state;    
         
        }
    }
    const [dashboard,dashboardDispatch] = useReducer(dashboardReducer, []);

    let dashValue = {
        dashboard:dashboard,
        mainState:mainState,
        subState:subState,
        dashboardDispatch:dashboardDispatch

    }
    
    return (
        <DashboardContext.Provider value={dashValue}>{children}</DashboardContext.Provider>
    )
}
export function useDashboard(){
    return useContext(DashboardContext);
}