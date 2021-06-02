import React, { useRef } from 'react'
import './RegisterForm.css'
import knowsy4 from "../../knowsy4.png"
// class RegisterForm extends React.Component {
function RegisterForm({ onRegister }) {
	// refs
	const formRef = useRef();
	const userNameRef = useRef();
	const emailRef = useRef();
	const dobRef = useRef();
	const passwordRef = useRef();

	return (
			<form
				ref={formRef}
				onSubmit={(e) => {
					e.preventDefault();
					if (passwordRef.current.value.length < 6) {
						alert("Password must be at least 6 characters long!");
					} else {
						return onRegister({
							username: userNameRef.current.value,
							password: passwordRef.current.value
						});
					}
				}}
			>
				<div className="signup-content">
				<img src={knowsy4}/>
				<div className="form-group"><h1>Sign Up!</h1>
					<input className="form-control" ref={userNameRef} type='text' name="username" placeholder='Enter Username' /><div className="input-title"><p>Username</p></div><br />
					<input className="form-control" ref={emailRef} type='text' name="email" placeholder='Enter Email' /><div className="input-title"><p>Email</p></div><br />
					<input className="form-control" ref={dobRef} type='text' name="dob" placeholder='MM/DD/YYYY' /><div className="input-title"><p>Date of Birth</p></div><br />
					<input className="form-control" ref={passwordRef} type='password' name="password" placeholder='Password' />
					<div className="input-title"><p>Password</p></div><br />
					<button className="register" type='submit'>Submit</button>
				</div>
				
				</div>
			</form>
	)
}


export default RegisterForm