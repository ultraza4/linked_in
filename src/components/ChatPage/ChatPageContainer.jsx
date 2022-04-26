import { connect } from "react-redux";
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/ChatPageReducer"
import ChatPage from "./ChatPage"

const mapStateToProps = (state) => {
    return {
        ChatPage: state.ChatPage
    }
}

const mapDispatchToProps = (store) => {
    return {
        onSendMessage: () => { store.dispatch(sendMessageActionCreator()) },
        onUpdateNewMessageText: (text) => { store.dispatch(updateNewMessageTextActionCreator(text)) }
    }
}

const ChatPageContainer = connect(mapStateToProps, mapDispatchToProps)(ChatPage)

export default ChatPageContainer;