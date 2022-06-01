import { Form, Field } from "react-final-form";
import { Textarea } from "../../common/FormControl";
import { maxLenghtCreator, requiredField } from "../../common/validators";
import userPhoto from "../../assets/images/user.png.png";
import PostsItem from "./PostsItem";
import s from "./ProfilePage.module.css";
import ProfileStatus from "./ProfileStatus";
import { useState } from "react";

const ProfilePage = (props) => {
    const [isEditable, setEdit] = useState(false);

    if (!props.ProfilePage.profile) {
        return "netu nifiga"
    }

    let Posts = props.ProfilePage.posts.map((m) => <PostsItem key={m.id} message={m.message} />)

    let AddPost = (value) => {
        props.addPost(value.newPostText);
    }
    let saveInfo = (value) => {
        setEdit(false);
        props.saveInfo(value);
    }

    const onMainPhotoChange = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    }

    const composeValidators = (...validators) => value =>
        validators.reduce((error, validator) => error || validator(value), undefined)

    return (
        <div className={s.ProfilePage}>
            <div className={s.Header}>
                <img src={props.ProfilePage.profile.photos.large || userPhoto} alt="profile large" />
                <div className={s.name}>{props.ProfilePage.profile.fullName}</div>
                {props.isOwner && <input className={s.photo_input} type={"file"} onChange={onMainPhotoChange} />}
            </div>

            <div className={s.profile_info}>
                {isEditable ?
                    <>
                        <Form
                            onSubmit={saveInfo}
                            initialValues={props.ProfilePage.profile}
                            render={({ handleSubmit }) => (
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <b>Full Name: </b> <br />
                                        <Field
                                            name="fullName"
                                            component="input"
                                        />
                                    </div>
                                    <div>
                                        <b>Looking for a Job: </b> <br />
                                        <Field
                                            name="lookingForAJob"
                                            component="input"
                                            type="checkbox"
                                        />
                                    </div>
                                    <div>
                                        <b>My professional skills:</b> <br />
                                        <Field
                                            name="lookingForAJobDescription"
                                            component="textarea"
                                        />
                                    </div>
                                    <div>
                                        <b>About me:</b> <br />
                                        <Field
                                            name="AboutMe"
                                            component="textarea"
                                        />
                                    </div>
                                    <div>
                                        <button>Save</button>
                                    </div>
                                </form>
                            )}
                        />
                    </>
                    : <>
                        <div>
                            <b>User ID: </b>{props.ProfilePage.profile.userId}
                        </div>
                        <ProfileStatus {...props} userId={props.userId} />
                        <div>
                            <b>Full Name: </b>{props.ProfilePage.profile.fullName}
                        </div>
                        <div>
                            <b>Looking for a Job: </b>{props.ProfilePage.profile.lookingForAJob ? "Yes" : "No"}
                        </div>
                        <div>
                            <b>My professional skills: </b>{props.ProfilePage.profile.lookingForAJobDescription}
                        </div>
                        <div>
                            <b>Contacts: </b>
                            <div>
                                {Object.keys(props.ProfilePage.profile.contacts).map(key => {
                                    return <Contact key={key} contactTitle={key} contactValue={props.ProfilePage.profile.contacts[key]} />
                                })}
                            </div>
                        </div>
                        <br /><button onClick={() => { setEdit(true); }}>Edit</button></>
                }
            </div>

            <div className={s.AddPost}>
                <Form
                    onSubmit={AddPost}
                    render={({ handleSubmit }) => (
                        <form onSubmit={handleSubmit}>
                            <Field
                                name="newPostText"
                                component={Textarea}
                                validate={composeValidators(requiredField, maxLenghtCreator(10))}
                            />
                            <div>
                                <button>Add Post</button>
                            </div>
                        </form>
                    )}
                />

                {/* Old controlable textarea
                <textarea className={s.ProfilePage__textarea} onChange={onChangeText} value={props.ProfilePage.newPostText} name="post" id="" cols="30" rows="2" />
                <button className={s.btn} onClick={AddPost}>Add Post</button> */}
            </div>
            <div className={s.ProfilePage__posts}>
                {Posts}
            </div>
        </div>
    )
}

const Contact = ({ contactTitle, contactValue }) => {
    return <div><b>{contactTitle}: </b>{contactValue}</div>
}

export default ProfilePage;