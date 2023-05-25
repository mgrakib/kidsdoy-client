import React from 'react';
import { FaStar } from 'react-icons/fa';
import Rating from 'react-rating';

const RelatedSingleProduct = ({ product }) => {
    const { img, name, price, rating } = product;
    return (
		<div className='mb-5 flex items-center gap-2'>
			<div className='w-[90px] h-[80px]'>
				<img
					src={img}
					alt=''
					className='w-full h-full object-cover rounded-md'
				/>
			</div>
			<div>
				<p className='hover:text-[#E94A4A] cursor-pointer'>{name}</p>
				<p className='font-bold'>${price}</p>
				<Rating
					placeholderRating={rating}
					emptySymbol={<FaStar className='text-gray-400' />}
					placeholderSymbol={<FaStar className='text-yellow-400' />}
					fullSymbol={<FaStar className='text-yellow-400' />}
                    readonly
                    className='text-[10px]'
				/>
			</div>
		</div>
	);
};

export default RelatedSingleProduct;