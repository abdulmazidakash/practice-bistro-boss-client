import React from 'react';
import Cover from '../../shared/Cover/Cover';
import MenuItem from '../../shared/MenuItem/MenuItem';
import { Link } from 'react-router-dom';

const MenuCategory = ({items, title, img}) => {
	return (
		<div>
			{title && <Cover img={img} title={title}></Cover>}
			<div className='grid md:grid-cols-2 gap-10 my-16'>
				{
					items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
				}
			</div>
			<Link to={`/order/${title}`}>	<button className="btn btn-info text-center flex justify-center items-center mx-auto my-8 ">Order Now</button></Link>
		</div>
	);
};

export default MenuCategory;