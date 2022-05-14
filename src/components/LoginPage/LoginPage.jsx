import React from "react";
import { Form, Field } from 'react-final-form'

const onSubmit = (data) => {
   console.log(data)
 }

export const LoginForm = (props) => (
   <Form
      onSubmit={onSubmit}
      render={ ({ handleSubmit }) => (
         <form onSubmit={handleSubmit}>
            <h2>Simple Default Input</h2>
            <div>
               <div>Login</div>
               <Field name="login" component="input" placeholder="Enter login" />
            </div>
            <div>
               <div>Password</div>
               <Field name="password" component="input" type="password" placeholder="Enter password" />
            </div>
            <button type="submit">Submit</button>
         </form>
      )}
   />
)


const LoginPage = () => {
   return (<>
      <h1>Login Page</h1>
      <LoginForm />
   </>
   )
}

export default LoginPage;