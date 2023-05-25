/** @format */

import NavBar from "../Share/NavBar/NavBar";
import Footer from "../Share/Footer/Footer";
import { useForm } from "react-hook-form";
import CreatableSelect from "react-select/creatable";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContextAPI } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../CustomHooks/useTitle/useTitle";
const UpdateToy = () => {
    useTitle('Update Toy')
	const targetToy = useLoaderData();
	const {
		_id,
		name,
		seller,
		seller_email,
		img,
		img2,
		price,
		quantity,
		rating,
		description,
        category

        
    } = targetToy;
    

	const { user } = useContext(AuthContextAPI);
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	
	const onSubmit = data => {
		
		fetch(`https://eleven-assignment-server.vercel.app/update-toy/${_id}`, {
			method: "PATCH",
			headers: { "content-type": "application/json" },
			body: JSON.stringify(data),
		})
			.then(res => res.json())
			.then(data => {
				Swal.fire({
					icon: "success",
					title: "Yeep",
					text: "Successfully Update toy..",
					footer: '<a href="">Why do I have this issue?</a>',
				});
			});
	};

	return (
		<div>
			<NavBar />
			<div className='page-container py-5 md:py-10 bg-white shadow-xl'>
				<h1 className='text-3xl font-bold mb-5'>Update Toy</h1>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className='
                     grid grid-cols-3 gap-6'
				>
					{/* register your input into the hook by invoking the "register" function */}
					<input
						{...register("name", { required: true })}
						placeholder='Toy Name'
						className='add-toy-input '
						defaultValue={name}
					/>


					{/* include validation with required or other standard HTML validation rules */}
					<input
						{...register("seller", { required: true })}
						className='add-toy-input'
						placeholder='Seller Name'
						value={seller}
					/>
					{/* include validation with required or other standard HTML validation rules */}
					<input
						{...register("seller_email", { required: true })}
						className='add-toy-input'
						placeholder='Seller Email'
						value={seller_email}
					/>
					{/* include validation with required or other standard HTML validation rules */}
					<input
						{...register("img", { required: true })}
						className='add-toy-input'
						placeholder='Photo 1'
						defaultValue={img}
					/>
					{/* include validation with required or other standard HTML validation rules */}
					<input
						{...register("img2", { required: true })}
						className='add-toy-input'
						placeholder='Photo 2'
						defaultValue={img2}
					/>
					{/* include validation with required or other standard HTML validation rules */}
					<input
						{...register("price", { required: true })}
						className='add-toy-input'
						placeholder='Price'
						defaultValue={price}
					/>
					{/* include validation with required or other standard HTML validation rules */}
					<input
						{...register("quantity", { required: true })}
						className='add-toy-input'
						placeholder='Quantity'
						defaultValue={quantity}
					/>
					{/* include validation with required or other standard HTML validation rules */}
					<input
						{...register("rating", { required: true })}
						className='add-toy-input'
						placeholder='Rating'
						defaultValue={rating}
					/>
					{/* include validation with required or other standard HTML validation rules */}
					<input
						{...register("description", { required: true })}
						className='add-toy-input'
						placeholder='Description'
						defaultValue={description}
					/>

				
					{/* errors will return when field validation fails  */}
					{errors.exampleRequired && (
						<span>This field is required</span>
					)}

					<input
						type='submit'
						className='bg-[#E94A4A] text-white cursor-pointer py-3 rounded-md'
						value={"Update Toy"}
					/>
				</form>
			</div>
			<Footer />
			<ToastContainer />
		</div>
	);
};

export default UpdateToy;
