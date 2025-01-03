import React, { useRef, useState } from 'react';
import FoodCard from '../../../components/FoodCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { FaCircle } from 'react-icons/fa';

const OrderTab = ({ items }) => {
  const swiperRef = useRef(null);
  const [activePage, setActivePage] = useState(0); // State to track active page

  const handleBulletClick = (index) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
      setActivePage(index); // Update active page state
    }
  };

  const handleSlideChange = (swiper) => {
    setActivePage(swiper.activeIndex); // Update active page state when slide changes
  };

  const slides = Array.from({ length: Math.ceil(items.length / 3) }, (_, index) => (
    <SwiperSlide key={index}>
      <div className="grid md:grid-cols-3 gap-10">
        {items.slice(index * 3, index * 3 + 6).map((item) => (
          <FoodCard key={item._id} item={item} />
        ))}
      </div>
    </SwiperSlide>
  ));

  return (
    <div>
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={handleSlideChange} // Update active page on slide change
        className="mySwiper"
      >
        {slides}
      </Swiper>

      {/* Custom Pagination */}
      <div className="flex justify-center gap-4 mt-4 border-t-4 p-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleBulletClick(index)}
            className={`text-lg hover:text-blue-700 btn btn-sm btn-circle btn-outline mb-8 border-t-4 ${
              activePage === index ? 'btn btn-sm btn-circle btn-info' : 'text-orange-500'
            }`}
          >
            <FaCircle />
          </button>
        ))}
      </div>
    </div>
  );
};

export default OrderTab;
