import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { sendMessage, updateNewMessageText } from "../../redux/ChatPageReducer"
import ChatPage from "./ChatPage"

class ChatPageAPI extends React.Component{

    render() {
        return <>
            <ChatPage ChatPage = {this.props.ChatPage}
                      onUpdateNewMessageText = {this.props.updateNewMessageText} 
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
    connect(mapStateToProps, { sendMessage, updateNewMessageText })
)(ChatPageAPI)