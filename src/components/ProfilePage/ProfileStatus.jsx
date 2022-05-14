import React from "react";
import s from "./ProfilePage.module.css";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.ProfilePage.userStatus
    }
    componentDidMount() {
        this.props.setProfileStatusThunk(this.props.userId);
        // this.setState({
        //     status: this.props.ProfilePage.userStatus
        // });
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevProps.ProfilePage.userStatus !== this.props.ProfilePage.userStatus) {
            this.setState({
                status: this.props.ProfilePage.userStatus
            });
        }
    } 
    activateEditMode() {
        this.setState({
            editMode: true
        })
    }

    deActivateEditMode() {
        this.setState({
            editMode: false
        });
        this.props.updateStatusThunk(this.state.status);
    }

    onStatusChange(e) {
        this.setState({
            status: e.currentTarget.value
        });
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
                    <div className={s.status}>
                        <input autoFocus={true}
                        onBlur={this.deActivateEditMode.bind(this)} 
                        onChange={this.onStatusChange.bind(this)}
                        value={this.state.status}></input>
                    </div>
                }
            </>
        )
    }
}
export default ProfileStatus;