import React from 'react';
import './AuthContainer.scss';
import forgotImg from "../../assets/forgot.svg";
import { AiOutlineClose } from "react-icons/ai";

const Reset = ({ onLogin }) => {
  return (
		<div className="main-container --flex-center">
			<div className="form-container reset">
				<form className="--form-control">
					<h2 className="--color-danger --text-center">Reset Password</h2>

					<input
						type="email"
						className="--width-100"
						placeholder="Email Address"
					/>

					<button className="--btn --btn-primary --btn-block">Reset Password</button>

					<span className="--text-sm --block --text-center">
						We will email you a reset link{" "}
					</span>
          <div className="close" onClick={() => onLogin()}>
            <AiOutlineClose color='red' />
          </div>
				</form>
			</div>

			<div className="img-container">
				<img src={forgotImg} alt="Forgot Password" />
			</div>
		</div>
  );
}

export default Reset;