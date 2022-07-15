import React from "react";
import registerImg from "../../assets/register.svg";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import "./AuthContainer.scss";

const Register = ({ onLogin, onShowPassword, onTogglePassword }) => {
	return (
		<div className="main-container --flex-center">
			<div className="form-container">
				<form className="--form-control">
					<h2 className="--color-danger --text-center">Register</h2>

					<input type="text" className="--width-100" placeholder="Username" />

					<input
						type="email"
						className="--width-100"
						placeholder="Email Address"
					/>

					<div className="password">
						<input
							type={onShowPassword ? "text" : "password"}
							className="--width-100"
							placeholder="Password"
						/>
						<span className="icon" onClick={onTogglePassword}>
							{onShowPassword ? (
								<AiOutlineEyeInvisible />
							) : (
								<AiOutlineEye />
							)}
						</span>
					</div>

					<button className="--btn --btn-primary --btn-block">Register</button>

					<span className="--text-sm --block">
						Have an account?{" "}
						<a href="#" className="--text-sm" onClick={() => onLogin()}>
							Login
						</a>
					</span>
				</form>
			</div>

			<div className="img-container">
				<img src={registerImg} alt="Register" />
			</div>
		</div>
	);
};

export default Register;
