import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { setUserData } from "../../redux/authReducer"
import * as axios from "axios";

class HeaderContainerAPI extends React.Component {

   componentDidMount() {
      axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true })
         .then(response => {
            if (response.data.resultCode === 0) {
               let { email, id, login } = response.data.data;
               this.props.setUserData(email, id, login);
            }
         })
   }
   render() {
      return <>
         <Header {...this.props} />
      </>
   }
}

const mapStateToProps = (state) => {
   return {
      isAuth: state.Auth.isAuth,
      login: state.Auth.login,
   }
}

export default connect(mapStateToProps, { setUserData })(HeaderContainerAPI);