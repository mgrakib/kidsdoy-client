import React, { useEffect, useState } from 'react';
import NavBar from '../Share/NavBar/NavBar';
import Footer from '../Share/Footer/Footer';
import { FaTeamspeak } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useTitle from '../../CustomHooks/useTitle/useTitle';

const ShowAllToy = () => {
	useTitle("Show All Toy")
	const [allToy, setAllToy] = useState([]);
	const [searchText, setSearchText] = useState('');


    useEffect(() => {
        fetch(`https://eleven-assignment-server.vercel.app/all-toys`)
			.then(res => res.json())
			.then(data => setAllToy(data));
    },[])

	const handelSearch = e => {
		setSearchText(e.target.value)
		fetch(`https://eleven-assignment-server.vercel.app/toysSearchByName/${searchText}`)
			.then(res => res.json())
			.then(data => setAllToy(data));
	}
	const handelClick = () => {
		fetch(`https://eleven-assignment-server.vercel.app/toysSearchByName/${searchText}`)
			.then(res => res.json())
			.then(data => setAllToy(data));
	}
    

	const handelSort = e => {
		const value = e.target.value;
		let sort;
		if (value === "Ascending") {
			sort = 1;
		} else if (value === "Descending") {
			sort = -1;
		}
		fetch(`https://eleven-assignment-server.vercel.app/all-toys-sort/${sort}`)
			.then(res => res.json())
			.then(data => setAllToy(data));
	};
    return (
		<div>
			<NavBar />
			<div className='page-container py-5'>
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
							{allToy.map((toy, i) => (
								<tr key={toy.id}>
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
									<td className='font-bold'>${toy.price}</td>
									<td>{toy.quantity}pcs</td>
									<th>
										<Link to={`/toy/${toy._id}`}>
											<button className='btn btn-ghost btn-xs'>
												View Details
											</button>
										</Link>
									</th>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default ShowAllToy;