import React from 'react';
import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUser, FaUsers, FaUtensils } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import useCart from '../hooks/useCart';

const Dashboard = () => {

	const [cart] = useCart();

	//todo: get isAdmin value from the database
	const isAdmin = true;

	return (
		<div className='flex'>
			{/* side bar content  */}
			<div className='w-64 min-h-screen bg-orange-400'>
				<ul className='menu p-4'>
					{ isAdmin ? 
					<>
					<li><NavLink to={'/dashboard/adminHome'}><FaHome/> Admin Home</NavLink></li>
					<li><NavLink to={'/dashboard/addItems'}><FaUtensils/> Add Items</NavLink></li>
					<li><NavLink to={'/dashboard/manageItems'}><FaList/> Manage Items </NavLink></li>
					<li><NavLink to={'/dashboard/bookings'}><FaBook/> My Bookings</NavLink></li>
					<li><NavLink to={'/dashboard/allUsers'}><FaUsers/> All Users</NavLink></li>
					</> 
					: 
					<>
					<li><NavLink to={'/dashboard/userHome'}><FaHome/> User Home</NavLink></li>
					<li><NavLink to={'/dashboard/reservation'}><FaCalendar/> Reservation</NavLink></li>
					<li><NavLink to={'/dashboard/cart'}><FaShoppingCart/> My Cart: ({cart.length}) </NavLink></li>
					<li><NavLink to={'/dashboard/reviews'}><FaUser/> Reviews</NavLink></li>
					<li><NavLink to={'/dashboard/bookings'}><FaList/> My Bookings</NavLink></li>
					</>}

					{/* shared navlinks  */}
					<div className="divider"></div>

					<li><NavLink to={'/'}><FaHome/> Home</NavLink></li>
					<li><NavLink to={'/order/salad'}><FaSearch/> Menu</NavLink></li>
					<li><NavLink to={'/order/contact'}><FaEnvelope/> Contact</NavLink></li>


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