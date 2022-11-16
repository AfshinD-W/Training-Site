import { FC } from "react"
import { Field, ErrorMessage } from "formik"

interface IInputprops {
    label: string,
    name: string,
    type?: string,
    fildClassname?: string,
    errorClassname?: string
}

const Input: FC<IInputprops> = ({
    name,
    label,
    type = "text"
}) => {
    return (
        <div>
            <label>{label}</label>
            <Field name={name} type={type} />
            <ErrorMessage name={name} />
        </div>
    )
}
export default Input