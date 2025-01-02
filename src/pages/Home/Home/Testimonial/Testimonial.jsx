// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../../components/SectionTitle';

const Testimonial = () => {
	const [reviews, setReviews] = useState([]);
	

	useEffect(()=> {
		fetch('reviews.json')
		.then(res => res.json())
		.then(data => setReviews(data))
	}, [])
	return (
		<div>
			<SectionTitle subHeading={'what our client say'} heading={'Testimonials'}></SectionTitle>
			<div className='text-center mx-auto w-11/12 my-8'>
		<Swiper
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      	>
       {reviews.map(review =>  
	   <SwiperSlide key={review._id}>
		<Rating className='text-center mx-auto'  style={{ maxWidth: 250 }} value={review.rating} />
		<p>{review.details}</p>
		<p className='text-2xl text-orange-700 '>{review.name}</p></SwiperSlide>)}
		
   
      </Swiper>
			
			</div>
		</div>
	);
};

export default Testimonial;