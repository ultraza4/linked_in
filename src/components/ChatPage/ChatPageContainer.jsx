import { connect } from "react-redux";
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/ChatPageReducer"
import ChatPage from "./ChatPage"

const mapStateToProps = (state) => {
    return {
        ChatPage: state.ChatPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSendMessage: () => { dispatch(sendMessageActionCreator()) },
        onUpdateNewMessageText: (text) => { dispatch(updateNewMessageTextActionCreator(text)) }
    }
}

const ChatPageContainer = connect(mapStateToProps, mapDispatchToProps)(ChatPage);

export default ChatPageContainer;