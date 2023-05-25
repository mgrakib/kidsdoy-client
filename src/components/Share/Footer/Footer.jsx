import React from 'react';
import { Link } from 'react-router-dom';
import googleplaystore from "../../../assets/Images/logo/google_play.jpg";
import appleStore from "../../../assets/Images/logo/apple-app-store-logo.jpg";
import paypal from "../../../assets/Images/logo/payment/paypal.png";
import visa from '../../../assets/Images/logo/payment/visa.png'
const Footer = () => {
    return (
		<>
			<div className='page-container border-t border-gray-300 py-8 grid md:grid-cols-[1fr_1fr_1fr_2fr]'>
				<div className=''>
					<h4 className='font-bold mb-5'>INFORMATION</h4>
					<ul className='flex md:flex-col gap-5'>
						<Link className='footer-link'>
							<li>About Us</li>
						</Link>
						<Link className='footer-link'>
							<li>Contact Us</li>
						</Link>
						<Link className='footer-link'>
							<li>Terms & Conditions</li>
						</Link>
						<Link className='footer-link'>
							<li>Faq</li>
						</Link>
						<Link className='footer-link'>
							<li>Delivery</li>
						</Link>
					</ul>
				</div>
				<div className=''>
					<h4 className='font-bold mb-5'>QUICK LINK</h4>
					<ul className='flex md:flex-col gap-5'>
						<Link className='footer-link'>
							<li>Home</li>
						</Link>
						<Link className='footer-link'>
							<li>Privacy</li>
						</Link>
						<Link className='footer-link'>
							<li>Address</li>
						</Link>
						<Link className='footer-link'>
							<li>History</li>
						</Link>
						<Link className='footer-link'>
							<li>Identity</li>
						</Link>
					</ul>
				</div>
				<div className=''>
					<h4 className='font-bold mb-5'>SERVICE</h4>
					<ul className='flex md:flex-col gap-5'>
						<Link className='footer-link'>
							<li>Search</li>
						</Link>
						<Link className='footer-link'>
							<li>About</li>
						</Link>
						<Link className='footer-link'>
							<li>Contact</li>
						</Link>
						<Link className='footer-link'>
							<li>Blog</li>
						</Link>
						<Link className='footer-link'>
							<li>Stores</li>
						</Link>
					</ul>
				</div>
				<div className=''>
					<h4 className='font-bold mb-5'>GET MOBILE APP</h4>
					<div className='grid grid-cols-2 gap-3'>
						<div className='h-[60px]'>
							<img
								src={googleplaystore}
								alt=''
								className='h-full object-contain'
							/>
						</div>
						<div className=' h-[60px]'>
							<img
								src={appleStore}
								alt=''
								className='h-full object-contain'
							/>
						</div>
					</div>
					<h4 className='font-bold my-5'>PAYMENT</h4>
					<div className='grid grid-cols-5 gap-3'>
						<div className=''>
							<img
								src={paypal}
								alt=''
								className='object-contain h-full'
							/>
						</div>
						<div className=''><img src={visa} alt="" /></div>
						<div className=''>
							<img
								src={paypal}
								alt=''
								className='object-contain h-full'
							/>
						</div>
						<div className=''><img src={visa} alt="" /></div>
						<div className=''>
							<img
								src={paypal}
								alt=''
								className='object-contain h-full'
							/>
						</div>
						<div className=''><img src={visa} alt="" /></div>
						
					</div>
				</div>
			</div>

			<div className='py-5 border-t border-gray-300 page-container'>
				<small className='text-gray-400'>© Copyright 2018 Twin</small>
				<p className='font-bold'>POWERED BY MG Rakib</p>
			</div>
		</>
	);
};

export default Footer;