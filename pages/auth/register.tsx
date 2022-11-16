import { Formik, Form, Field } from "formik"
import { FC } from "react"
import Input from "../../app/shared/Input"

const registerVlues = {
    username: '',
    email: '',
    password: '',
    confirmpassword: ''
}


const Register: FC = () => {
    return (

        <Formik
            initialValues={registerVlues}
            onSubmit={(valuse) => {
                console.log(valuse);
            }}
        >
            <Form>
                <Input label="username" name="username" />
                <Input label="email" name="email" type="email" />
                <Input label="password" name="password" />
                <Input label="confirm password" name="confirmpassword" />
                <button type="submit">singin</button>
            </Form>
        </Formik>

    )
}
export default Register