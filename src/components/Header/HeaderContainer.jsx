import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { authUserThunkCreator } from "../../redux/authReducer"

class HeaderContainerAPI extends React.Component {

   componentDidMount() {
      this.props.authUserThunkCreator();
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

export default connect(mapStateToProps, { authUserThunkCreator })(HeaderContainerAPI);