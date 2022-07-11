import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../hoc/Layout'
import {AuthProvider} from "../context/AuthContext";
import{DashboardProvider} from "../context/DashboardContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <DashboardProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </DashboardProvider>
    </AuthProvider> 
  )
}

export default MyApp
