import React, { useContext } from 'react';
import { AuthContextAPI } from '../../AuthProvider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
	// set location
	const location = useLocation(); //TODO******
	const from = location.state?.from?.pathname || "/";
	const navigate = useNavigate();

	const { handelSingInWithGoogle } = useContext(AuthContextAPI);
	const handelGoolgeLogin = () => {
		handelSingInWithGoogle()
			.then(res => navigate(from))
			.catch(err => console.log(err.message));
	};
	return (
		<div className='my-5'>
			<div className='flex items-center justify-center gap-6'>
				<button
					onClick={handelGoolgeLogin}
					className='w-[40px] h-[40px] border border-gray-600 rounded-full hover:bg-gradient-to-r from-[#FF4857] to-[#FF4583] hover:text-white hover:border-0 duration-200'
				>
					G
				</button>
				<button className='w-[40px] h-[40px] border border-gray-600 rounded-full hover:bg-gradient-to-r from-[#FF4857] to-[#FF4583] hover:text-white hover:border-0 duration-200'>
					F
				</button>
			</div>
		</div>
	);
};

export default SocialLogin;