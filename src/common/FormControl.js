import React from "react";

const FormControl = ({ meta, input, ...props }) => {
   return (
      <>
         <div>
            {props.children}
         </div>
         {meta.error && meta.touched && <span>{meta.error}</span>}
      </>
   )
}

export const Textarea = (props) => {
   return <FormControl {...props}><textarea {...props.input}></textarea></FormControl>
}

export const Input = (props) => {
   return <FormControl {...props}><input {...props.input}></input></FormControl>
}