import type {NextPage} from "next";
import styles from "../styles/Home.module.css";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/clientApp";
import { useDashboard } from "../context/DashboardContext";
import Link from "next/link";
const Signup: NextPage = () => {
    const {currentUser} = useAuth();
    const Router = useRouter();
    const {dashboardDispatch} = useDashboard();
    const signupHandler = async(e:any) => {
        e.preventDefault();
        try {
            const {email,password, password2} = e.target.elements;

            if(password.value !== password2.value)throw new Error("🚦 Error, passwords do not match");
        
            await createUserWithEmailAndPassword(auth,email.value,password.value);
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
                <h2>SIGNUP HERE</h2>
                <form onSubmit={signupHandler}>
                    <div className={styles.inputDiv}>
                        <label htmlFor="email">EMAIL</label><br />
                        <input name="email" id="email" type="email" placeholder="email" required/>
                    </div>
                    <div className={styles.inputDiv}>
                    <label htmlFor="password">PASSWORD</label><br />
                        <input name="password" id="password" type="password" placeholder="********" required/>
                    </div>
                    <div className={styles.inputDiv}>
                    <label htmlFor="password2">CONFIRM PASSWORD</label><br />
                        <input name="password2" id="password2" type="password" placeholder="********" required/>
                    </div>
                    <button type="submit">SIGNUP</button>
                </form>
                <Link href="/signup">
                    <a>Have Account Already?</a>
                </Link>
            </div>
        )
    }
}
export default Signup;