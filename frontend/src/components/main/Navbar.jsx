import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import { enqueueSnackbar } from 'notistack'

const Navbar = () => {

    const navigate = useNavigate();

     const signupForm = useFormik({
       initialValues:{
        name:"",
        email:"",
        password:"",
        cpassword:""
       },
       onSubmit: async(values) => {
        console.log(values);
        const res = await fetch("http://localhost:5000/user/add",{
            method:"POST",
            body:JSON.stringify(values),  
            headers:{
                "Content-Type":"application/json"
            }
        })
        console.log(res.status);
        if(res.status === 200) {
            enqueueSnackbar("Signup Successfully", {variant:"success"})
        }else{
            enqueueSnackbar("Signup failed",{variant:"error"})
        }
       }
     })

     const loginForm = useFormik({
        initialValues:{
        
         email:"",
         password:"",
        
        },
        onSubmit: async(values) => {
         console.log(values);
         const res = await fetch("http://localhost:5000/user/authenticate",{
             method:"POST",
             body:JSON.stringify(values),  
             headers:{
                 "Content-Type":"application/json"
             }
         })
         console.log(res.status);
         if(res.status === 200) {
             enqueueSnackbar("Login Successfully", {variant:"success"})
             navigate("/main/contact")
         }else{
             enqueueSnackbar("Login failed",{variant:"error"})
         }
        }
      })
    return (
        <div>

            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        CERL
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Link
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Action
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Another action
                                        </a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Something else here
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true">
                                    Disabled
                                </a>
                            </li>
                        </ul>
                        <div className="d-flex"  >
                            {/*for signup*/}
                            <>
                                <button
                                    type="button"
                                    className="btn btn-primary me-3 "
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                >
                                    Signup
                                </button>
                                <div className="modal fade " id="exampleModal" tabIndex={-1}>
                                    <div className="modal-dialog ">
                                        <div className="modal-content w-75 ">
                                            <div className="modal-header text-center">
                                                <h1 className="fs-2">Signup</h1>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" />
                                            </div>
                                            <div className="modal-body">
                                                <form action="" onSubmit={signupForm.handleSubmit}>
                                                
                                                    <div className="mb-2">
                                                        <label htmlFor="" className="form-label">
                                                            Name
                                                        </label>
                                                        <input
                                                            type="text"
                                                            id='name'
                                                            value={signupForm.values.name}
                                                            onChange={signupForm.handleChange}
                                                            className="form-control form-control-sm"
                                                            placeholder="Enter Your Name"
                                                        />
                                                        {
                                                            signupForm.touched.name && 
                                                            <span className="text-danger">
                                                                {signupForm.errors.name}
                                                            </span>
                                                        }
                                                    </div>
                                                    <div className="mb-2">
                                                        <label htmlFor="" className="form-label">
                                                            Email
                                                        </label>
                                                        <input
                                                            type="email"
                                                            id='email'
                                                            value={signupForm.values.email}
                                                            onChange={signupForm.handleChange}
                                                            className="form-control form-control-sm"
                                                            placeholder="Enter Your Email"
                                                        />

{
                                                            signupForm.touched.email && 
                                                            <span className="text-danger">
                                                                {signupForm.errors.email}
                                                            </span>
                                                        }
                                                    </div>
                                                    <div className="mb-2">
                                                        <label htmlFor="" className="form-label">
                                                            Password
                                                        </label>
                                                        <input
                                                            type="password"
                                                            id='password'
                                                            value={signupForm.values.password}
                                                            onChange={signupForm.handleChange}
                                                            className="form-control form-control-sm"
                                                            placeholder="Enter You  Password"
                                                        />
                                                         {
                                                            signupForm.touched.password && 
                                                            <span className="text-danger">
                                                                {signupForm.errors.password}
                                                            </span>
                                                        }
                                                    </div>
                                                    <div className="mb-2">
                                                        <label htmlFor="" className="form-label">
                                                            Confirm Password
                                                        </label>
                                                        <input
                                                            type="password"
                                                            id='cpassword'
                                                            value={signupForm.values.cpassword}
                                                            onChange={signupForm.handleChange}
                                                            className="form-control form-control-sm"
                                                            placeholder="Repeat Your Password"
                                                        />
                                                         {
                                                            signupForm.touched.cpassword && 
                                                            <span className="text-danger">
                                                                {signupForm.errors.cpassword}
                                                            </span>
                                                        }
                                                    </div>
                                                    <div className="text-center my-3">
                                                        <button  type='submit' className="btn btn-primary btn-sm form-control">
                                                            Signup
                                                        </button>
                                                    </div>
                                                    <div className="text-center my-3">
                                                        <button
                                                            type="button"
                                                            className="btn btn-primary form-control btn-sm me-3"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#example1Modal"
                                                        >
                                                            SignIn
                                                        </button>
                                                    </div>
                                                    </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>

                            {/* foor signup*/}
                            <>

                                <div className="modal fade " id="example1Modal" tabIndex={-1}>
                                    <div className="modal-dialog ">
                                        <div className="modal-content w-75 ">
                                            <div className="modal-header text-center">
                                                <h1 className="fs-2">Signup</h1>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" />
                                            </div>
                                            <div className="modal-body">
                                                <form action=""  onSubmit={loginForm.handleSubmit}>

                                                    <div className="mb-2">
                                                        <label htmlFor="" className="form-label">
                                                            Email
                                                        </label>
                                                        <input
                                                            type="text"
                                                            id='email'
                                                            value={loginForm.values.email}
                                                            onChange={loginForm.handleChange}
                                                            className="form-control form-control-sm"
                                                            placeholder="Enter Your Email"
                                                        />
                                                    </div>
                                                    <div className="mb-2">
                                                        <label htmlFor="" className="form-label">
                                                            Password
                                                        </label>
                                                        <input
                                                            type="text"
                                                            id='password'
                                                            value={loginForm.values.password}
                                                            onChange={loginForm.handleChange}
                                                            className="form-control form-control-sm"
                                                            placeholder="Enter You  Password"
                                                        />
                                                    </div>

                                                    <div className="text-center my-3">
                                                        <button type='submit' className="btn btn-primary btn-sm form-control">
                                                            SignIn
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        </div>
                    </div>
                </div>
            </nav>



        </div>
    )
}

export default Navbar