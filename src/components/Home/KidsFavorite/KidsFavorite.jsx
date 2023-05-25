import React from 'react';
import bg from "../../../assets/Images/pendant-flag-announcement-banner.png";
import frozen from "../../../assets/Images/products/firozan.jpg";
import firozan1 from "../../../assets/Images/products/firozan_1.jpg";
import firozan2 from "../../../assets/Images/products/firozan_3.jpg";
const KidsFavorite = () => {
    return (
		<div
			style={{
				backgroundImage: `url(${bg})`,
				backgroundSize: "contain",
				backgroundRepeat: "no-repeat",
			}}
			className=' kids-favorite'
		>
			<div className='py-12 md:pt-44 text-center'>
				<p>KID FAVORITES</p>
				<h4 className='text-3xl font-bold mb-4'>New to the shop</h4>
				<div className='page-container grid md:grid-cols-3 gap-10'>
					<div>
						<div className='p-4 bg-[#608CD0] h-[340px]'>
							<img
								src={frozen}
								alt=''
								className='h-full object-cover w-full'
							/>
						</div>
						<p className='text-2xl font-bold'>Frozen</p>
						<button>Shop Now</button>
					</div>
					<div>
						<div className='p-4 bg-[#98D570] h-[340px]'>
							<img
								src={firozan1}
								alt=''
								className='h-full object-cover w-full'
							/>
						</div>
						<p className='text-2xl font-bold'>Frozen</p>
						<button>Shop Now</button>
					</div>
					<div>
						<div className='p-4 bg-[#608CD0] h-[340px]'>
							<img
								src={firozan2}
								alt=''
								className='h-full object-cover w-full'
							/>
						</div>
						<p className='text-2xl font-bold'>Frozen</p>
						<button>Shop Now</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default KidsFavorite;