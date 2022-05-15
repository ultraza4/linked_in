import React from "react";
import { Form, Field } from 'react-final-form'
import { Input } from "../../common/FormControl";
import { requiredField } from "../../common/validators";

const onSubmit = (data) => {
   console.log(data)
}

export const LoginForm = (props) => (
   <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
         <form onSubmit={handleSubmit}>
            <h2>Simple Default Input</h2>
            <div>
               <div>Login</div>
               <Field name="login" validate={requiredField} component={Input} placeholder="Enter login" />
            </div>
            <div>
               <div>Password</div>
               <Field name="password" validate={requiredField} component={Input} type="password" placeholder="Enter password" />
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