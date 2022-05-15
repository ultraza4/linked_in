import React from "react";

export const TextareaField = ({ meta, input, buttonName }) => {
   return (
      <>
         <div>
            <textarea {...input}></textarea>
         </div>
         {meta.error && meta.touched && <span>{meta.error}</span>}
         <div>
            <button>{buttonName}</button>
         </div>
      </>
   )
}