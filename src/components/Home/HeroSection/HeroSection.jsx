import React from 'react';
import slider_left from '../../../assets/Images/slider.png'
import slider_right from "../../../assets/Images/slider_right.png";
import bannar1 from "../../../assets/Images/bannar/Disney-princesses_1.jpg";
import bannar2 from "../../../assets/Images/bannar/Disney-princesses_2.webp";
import bannar3 from "../../../assets/Images/bannar/Disney-princesses_3.jpg";
import bannar4 from "../../../assets/Images/bannar/Disney-princesses_4.jpg";
import bannar5 from "../../../assets/Images/bannar/Disney-princesses_5.jpg";
const HeroSection = () => {
    return (
		<div className='carousel w-full'>
	
			<div
				id='slide1'
				className='carousel-item relative w-full h-[40%]'
			>
				<img
					src={bannar1}
					className='w-full hover:scale-105 duration-300 h-[600px] object-cover'
                />
                
				<div className='absolute flex justify-between transform -translate-y-1/2 left-0 right-0 top-1/2'>
					<a
						href='#slide4'
						className=''
					>
						<img
							src={slider_left}
							alt=''
						/>
					</a>
					<a href='#slide2'>
						<img
							src={slider_right}
							alt=''
						/>
					</a>
				</div>
			</div>
			<div
				id='slide2'
				className='carousel-item relative w-full h-[40%]'
			>
				<img
					src={bannar5}
					className='w-full hover:scale-105 duration-300 h-[600px] object-cover'
                />
                
				<div className='absolute flex justify-between transform -translate-y-1/2 left-0 right-0 top-1/2'>
					<a
						href='#slide1'
						className=''
					>
						<img
							src={slider_left}
							alt=''
						/>
					</a>
					<a href='#slide3'>
						<img
							src={slider_right}
							alt=''
						/>
					</a>
				</div>
			</div>
			<div
				id='slide3'
				className='carousel-item relative w-full h-[40%]'
			>
				<img
					src={bannar3}
					className='w-full hover:scale-105 duration-300 h-[600px] object-cover'
                />
                
				<div className='absolute flex justify-between transform -translate-y-1/2 left-0 right-0 top-1/2'>
					<a
						href='#slide2'
						className=''
					>
						<img
							src={slider_left}
							alt=''
						/>
					</a>
					<a href='#slide4'>
						<img
							src={slider_right}
							alt=''
						/>
					</a>
				</div>
			</div>
			<div
				id='slide4'
				className='carousel-item relative w-full h-[40%]'
			>
				<img
					src={bannar4}
					className='w-full hover:scale-105 duration-300 h-[600px] object-cover'
                />
                
				<div className='absolute flex justify-between transform -translate-y-1/2 left-0 right-0 top-1/2'>
					<a
						href='#slide3'
						className=''
					>
						<img
							src={slider_left}
							alt=''
						/>
					</a>
					<a href='#slide1'>
						<img
							src={slider_right}
							alt=''
						/>
					</a>
				</div>
			</div>
			
		</div>
	);
};

export default HeroSection;