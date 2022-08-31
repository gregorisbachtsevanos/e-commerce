import { useState } from "react";

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component"

const defaultFormFields = {
   displayName: "",
   email: "",
   password: "",
   confirmPassword: "",
};

const SignUpForm = () => {
   const [formFields, setFormFields] = useState(defaultFormFields);
   const { displayName, email, password, confirmPassword } = formFields;
   
   const handleSubmit = async (e) => {
      e.preventDefault();

      if(password !== confirmPassword){
         alert('Passwords not match');
         return;
      }

      try {
         const { user } = await createAuthUserWithEmailAndPassword(email, password)
         createUserDocumentFromAuth(user, { displayName });
         setFormFields(defaultFormFields)         
      } catch (error) {
         if(error.code === 'auth/email-already-in-use'){
            alert('Email already in use');
         }
         console.error(error);
      }
   }

   // console.log(formFields);

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormFields({...formFields, [name]: value})
   };

   return (
      <div>
         <h1>Sign Up with your email and password</h1>
         <form onSubmit={handleSubmit}>
            <FormInput
               label="Display Name"
               inputOptions={{
                  required:true,
                  type:"text",
                  name:'displayName',
                  value:displayName,
                  onChange:handleChange
               }}
            />

            <FormInput
               label="Email"
               inputOptions={{
                  required:true,
                  type:"email",
                  name:'email',
                  value:email,
                  onChange:handleChange
               }}
            />

            <FormInput
               label="Password"
               inputOptions={{
                  required:true,
                  type:"password",
                  name:'password',
                  value:password,
                  onChange:handleChange
               }}
            />

            <FormInput
               label="Confirm Password"
               inputOptions={{
                  required:true,
                  type:"password",
                  name:'confirmPassword',
                  value:confirmPassword,
                  onChange:handleChange
               }}
            />

            <button type="submit">Sign Up</button>
         </form>
      </div>
   );
};

export default SignUpForm;
