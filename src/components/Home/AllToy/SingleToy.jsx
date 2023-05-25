import { FaArrowRight, FaHeart, FaStar} from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';


import AOS from "aos";
import "aos/dist/aos.css"; 

AOS.init();
const SingleToy = ({ toy }) => {
	const { _id, img, img2, name, price, rating } = toy;
	
    return (
		<>
			<div data-aos='zoom-out-down'>
				<div className='relative overflow-hidden cursor-pointer single-toy-container gallary-div'>
					<div className='overflow-hidden relative cursor-pointer  rounded-md min-h-[400px]'>
						<img
							src={img}
							alt=''
							className='gallary-img1 h-full  duration-300 w-[100%] '
						/>
						<img
							src={img2}
							alt=''
							className='gallary-img2 duration-500  h-full absolute top-0 left-1/2 -translate-x-1/2 w-0 opacity-0 '
						/>
					</div>
					<div className='text-center py-2'>
						<h4>{name}</h4>
						<p className='font-bold'>${price}</p>
						<Rating
							placeholderRating={rating}
							emptySymbol={<FaStar className='text-gray-400' />}
							placeholderSymbol={
								<FaStar className='text-yellow-400' />
							}
							fullSymbol={<FaStar className='text-yellow-400' />}
							readonly
						/>
					</div>
					<div className='flex flex-col gap-3 items-center absolute top-1/2 -translate-y-1/2 z-50 right-1 translate-x-10 details-btn duration-300'>
						<div className='toy-view-details-btn'>
							<FaHeart />
						</div>
						<Link to={`toy/${_id}`}>
							<div
								className='toy-view-details-btn'
								title='view details'
							>
								<label
									htmlFor='my-modal-3'
									className='cursor-pointer'
								>
									<FaArrowRight />
								</label>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default SingleToy;