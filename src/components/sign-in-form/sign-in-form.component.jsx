import { useState } from "react"
import FormInput from "../form-input/form-input.component"
import Button from "../button/button.component"
import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    signInAuthUserWithEmailAndPassword
} from "../../utils/firebase/firebase.utils";

import './sign-in-form.styles.scss'

const defaultFormFields = {
    email: "",
    password: ""
}

const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields)
    const { email, password } = formFields

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        try {
            const { user } = await signInAuthUserWithEmailAndPassword(email, password)
            console.log(user)
        } catch (error) {
            switch(error.code){
                case 'auth/wrong-password':
                    alert('Wrong password');
                    break;
                case 'auth/user-not-found':
                    alert('User not found');
                    break;
                default:
                    console.error(error);
            }
        }
    }

    const signInWithGoogle = async () => {
        const user = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user)
     }

    const handleChange = async (e) => {
        const { name, value } = e.target
        setFormFields({...formFields, [name]: value})
    }

    

    return (
        <div className="sign-in-container">
            <h2>Have an account</h2>
            <span>Sign In</span>
            <form onSubmit={handleSubmit}>
                <FormInput 
                    label='Email'
                    inputOptions={{
                        autoComplete:"off",
                        required:true,
                        type:"email",
                        name:'email',
                        value:email,
                        onChange:handleChange
                    }}
                />

                <FormInput
                    label='Password'
                    inputOptions={{
                        autoComplete:"off",
                        required: true,
                        type: 'password',
                        name:'password',
                        value:password,
                        onChange:handleChange
                    }}
                />
                <div className="buttons-container">
                    <Button type="submit">Sign In</Button>
                    <Button type="button" buttonType='google' onClick={signInWithGoogle}>Sign in with Google</Button>
                </div>
            </form>
        </div>
        
    )
}

export default SignInForm