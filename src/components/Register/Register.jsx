/** @format */

import React, { useContext, useState } from "react";
import NavBar from "../Share/NavBar/NavBar";
import SocialLogin from "../SocialLogin/SocialLogin";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useTitle from "../../CustomHooks/useTitle/useTitle";
import { AuthContextAPI } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import Footer from "../Share/Footer/Footer";

const Register = () => {
	useTitle("Register");
	// contex function
	const { handelRegisterUser, handelUpdate } = useContext(AuthContextAPI);

	// set location
	const location = useLocation(); //TODO******
	const from = location.state?.from?.pathname || "/";
	const navigate = useNavigate();

	const [showPassword, setShowPassword] = useState(false);
	const [error, setError] = useState(null); // TODO **********
	const handelSingUp = e => {
		e.preventDefault();
		const form = e.target;
		const name = form.name.value;
		const email = form.email.value;
		const password = form.password.value;
		const photo = form.photo.value;

		handelRegisterUser(email, password)
			.then(userCredential => {
				// Signed in
				const user = userCredential.user;
				// ...
				handelUpdate(name, photo)
					.then(() => {
						Swal.fire({
							icon: "success",
							title: "Congratulcation",
							text: "Successfully sing up!",
							footer: '<a href="">Why do I have this issue?</a>',
						});
						navigate(from)
					})
					.catch(error => {
						const errorCode = error.code;
						const errorMessage = error.message;
						setError(errorMessage);
					});
			})
			.catch(error => {
				const errorCode = error.code;
				const errorMessage = error.message;
				setError(errorMessage);
			});
	};

	return (
		<div>
			<NavBar />
			<div className='page-container bg-[#F8F9FD] w-full h-[calc(100vh-60px)] flex items-center justify-center'>
				<div className='grid md:grid-cols-2 shadow-xl'>
					<div className='px-6 py-10 bg-white'>
						<h1 className='text-2xl font-bold'>Sing Up</h1>

						<SocialLogin />
						<p className='text-center mb-5'>
							<small>or use your account</small>
						</p>

						<form onSubmit={handelSingUp}>
							{/* email */}
							<div className='mb-5'>
								<input
									type='text'
									name='name'
									id=''
									placeholder='NAME'
									className='bg-[#F2F2F2] py-2 px-2 w-80 outline-none border rounded-md'
								/>
							</div>
							{/* email */}
							<div className='mb-5'>
								<input
									type='text'
									name='email'
									id=''
									placeholder='EMAIL'
									className='bg-[#F2F2F2] py-2 px-2 w-80 outline-none border rounded-md'
								/>
							</div>

							{/* password  */}
							<div className='mb-5 flex items-center relative'>
								<input
									type={!showPassword ? `password` : "text"}
									name='password'
									id=''
									placeholder='PASSWORD'
									className='bg-[#F2F2F2] py-2 px-2 w-80 outline-none border rounded-md'
								/>
								<div className='absolute right-2'>
									{!showPassword ? (
										<FaEyeSlash
											className='cursor-pointer'
											onClick={() =>
												setShowPassword(!showPassword)
											}
										/>
									) : (
										<FaEye
											className='cursor-pointer'
											onClick={() =>
												setShowPassword(!showPassword)
											}
										/>
									)}
								</div>
							</div>

							{/* email */}
							<div className='mb-5'>
								<input
									type='text'
									name='photo'
									id=''
									placeholder='PHOTO URL'
									className='bg-[#F2F2F2] py-2 px-2 w-80 outline-none border rounded-md'
								/>
							</div>
							<p className='text-center text-red-500'>
								<small>{error}</small>
							</p>
							<div>
								<input
									type='submit'
									value='Sing Up'
									className='w-full bg-gradient-to-r from-[#FF4857] to-[#FF4583] text-white py-2 rounded-md font-bold cursor-pointer'
								/>
							</div>
						</form>
					</div>
					<div className='hidden bg-gradient-to-r from-[#FF4857] to-[#FF4583] md:flex flex-col items-center justify-center text-white gap-4'>
						<h1 className='text-3xl font-bold'>
							Welcome to singup
						</h1>
						<p>Already have an account?</p>

						<Link to={"/login"}>
							{" "}
							<button className='border border-white px-5 py-2 rounded-md overflow-hidden'>
								Sing In
							</button>
						</Link>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Register;
