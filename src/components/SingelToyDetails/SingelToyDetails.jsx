import React, { useContext, useState } from 'react';
import NavBar from '../Share/NavBar/NavBar';
import Footer from '../Share/Footer/Footer';
import { useLoaderData } from 'react-router-dom';
import { AuthContextAPI } from '../../AuthProvider/AuthProvider';
import Rating from 'react-rating';
import { FaStar } from 'react-icons/fa';
import useTitle from '../../CustomHooks/useTitle/useTitle';

const SingelToyDetails = () => {
    useTitle("Show Details")
    const toyDetails = useLoaderData();
    const {
		name,
		description,
		img,
		price,
		stock,
		rating,
		catagory,
		seller,
		quantity,
		seller_email,
	} = toyDetails;


    
    return (
		<div>
			<NavBar />
			<div className='page-container grid md:grid-cols-2 gap-4 md:gap-10 py-5 md:py-10'>
				<div>
					<img
						src={img}
						alt=''
					/>
				</div>
				<div className='flex flex-col gap-2'>
					<h1 className='text-4xl font-bold'>{name}</h1>
					<p className='text-gray-500 text-2xl'>
						Seller : <span className='font-bold '>{seller}</span>
					</p>
					<p className='text-gray-500 text-2xl'>
						Seller Email :{" "}
						<span className='font-bold '>{seller_email}</span>
					</p>
					<div>
						<Rating
							placeholderRating={rating}
							emptySymbol={<FaStar className='text-gray-400' />}
							placeholderSymbol={
								<FaStar className='text-yellow-400' />
							}
							fullSymbol={<FaStar className='text-yellow-400' />}
							readonly
							className='text-[10px]'
						/>
					</div>
					<p className='text-[#E94A4A] text-2xl font-bold'>
						${price}
						<p className='text-gray-500 text-xs'>Tax excluded</p>
					</p>
					<p className='text-gray-500 text-2xl'>
						Available Quantity :{" "}
						<span className='font-bold '>{quantity}</span>
					</p>
					<p className='text-gray-500 text-2xl'>
						Description :{" "}
						<span className='font-bold '>{description}</span>
					</p>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default SingelToyDetails;