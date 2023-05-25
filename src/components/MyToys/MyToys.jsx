/** @format */

import React, { useContext, useEffect, useState } from "react";
import NavBar from "../Share/NavBar/NavBar";
import Footer from "../Share/Footer/Footer";
import { AuthContextAPI } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useTitle from "../../CustomHooks/useTitle/useTitle";

const MyToys = () => {
	useTitle("My Toy")
	const { user } = useContext(AuthContextAPI);
	const [myToys, setMyToys] = useState([]);
	useEffect(() => {
		fetch(`https://eleven-assignment-server.vercel.app/my-toys?email=${user?.email}`)
			.then(res => res.json())
			.then(data => setMyToys(data));
    }, []);
    const [searchText, setSearchText] = useState("");

	
	const handelSearch = e => {
		setSearchText(e.target.value);
		fetch(`https://eleven-assignment-server.vercel.app/toysSearchByName/${searchText}`)
			.then(res => res.json())
			.then(data => setMyToys(data));
	};
	const handelClick = () => {
		fetch(`https://eleven-assignment-server.vercel.app/toysSearchByName/${searchText}`)
			.then(res => res.json())
			.then(data => setMyToys(data));
	};


    const handelDelete = id => {
        Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then(result => {
            if (result.isConfirmed) {
                fetch(`https://eleven-assignment-server.vercel.app/delete-toy/${id}`, { method: 'DELETE' }).then(res => res.json()).then(data => {
                    
                    if (data.deletedCount > 0) {
                        Swal.fire("Deleted!", "Your file has been deleted.", "success");
                        
                        const remainingToy = myToys.filter(toy => toy._id !== id);
                        setMyToys(remainingToy);
					}
                });

				
			}
		});
    }


	const handelSort = e => {
		const value = e.target.value;
		let sort;
		if (value === 'Ascending') {
			sort = 1;
		}
		else if (value === "Descending") {
			sort = -1;
		} 
		fetch(`https://eleven-assignment-server.vercel.app/my-toys-sort/${sort}?email=${user?.email}`)
			.then(res => res.json())
			.then(data => setMyToys(data));
		
	}

	return (
		<div>
			<NavBar />
			<div className='page-container py-5 text-gray-500'>
				<h1 className='text-2xl'>
					Seller Name:{" "}
					<span className='text-3xl font-bold'>
						{user?.displayName}
					</span>
				</h1>
				<h1 className='text-2xl my-3'>
					Seller email:{" "}
					<span className=' font-bold'>{user?.email}</span>
				</h1>

				<div className='py-3 flex '>
					<div>
						<select
							name=''
							id=''
							className='py-2 px-4 border border-gray-400 rounded-md'
							onChange={handelSort}
						>
							<option value=''>Select</option>
							<option value='Ascending'>Ascending</option>
							<option value='Descending'>Descending</option>
						</select>
					</div>

					<div className='flex gap-3 items-center ml-auto'>
						<input
							onChange={handelSearch}
							type='text'
							className='outline-none rounded-md py-1 px-2 border border-gray-400'
							value={searchText}
						/>
						<button
							onClick={handelClick}
							className='bg-[#E94A4A] font-bold text-white  py-1 px-4 rounded-md'
						>
							Search
						</button>
					</div>
				</div>
				<div className=''>
					<div className='overflow-x-auto w-full'>
						<table className='table w-full'>
							{/* head */}
							<thead>
								<tr>
									<th>sl</th>
									<th>Product Name</th>
									<th>Seller</th>
									<th>Price</th>
									<th>Available Quantity</th>
									<th>Action</th>
								</tr>
							</thead>
							<tbody>
								{/* row 1 */}
								{myToys.map((toy, i) => (
									<tr key={toy._id}>
										<th>{i + 1}</th>
										<td>
											<div className='flex items-center space-x-3'>
												<div className='avatar'>
													<div className='mask mask-squircle w-12 h-12'>
														<img
															src={toy.img}
															alt='Avatar Tailwind CSS Component'
														/>
													</div>
												</div>
												<div>
													<div className='font-bold'>
														{toy.name}
													</div>
													<div className='text-sm opacity-50'>
														{toy.category}
													</div>
												</div>
											</div>
										</td>
										<td>
											{toy.seller}
											<br />
											{/* <span className='badge badge-ghost badge-sm'>
											Desktop Support Technician
										</span> */}
										</td>
										<td className='font-bold'>
											${toy.price}
										</td>
										<td>{toy.quantity}pcs</td>
										<th>
											<button
												onClick={() =>
													handelDelete(toy._id)
												}
												className='btn btn-ghost btn-xs bg-red-500 text-white'
											>
												Deleate
											</button>
											<Link to={`/update-toy/${toy._id}`}>
												<button className='btn btn-ghost btn-xs bg-green-500 text-white ml-2'>
													Update
												</button>
											</Link>
										</th>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default MyToys;
