/** @format */

import React from "react";
import gallary_1 from "../../../assets/Images/gallary/gallary_1.jpeg";
import gallary_2 from "../../../assets/Images/gallary/gallary_2.jpeg";
import gallary_3 from "../../../assets/Images/gallary/gallary_3.jpeg";
import { FaInstagram } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Gallery = () => {
	return (
		<div
			data-aos='fade-up'
			data-aos-anchor-placement='top-bottom'
		>
			<div className='page-container my-5 md:my-10'>
				<h3 className='text-xl text-center'>
					Shop Products from the Little Mermaid
				</h3>
				<p className='text-center'>
					<small>Inspired by the New Live-Action Film</small>
				</p>
				<div className='grid md:grid-cols-4 md:gap-10 gap-y-5  mt-5 '>
					<div className='overflow-hidden relative cursor-pointer gallary-div'>
						<div className='opacity-0 absolute w-full h-full bg-[#00000076] overlay-div flex items-center justify-center '>
							<button className=''>
								<FaInstagram className='text-3xl text-white' />{" "}
							</button>
						</div>
						<img
							src={gallary_1}
							alt=''
							className='gallary-img duration-300  w-[100%]'
						/>
					</div>

					<div className='overflow-hidden relative cursor-pointer gallary-div'>
						<div className='opacity-0 absolute w-full h-full bg-[#00000076] overlay-div flex items-center justify-center '>
							<button className=''>
								<FaInstagram className='text-3xl text-white' />{" "}
							</button>
						</div>
						<img
							src={gallary_2}
							alt=''
							className='gallary-img duration-300  w-[100%]'
						/>
					</div>

					<div className='overflow-hidden relative cursor-pointer gallary-div'>
						<div className='opacity-0 absolute w-full h-full bg-[#00000076] overlay-div flex items-center justify-center '>
							<button className=''>
								<FaInstagram className='text-3xl text-white' />{" "}
							</button>
						</div>
						<img
							src={gallary_3}
							alt=''
							className='gallary-img duration-300  w-[100%]'
						/>
					</div>

					<div className='overflow-hidden relative cursor-pointer gallary-div'>
						<div className='opacity-0 absolute w-full h-full bg-[#00000076] overlay-div flex items-center justify-center '>
							<button className=''>
								<FaInstagram className='text-3xl text-white' />{" "}
							</button>
						</div>
						<img
							src={gallary_1}
							alt=''
							className='gallary-img duration-300  w-[100%]'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Gallery;
