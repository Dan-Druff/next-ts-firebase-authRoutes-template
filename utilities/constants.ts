
import {User} from "firebase/auth";
export type MainType = 'init' | 'loggedIn';
export type SubType = 'init' | 'dashboard';
export type DashboardActions = {type:'login'} | {type:'logout'};
export type DashboardType = CardType[]
export type DashboardDispatch = (action:DashboardActions) => void;
export interface UserData {
    userId:string,
    userName:string | null,
    userEmail:string | null,
    userPhotoLink: string | null,
    userProviderId: string
}

export interface AuthType {
    currentUser:User | null,
    userData:UserData | null
}
export interface CardType {
    name:string,
    id:string
}
export interface DashboardContextType {
    dashboard:DashboardType,
    mainState:MainType,
    subState:SubType,
    dashboardDispatch:DashboardDispatch
}


export const DefDashDisp = (action:DashboardActions) => {
    console.log("Def Dash Disp", action.type);
}
