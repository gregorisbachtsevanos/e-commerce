import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
   auth,
   signInWithGooglePopup,
   signInWithGoogleRedirect,
   createUserDocumentFromAuth
} from "../../utils/firebase/firebase.utils"
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
   useEffect(() => {
      const signIn = async () => {
         const res = await getRedirectResult(auth);
         if(res){
            const userDocRef = createUserDocumentFromAuth(res.user)
         }
      }
      signIn()
   }, [])

   const logGoogleUser = async () => {
      const { user } = await signInWithGooglePopup();
      const userDocRef = createUserDocumentFromAuth(user)
   }
   return (
      <div>
         <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign in with Google Popup</button>
         </div>
         <SignUpForm />
         {/* <div>
            <h1>Sign In Redirect</h1>
            <button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</button>
         </div> */}
      </div>
   )
}

export default SignIn