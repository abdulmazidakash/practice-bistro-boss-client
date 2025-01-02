import React from 'react';

const MenuItem = ({item}) => {

	const {image, name, price, recipe, description} = item;
	return (
		<div className='flex gap-4'>
			<img className='w-[120px] rounded-b-full rounded-tr-full' src={image} alt="" />
			<div>
				<h3 className='uppercase'>{name}-------</h3>
				<p>{recipe}</p>
			</div>
			<p className='text-yellow-600'>{price}</p>
		</div>
	);
};

export default MenuItem;