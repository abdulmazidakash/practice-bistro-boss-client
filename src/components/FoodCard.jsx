import React from 'react';

const FoodCard = ({item}) => {
	
	const {image, name, price, recipe, description} = item;

	const handleAddToCart = food =>{
		console.log(food);
	}
	return (
		<div>
			<div className="card card-compact bg-base-100 w-96 shadow-xl">
				<figure>
					<img
					src={image}
					alt="Shoes" />
				</figure>
				<p className='absolute right-0 top-0 bg-slate-900 mr-4 mt-4 text-white p-2'>${price}</p>
				<div className="card-body text-center">
					<h2 className="card-title text-center justify-center">{name}</h2>
					<p>{recipe}</p>
					<div className="card-actions justify-end">
					<button onClick={()=> handleAddToCart(item)} className="btn btn-info text-center flex justify-center items-center mx-auto">Add To Cart</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FoodCard;