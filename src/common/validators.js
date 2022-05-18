export const requiredField = (value) => (value ? undefined : "Field is required")

export const maxLenghtCreator = (maxLength) => (value) => (
    (value.length > maxLength ? `Maxlength is ${maxLength} symbols` : undefined)
)