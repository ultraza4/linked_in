import React from "react";
import s from "./ProfilePage.module.css";

class ProfileStatus extends React.Component {

    componentDidMount() {
        this.props.setProfileStatusThunk(this.props.userId)
    }

    state = {
        editMode: false,
    }

    activateEditMode() {
        this.setState({
            editMode: true
        })
    }

    deActivateEditMode() {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <>
                {!this.state.editMode &&
                    <div className={s.status}>
                        <span onDoubleClick={this.activateEditMode.bind(this)}>
                            {this.props.ProfilePage.userStatus}
                        </span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true} 
                        onBlur={this.deActivateEditMode.bind(this)} 
                        value={this.props.ProfilePage.userStatus}></input>
                    </div>
                }
            </>
        )
    }
}
export default ProfileStatus;