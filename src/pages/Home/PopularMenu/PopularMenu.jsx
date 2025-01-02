import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle';
import MenuItem from '../../shared/MenuItem/MenuItem';
import useMenu from '../../../hooks/useMenu';

const PopularMenu = () => {

	const [menu] = useMenu();
	const popularItems = menu.filter(item => item.category === 'popular');


	// useEffect(()=>{
	// 	fetch('menu.json')
	// 	.then(res => res.json())
	// 	.then(data =>{
	// 		const popularItems = data.filter(item => item.category === 'popular');
	// 		setMenu(popularItems);
	// 	})

	// })
	return (
		<div>
			<SectionTitle heading={'Popular Items'} subHeading={'From Our Menu'}></SectionTitle>
			<div className='grid md:grid-cols-2 gap-10 mb-8'>
				{
					popularItems.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
				}
			</div>
			<button className="btn btn-outline mt-4 border-b-4  mx-auto flex">View Full Menu</button>
		</div>
	);
};

export default PopularMenu;