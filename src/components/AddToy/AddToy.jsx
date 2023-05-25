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
import useTitle from "../../CustomHooks/useTitle/useTitle";
const AddToy = () => {
	useTitle("Add Toy")
	const { user } = useContext(AuthContextAPI);
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	const categories = [
		{ value: "", label: "Select" },
		{ value: "Frozen Dolls", label: "Frozen Dolls" },
		{ value: "Disney Princes", label: "Disney Princes" },
		{ value: "Animation Characters", label: "Animation Characters" },
	];

	const typeOf = [
		{ value: "", label: "Select" },
		{ value: "PROMINENT PRODUCT", label: "PROMINENT PRODUCT" },
		{ value: "RELATED PRODUCTS", label: "RELATED PRODUCTS" },
		{ value: "QUALITY PRODUCTS", label: "QUALITY PRODUCTS" },
	];
	const [selectedCategory, setSelectedCategory] = useState(null);
	const [selectedTypeOf, setSelectedTypeOf] = useState(null);
	const onSubmit = data => {
		if (!selectedCategory) {
			return toast("You can't pass empty value");
		}
		if (!selectedTypeOf) {
			return toast("You can't pass empty value ....");
		}

		data.category = selectedCategory.value;
		data.typeof = selectedTypeOf.value;

		fetch("https://eleven-assignment-server.vercel.app/add-toy", {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify(data),
		})
			.then(res => res.json())
			.then(data => {
				Swal.fire({
					icon: "success",
					title: "Yeep",
					text: "Successfully Add toy..",
					footer: '<a href="">Why do I have this issue?</a>',
				});
			});
	};
	return (
		<div>
			<NavBar />
			<div className='page-container py-5 md:py-10 bg-white shadow-xl'>
				<h1 className='text-3xl font-bold mb-5'>Add New Toy</h1>
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
					/>

					{/* include validation with required or other standard HTML validation rules */}
					{/* <input
						{...register("Category", { required: true })}
						className='add-toy-input'
						placeholder='Category'
					/> */}

					<CreatableSelect
						defaultValue={selectedCategory}
						onChange={setSelectedCategory}
						options={categories}
						className=''
					/>

					{/* include validation with required or other standard HTML validation rules */}
					<input
						{...register("seller", { required: true })}
						className='add-toy-input'
						placeholder='Seller Name'
						value={user?.displayName}
					/>
					{/* include validation with required or other standard HTML validation rules */}
					<input
						{...register("seller_email", { required: true })}
						className='add-toy-input'
						placeholder='Seller Email'
						value={user?.email}
					/>
					{/* include validation with required or other standard HTML validation rules */}
					<input
						{...register("img", { required: true })}
						className='add-toy-input'
						placeholder='Photo 1'
					/>
					{/* include validation with required or other standard HTML validation rules */}
					<input
						{...register("img2", { required: true })}
						className='add-toy-input'
						placeholder='Photo 2'
					/>
					{/* include validation with required or other standard HTML validation rules */}
					<input
						{...register("price", { required: true })}
						className='add-toy-input'
						placeholder='Price'
					/>
					{/* include validation with required or other standard HTML validation rules */}
					<input
						{...register("quantity", { required: true })}
						className='add-toy-input'
						placeholder='Quantity'
					/>
					{/* include validation with required or other standard HTML validation rules */}
					<input
						{...register("rating", { required: true })}
						className='add-toy-input'
						placeholder='Rating'
					/>
					{/* include validation with required or other standard HTML validation rules */}
					<input
						{...register("description", { required: true })}
						className='add-toy-input'
						placeholder='Description'
					/>

					<CreatableSelect
						defaultValue={selectedTypeOf}
						onChange={setSelectedTypeOf}
						options={typeOf}
					/>

					{/* errors will return when field validation fails  */}
					{errors.exampleRequired && (
						<span>This field is required</span>
					)}

					<input
						type='submit'
						className='bg-[#E94A4A] text-white cursor-pointer'
						value={"Add to DB"}
					/>
				</form>
			</div>
			<Footer />
			<ToastContainer />
		</div>
	);
};

export default AddToy;
