import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import PopularMenu from '../PopularMenu/PopularMenu';
import Featured from './Featured/Featured';
import Testimonial from './Testimonial/Testimonial';
import { Helmet } from 'react-helmet-async';
import Cover from '../../shared/Cover/Cover';

const Home = () => {
	return (
		<div>
			<Helmet>
				<title>Bistro Boss | Home</title>
			</Helmet>
			<div>
				<Banner/>
			</div>
			<div>
				<Category/>
			</div>
			<div className='my-8'>
				<PopularMenu/>
			</div>
			<div>
				<Cover/>
			</div>
			<div>
				<Featured/>
			</div>
			<div>
				<Testimonial/>
			</div>
		</div>
	);
};

export default Home;