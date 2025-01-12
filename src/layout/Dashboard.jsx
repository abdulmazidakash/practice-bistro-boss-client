import React from 'react';
import { FaAd, FaCalendar, FaHome, FaList, FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import useCart from '../hooks/useCart';

const Dashboard = () => {

	const [cart] = useCart();
	return (
		<div className='flex'>
			{/* side bar content  */}
			<div className='w-64 min-h-screen bg-orange-400'>
				<ul className='menu p-4'>
					<li><NavLink to={'/dashboard/userHome'}><FaHome/> User Home</NavLink></li>
					<li><NavLink to={'/dashboard/reservation'}><FaCalendar/> Reservation</NavLink></li>
					<li><NavLink to={'/dashboard/cart'}><FaShoppingCart/> My Cart: ({cart.length}) </NavLink></li>
					<li><NavLink to={'/dashboard/reviews'}><FaUser/> Reviews</NavLink></li>
					<li><NavLink to={'/dashboard/bookings'}><FaList/> My Bookings</NavLink></li>

					<div className="divider"></div>

					<li><NavLink to={'/'}><FaHome/> Home</NavLink></li>
					<li><NavLink to={'/order/salad'}><FaSearch/> Menu</NavLink></li>


				</ul>
			</div>
			
			{/* dashboard content  */}
			<div className='flex-1'>
				<Outlet/>
			</div>
		</div>
	);
};

export default Dashboard;