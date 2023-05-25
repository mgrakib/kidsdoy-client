import React from 'react';
import error from '../../assets/Images/404.jpg'
import { Link } from 'react-router-dom';
import useTitle from '../../CustomHooks/useTitle/useTitle';

const ErrorPage = () => {
	useTitle("Error")
    return (
		<div>
			<div className='w-[100vw] h-[100vh] relative overflow-hidden'>
				<img
					src={error}
					alt=''
					className='w-full h-full object-cover'
				/>

				<div className='absolute bottom-5 left-1/2 -translate-x-1/2'>
					<Link to={'/'}>
						<button className='bg-white py-2 px-8 rounded-md text-black font-black hover:bg-gray-300'>
							Go to Home
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ErrorPage;