import React, { useEffect, useState } from 'react';
import RelatedSingleProduct from './RelatedSingleProduct';

const RelatedProduct = () => {
	const [prominentProduct, setProminentProduct] = useState([]);
	const [relatedProducts, setRelatedProducts] = useState([]);
	const [qualityProducts, setQualityProducts] = useState([]);

	
	// prominentProduct
	useEffect(() => {
		fetch(
			`https://eleven-assignment-server.vercel.app/related?categroy=PROMINENT PRODUCT`
		)
			.then(res => res.json())
			.then(data => setProminentProduct(data));
	}, []);

	// relatedProducts
	useEffect(() => {
		fetch(
			`https://eleven-assignment-server.vercel.app/related?categroy=RELATED PRODUCTS`
		)
			.then(res => res.json())
			.then(data => setRelatedProducts(data));
	}, []);

	// qualityProducts
	useEffect(() => {
		fetch(
			`https://eleven-assignment-server.vercel.app/related?categroy=QUALITY PRODUCTS`
		)
			.then(res => res.json())
			.then(data => setQualityProducts(data));
	}, []);
	return (
		<div className='page-container py-5 md:py-10'>
			<div className='grid md:grid-cols-3 gap-10'>
				{/* PROMINENT PRODUCT */}
				<div>
					<h1 className='px-3 py-[10px] bg-[#E94A4A] text-white font-bold'>
						PROMINENT PRODUCT
					</h1>
					<div className='mt-5'>
						{prominentProduct.map(product => (
							<RelatedSingleProduct
								key={product._id}
								product={product}
							/>
						))}
					</div>
				</div>

				{/* RELATED PRODUCTS */}
				<div>
					<h1 className='px-3 py-[10px] bg-[#E94A4A] text-white font-bold'>
						RELATED PRODUCTS
					</h1>
					<div className='mt-5'>
						{relatedProducts.map(product => (
							<RelatedSingleProduct
								key={product._id}
								product={product}
							/>
						))}
					</div>
				</div>
				{/* QUALITY PRODUCTS */}
				<div>
					<h1 className='px-3 py-[10px] bg-[#E94A4A] text-white font-bold'>
						QUALITY PRODUCTS
					</h1>
					<div className='mt-5'>
						{qualityProducts.map(product => (
							<RelatedSingleProduct
								key={product._id}
								product={product}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default RelatedProduct;