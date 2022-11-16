import { Formik, Form, Field } from "formik"
import { FC } from "react"

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
                <div>
                    <label>username</label>
                    <Field name="username" type="text" />
                </div>
                <div>
                    <label>email</label>
                    <Field name="email" type="email" />
                </div>
                <div>
                    <label>password</label>
                    <Field name="password" type="password" />
                </div>
                <div>
                    <label>confirm password</label>
                    <Field name="confirmpassword" type="password" />
                </div>
                <button type="submit">singin</button>
            </Form>
        </Formik>

    )
}
export default Register