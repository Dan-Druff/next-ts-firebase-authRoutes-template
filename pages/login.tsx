import type {NextPage} from "next";
import styles from "../styles/Home.module.css";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/clientApp";
import { useDashboard } from "../context/DashboardContext";
import Link from "next/link";
const Login: NextPage = () => {
    const {currentUser} = useAuth();
    const Router = useRouter();
    const {dashboardDispatch} = useDashboard();
    const loginHandler = async(e:any) => {
        e.preventDefault();
        try {
            const {email,password} = e.target.elements;
            await signInWithEmailAndPassword(auth,email.value,password.value);
            // Do stuff with login cred email.value
            dashboardDispatch({type:'login'});
            Router.push('/dashboard');
            return;
        } catch (er) {
            console.log("🚦Login Handler Error: ", er);
            alert(er);
            return;
        }
    }

    if(currentUser){
        Router.push('/dashboard');
        return <></>;
    }else{
        return (
            <div>
                <h2>LOGIN HERE</h2>
                <form onSubmit={loginHandler}>
                    <div className={styles.inputDiv}>
                        <label htmlFor="email">EMAIL</label><br />
                        <input name="email" id="email" type="email" placeholder="email" autoComplete="on"/>
                    </div>
                    <div className={styles.inputDiv}>
                    <label htmlFor="password">PASSWORD</label><br />
                        <input name="password" id="password" type="password" placeholder="********" autoComplete="on"/>
                    </div>
                    <button type="submit">LOGIN</button>
                </form>
                <Link href="/signup">
                    <a>Need Account</a>
                </Link>
            </div>
        )
    }
}
export default Login;