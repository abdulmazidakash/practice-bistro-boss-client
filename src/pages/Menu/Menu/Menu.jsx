import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../shared/Cover/Cover';
import coverImg from '../../../assets/menu/banner3.jpg';
import useMenu from '../../../hooks/useMenu';

import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import offeredImg from '../../../assets/menu/banner3.jpg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';
import MenuCategory from '../MenuCategory/MenuCategory';
import SectionTitle from '../../../components/SectionTitle';

const Menu = () => {

	const [menu] = useMenu();
	const dessert = menu.filter(item => item.category === 'dessert');
	const soup = menu.filter(item => item.category === 'soup');
	const salad = menu.filter(item => item.category === 'salad');
	const pizza = menu.filter(item => item.category === 'pizza');
	const offered = menu.filter(item => item.category === 'offered');

	return (
		<div>
			<Helmet>
				<title>Bistro Boss | Our Menu</title>
			</Helmet>
			{/* our menu  */}
			<Cover title={'Our Menu'} img={coverImg}></Cover>

			<SectionTitle subHeading={"Don't miss"} heading={"Today's offer"}></SectionTitle>
			{/* offered menu  */}
			<MenuCategory items={offered} title={'Offered Menu'} img={offeredImg}></MenuCategory>
			<MenuCategory items={dessert} title={'Dessert'} img={dessertImg}></MenuCategory>
			<MenuCategory items={pizza} title={'Pizza'} img={pizzaImg}></MenuCategory>
			<MenuCategory items={salad} title={'Salad'} img={saladImg}></MenuCategory>
			<MenuCategory items={soup} title={'Soup'} img={soupImg}></MenuCategory>
		</div>
	);
};

export default Menu;