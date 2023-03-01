import { useFormik } from "formik";
import { useState } from "react";
import { basicSchema } from "../schemas/schema";


function BasicForm() {
    const [createAccountTrue, setCreateAccountTrue] = useState(false);


    // onSubmit function for submitting 
    async function onSubmit(values, actions) {

        // Instead of console.log put in context push for data. ctx.users.push({name,email,password,balance:100});
        console.log(values);
        console.log(actions);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        
        // Resetting form not working...
        alert(`Success. Your account has been created!`);
        actions.resetForm({
            value: {
                // the type of `values` inferred to be Blog
                userName: '',
                email: '',
                password: '',
                confirmPassword: ''
        },
        });
        setCreateAccountTrue(true);
    }
    // 


    // destrucuring formik
    const { values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues: {
            userName: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        // with below the form will use the schema to validate the form
        validationSchema: basicSchema,
        onSubmit,
    });

    console.log(errors);


    return (
        <div style={{ borderSizing: 'border-box', backgroundColor: 'lightblue' }}>
            <form onSubmit={handleSubmit} autoComplete="off">

                <div className="card" style={{ width: '18rem', marginRight: 'auto', marginLeft: 'auto', marginTop: '10%', backgroundColor: 'gray' }}>
                    <h2 style={{ marginRight: 'auto', marginLeft: 'auto', marginTop: '2%', padding: '2%', backgroundColor: 'lightblue' }}>Create Account</h2>
                    <hr />
                    {/* ADD IMAGE    <img src="..." class="card-img-top" alt="..." /> */}
                    <div className="card-body">

                        <label htmlFor="userName">Username</label>
                        <input
                            style={{ marginBottom: '7%' }}
                            id="userName"
                            type="text"
                            placeholder="Enter Username"
                            value={values.userName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={errors.userName && touched.userName ? "input-error form-control" : "form-control"} />
                        {errors.userName && touched.userName && <p className="error">{errors.userName}</p>}

                        <label htmlFor="email">Email</label>
                        <input
                            style={{ marginBottom: '7%' }}
                            id="email"
                            type="email"
                            placeholder="Enter email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={errors.email && touched.email ? "input-error form-control" : "form-control"} />
                        {errors.email && touched.email && <p className="error">{errors.email}</p>}

                        <label htmlFor="password">Password</label>
                        <input
                            style={{ marginBottom: '7%' }}
                            id="password"
                            type="password"
                            placeholder="Enter password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={errors.password && touched.password ? "input-error form-control" : "form-control"} />
                        {errors.password && touched.password && <p className="error">{errors.password}</p>}

                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            style={{ marginBottom: '7%' }}
                            id="confirmPassword"
                            type="password"
                            placeholder="Confirm password"
                            value={values.confirmPassword}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={errors.confirmPassword && touched.confirmPassword ? "input-error form-control" : "form-control"} />
                        {errors.confirmPassword && touched.confirmPassword && <p className="error">{errors.confirmPassword}</p>}

                        {/* <button disabled={isSubmitting} type="submit">Create Account</button> */}
                        <button style={{ marginTop: '5%' }} disabled={isSubmitting} type="submit" className="btn btn-success">{createAccountTrue ? 'Create Another Account' : 'Create Account'}</button>
                    </div>
                </div>
            </form>

        </div>
    );
}
export default BasicForm;
