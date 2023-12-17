import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";


const LoginPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/homePage");

        // if (email === "test@gmail.com" && password === "test@123") {
        //     navigate("/homePage");
        // } else {
        //     toast.success("Please enter valid credentials")
        // }
    }
    return (
        <div className='container py-3 my-5 '>
            <div className='row'>
                <div className='col-sm-12 col-md-12 col-lg-12'>
                    <form>
                        <h3>Sign In</h3>
                        <div className="mb-3">
                            <label>Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Enter email"
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Enter password"
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            {/* <div className="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="customCheck1"
                                />
                                <label className="custom-control-label" htmlFor="customCheck1">
                                    Remember me
                                </label>
                            </div> */}
                        </div>
                        <div className="d-grid">
                            <button onClick={handleSubmit} className="btn btn-primary">
                                Submit
                            </button>
                        </div>
                        {/* <p className="forgot-password text-right">
                            Forgot <a href="#">password?</a>
                        </p> */}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;