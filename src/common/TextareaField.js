import React from "react";

export const TextareaField = ({meta, input}) => {

    return (
        <>
            <div>
                <textarea {...input} placeholder="Enter your message"></textarea>
            </div>
            {meta.error && meta.touched && <span>{meta.error}</span>}
            <div>
                <button>Add Post</button>
            </div>
        </>
    )
}