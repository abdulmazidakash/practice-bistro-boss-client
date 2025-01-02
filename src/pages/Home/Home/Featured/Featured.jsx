import React from 'react';
import SectionTitle from '../../../../components/SectionTitle';
import featuredImg from '../../../../assets/home/featured.jpg'
import	'./Featured.css'

const Featured = () => {
	return (
		<section className='featured-item mt-12 pt-8 my-20 bg-fixed'> 
			<SectionTitle subHeading={'check it out'} heading={'Featured Item'}/>
			<div className='flex items-center justify-center pb-16 pt-12 px-24 gap-8 bg-opacity-30 bg-slate-500 text-white'>
			<div>
				<img src={featuredImg} alt="" />
			</div>
			<div className='md:ml-10'>
				<p>Aug 20, 2024</p>
				<p className='uppercase'>Where can i get some</p>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quisquam accusamus, error maxime, laudantium magni omnis, ducimus repellat id cum officiis dolorem quaerat velit odit architecto laboriosam eaque quos porro temporibus cupiditate tempora hic facere nemo! Quidem, beatae nulla ab iste quia consequatur dolor, illo nisi placeat deleniti ratione libero!</p>
				<button className="btn btn-outline mt-4 border-b-4">Order Now</button>
			</div>
		</div>
		</section>
	);
};

export default Featured;