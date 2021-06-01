import React, { useRef } from 'react'
import './LoginForm.css'
import knowsy2 from "../../knowsy2.png"

function LoginForm({ onLogin }) {

	const formRef = useRef();
	const userNameRef = useRef();
	const passwordRef = useRef();

	return (
			<form
				ref={formRef}
				onSubmit={(e) => {
					e.preventDefault();
					return onLogin({
						username: userNameRef.current.value,
						password: passwordRef.current.value
					});
				}}
			>
				<div className="login-content">
					<img src={knowsy2}/>
				<div className="form-group"><h1>Welcome back!</h1>
					<input className="form-control" ref={userNameRef} type='text' name="username" placeholder='Enter Username' /><div className="input-title"><p>Username</p></div><br />
					
					<input className="form-control" ref={passwordRef} type='password' name="password" placeholder='Password' /><div className="input-title"><p>Password</p></div><br />
					<button className="login" type='submit'>
						Submit
						</button>
				</div>
				</div>
			</form>
	)
}


export default LoginForm