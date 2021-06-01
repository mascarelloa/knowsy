import React, { useRef } from 'react'

// class RegisterForm extends React.Component {
function RegisterForm({ onRegister }) {
	// refs
	const formRef = useRef();
	const userNameRef = useRef();
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
				<div className="form-group">
					<input className="form-control" ref={userNameRef} type='text' name="username" placeholder='Enter Username' /><br />
					<input className="form-control" ref={passwordRef} type='password' name="password" placeholder='Password' /><br />
					<button className="btn btn btn-primary" type='submit'>Submit</button>
				</div>
			</form>
	)
}


export default RegisterForm