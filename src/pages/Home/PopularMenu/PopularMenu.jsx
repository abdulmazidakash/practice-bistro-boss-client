import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle';
import MenuItem from '../../shared/MenuItem/MenuItem';

const PopularMenu = () => {

	const [menu, setMenu] = useState([]);

	useEffect(()=>{
		fetch('menu.json')
		.then(res => res.json())
		.then(data =>{
			const popularItems = data.filter(item => item.category === 'popular');
			setMenu(popularItems);
		})

	})
	return (
		<div>
			<SectionTitle heading={'Popular Items'} subHeading={'From Our Menu'}></SectionTitle>
			<div className='grid md:grid-cols-2 gap-10 mb-8'>
				{
					menu.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
				}
			</div>
		</div>
	);
};

export default PopularMenu;