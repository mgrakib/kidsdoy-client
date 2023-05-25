/** @format */

import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/Images/logo/logo-1.png";
import { FaBars } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContextAPI } from "../../../AuthProvider/AuthProvider";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const NavBar = () => {
	const [showNav, setShowNav] = useState(true);
	const { user, handelLogOut } = useContext(AuthContextAPI);
	

	const handelSingOut = () => {
			handelLogOut()
				.then(() => {
					// Sign-out successful.
				})
				.catch(error => {
					// An error happened.
				});
	}
	return (
		<div data-aos='fade-up'>
			<div className='bg-[#E94A4A] page-container flex items-center justify-between relative h-[60px]'>
				<Link to={"/"}>
					<div className='w-[140px]'>
						<img
							src={logo}
							alt=''
						/>
					</div>
				</Link>

				{/* nav for dextop  */}
				<nav className='hidden md:block'>
					<ul className='flex items-center gap-1'>
						<NavLink
							to={"/"}
							className={({ isActive }) =>
								isActive ? "active" : "default"
							}
						>
							<li className='py-4 px-6'>Home</li>
						</NavLink>
						<NavLink
							to={"/show-all-toy"}
							className={({ isActive }) =>
								isActive ? "active" : "default"
							}
						>
							<li className='py-4 px-6'>All Toys</li>
						</NavLink>
						{user ? (
							<NavLink
								to={"/my-toys"}
								className={({ isActive }) =>
									isActive ? "active" : "default"
								}
							>
								<li className='py-4 px-6'>My Toys</li>
							</NavLink>
						) : (
							""
						)}

						{user ? (
							<NavLink
								to={"/add-toy"}
								className={({ isActive }) =>
									isActive ? "active" : "default"
								}
							>
								<li className='py-4 px-6'>Add A Toy</li>
							</NavLink>
						) : (
							""
						)}
						<NavLink
							className={({ isActive }) =>
								isActive ? "active" : "default"
							}
							to={"/blog"}
						>
							<li className='py-4 px-6'>Blogs</li>
						</NavLink>
						{!user ? (
							<NavLink
								to={"/login"}
								className={({ isActive }) =>
									isActive ? "active" : "default"
								}
							>
								<li className='py-4 px-6'>Login</li>
							</NavLink>
						) : (
							<button
								onClick={handelSingOut}
								className='hover:bg-[#D18F00] font-bold text-white'
							>
								<li className='py-4 px-6'>Log Out</li>
							</button>
						)}

						{user ? (
							<div className='w-[50px] h-[50px] rounded-full overflow-hidden ml-5'>
								<img
									title={user?.displayName}
									src={user.photoURL}
									alt=''
								/>
							</div>
						) : (
							""
						)}
					</ul>
				</nav>

				{/* fore mobele  */}
				{/* hambar  */}
				<div className='text-white text-2xl md:hidden'>
					<FaBars
						onClick={() => {
							setShowNav(!showNav);
						}}
					/>
				</div>

				{/* nav for mobile  */}
				<div
					className={`absolute top-[60px] ${
						showNav ? "-translate-x-[450px]" : "-translate-x-[12px]"
					} md:-translate-x-96 duration-300 bg-slate-500 w-[300px]   pb-4  overflow-hidden z-50`}
				>
					<div>
						<ul className=''>
							<NavLink
								to={"/"}
								className=' '
							>
								<li className='mobile-nav'>Home</li>
							</NavLink>
							<NavLink>
								<li className='mobile-nav'>All Toys</li>
							</NavLink>
							{user ? (
								<NavLink className={"bg-yellow-400"}>
									<li className='mobile-nav'>My Toys</li>
								</NavLink>
							) : (
								""
							)}
							{user ? (
								<NavLink className={"bg-yellow-400"}>
									<li className='mobile-nav'>Add A Toy</li>
								</NavLink>
							) : (
								""
							)}
							<NavLink
								to={"/blog"}
								className={"bg-yellow-400"}
							>
								<li className='mobile-nav'>Blogs</li>
							</NavLink>
							{user ? (
								<button
									onClick={handelSingOut}
									className='hover:bg-[#D18F00] font-bold text-white'
								>
									<li className='py-4 px-6'>Log Out</li>
								</button>
							) : (
								<NavLink
									to={"/login"}
									className={({ isActive }) =>
										isActive ? "active" : "default"
									}
								>
									<li className='py-4 px-6'>Login</li>
								</NavLink>
							)}

							{user ? (
								<div className='w-[60px] h-[60px] rounded-full overflow-hidden ml-5 mt-4'>
									<img
										title={user?.displayName}
										src={user.photoURL}
										alt=''
									/>
								</div>
							) : (
								""
							)}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
