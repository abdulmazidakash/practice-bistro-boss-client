// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../components/SectionTitle';
const Category = () => {
	return (
			<section>
				<div>
					<SectionTitle heading={'Order Now'} subHeading={'11 from 12'}></SectionTitle>
					<Swiper
				slidesPerView={4}
				spaceBetween={30}
				centeredSlides={true}
				pagination={{
				clickable: true,
				}}
				modules={[Pagination]}
				className="mySwiper mb-24"
			>
				<SwiperSlide>
					<img src={slide1} alt="" />
					<p className='text-center text-white -mt-16 text-4xl font-semibold'>Salad</p>
				</SwiperSlide>
				<SwiperSlide>
					<img src={slide2} alt="" />
					<p className='text-center text-white -mt-16 text-4xl font-semibold'>Salad</p>
				</SwiperSlide>
				<SwiperSlide>
					<img src={slide3} alt="" />
					<p className='text-center text-white -mt-16 text-4xl font-semibold'>Salad</p>
				</SwiperSlide>
				<SwiperSlide>
					<img src={slide4} alt="" />
					<p className='text-center text-white -mt-16 text-4xl font-semibold'>Salad</p>
				</SwiperSlide>
				<SwiperSlide>
					<img src={slide5} alt="" />
					<p className='text-center text-white -mt-16 text-4xl font-semibold'>Salad</p>
				</SwiperSlide>

			</Swiper>
			</div>
		</section>
	);
};

export default Category;