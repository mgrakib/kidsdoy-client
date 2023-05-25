import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SingleToy from './SingleToy';

const AllToy = () => {
    const [allToy, setAllToy] = useState([]);
    const [activeLink, setActiveLink] = useState("Frozen Dolls");

    const handelChangeActiveLink = title => {
        setActiveLink(title);
    }

    useEffect(() => {
		fetch(
			`https://eleven-assignment-server.vercel.app/toys?categroy=${activeLink}`
		)
			.then(res => res.json())
			.then(data => {
				setAllToy(data);
			});
	}, [activeLink]);
    
	
    return (
		<div className='page-container py-5 md:py-10'>
			<div className='flex items-center justify-between'>
				<h1 className='border-l-8 border-[color:var(--main-colro)] bg-[color:var(--primary-color)] text-3xl font-bold px-3'>
					Shop by category
				</h1>

				{/* tab section  */}
				<div className='flex flex-col md:flex-row gap-2'>
					<button
						onClick={() => handelChangeActiveLink("Frozen Dolls")}
						className={`${
							activeLink == "Frozen Dolls"
								? "active-filter-tab"
								: ""
						} filter-tab`}
					>
						Frozen Dolls
					</button>
					<button
						onClick={() => handelChangeActiveLink("Disney Princes")}
						className={`${
							activeLink == "Disney Princes"
								? "active-filter-tab"
								: ""
						} filter-tab`}
					>
						Disney Princes
					</button>
					<button
						onClick={() =>
							handelChangeActiveLink("Animation Characters")
						}
						className={`${
							activeLink == "Animation Characters"
								? "active-filter-tab"
								: ""
						} filter-tab`}
					>
						Animation Characters
					</button>
				</div>
			</div>
			<div className='grid md:grid-cols-4 md:gap-10 gap-y-5 mt-5'>
				{allToy.map(toy => (
					<SingleToy
						key={toy._id}
						toy={toy}
					/>
				))}
			</div>
		</div>
	);
};

export default AllToy;