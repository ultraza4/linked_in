import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { authMeThunkCreator } from "../../redux/authReducer"

class HeaderContainerAPI extends React.Component {

   componentDidMount() {
      this.props.authMeThunkCreator();
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

export default connect(mapStateToProps, { authMeThunkCreator })(HeaderContainerAPI);