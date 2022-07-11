import type {NextPage} from "next";
import styles from "../styles/Home.module.css";
import { signOut } from "firebase/auth";
import { useAuth } from "../context/AuthContext";
import { useDashboard } from "../context/DashboardContext";
import { auth } from "../firebase/clientApp";
import {useRouter} from "next/router";
import AuthRoute from "../hoc/AuthRoute";
const Dashboard: NextPage = () => {
    const Router = useRouter();
    const {currentUser} = useAuth();
    const {mainState, subState, dashboard, dashboardDispatch} = useDashboard();
    const logUserOut = async() => {
        try {
            await signOut(auth);
            Router.push('/');
            return;
        } catch (er) {
            console.log("Error logging out");
            alert(`Error logging out: ${er}`);
            return;
        }
    }
    return (
            <AuthRoute>
                <div>
                    <h2>DASHBOARD</h2>
                    <button onClick={() => logUserOut()}>LOGOUT</button>
                </div>
            </AuthRoute>
        )
 
}
export default Dashboard;