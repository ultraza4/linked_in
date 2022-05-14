import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { sendMessage } from "../../redux/ChatPageReducer"
import ChatPage from "./ChatPage"

class ChatPageAPI extends React.Component{

    render() {
        return <>
            <ChatPage ChatPage = {this.props.ChatPage}
                      onSendMessage = {this.props.sendMessage}
                    />
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        ChatPage: state.ChatPage
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, { sendMessage })
)(ChatPageAPI)