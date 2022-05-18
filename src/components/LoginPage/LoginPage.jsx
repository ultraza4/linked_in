import React from "react";
import { Form, Field } from 'react-final-form'
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { Input } from "../../common/FormControl";
import { requiredField } from "../../common/validators";
import { login } from "../../redux/authReducer";

const LoginForm = (props) => (
   <Form
      onSubmit={props.onSubmit}

      render={({ handleSubmit, invalid }) => (
         <form onSubmit={handleSubmit}>
            <h2>Simple Default Input</h2>
            <div>
               <div>Login</div>
               <Field name="email" validate={requiredField} component={Input} placeholder="Enter email" />
            </div>
            <div>
               <div>Password</div>
               <Field name="password" validate={requiredField} component={Input} type="password" placeholder="Enter password" />
            </div>
            <div>
               <Field name="rememberMe" component={Input} type={"checkbox"} /> Remember Me
            </div>
            {props.errorMessage.length !== 0 && <div> {props.errorMessage} </div>}
            <button type="submit" disabled={invalid}>Log In</button>
         </form>
      )}
   />
)

const LoginPage = (props) => {
   let onSubmit = (data) => {
      props.login(data.email, data.password, data.rememberMe)
   }

   if(props.isAuth) {
     return <Navigate to={'/ProfilePageContainer'} />  
   }

   return (<>
      <h1>Login Page</h1>
      <LoginForm onSubmit={onSubmit} errorMessage={props.errorMessage}/>
   </>
   )
}

const mapStateToProps = (state) => ({
   isAuth: state.Auth.isAuth,
   errorMessage: state.Auth.errorMessage
})

export default connect(mapStateToProps, { login })(LoginPage);