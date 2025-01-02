import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

	const navOptions = 
					<>
						<li className='font-semibold'><Link to='/menu'><a>Our Menu</a></Link></li>
						
						<li className='font-semibold'><Link to={'/order'}><a>Order</a></Link></li>
					</>
	return (
		<div>
			<div className="navbar max-w-screen-xl mx-auto bg-opacity-30 bg-black z-10 fixed text-white">
					<div className="navbar-start">
						<div className="dropdown">
						<div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
							<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16" />
							</svg>
						</div>
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
						{navOptions}
						</ul>
						</div>
						<Link to={'/'}><a className="btn btn-ghost text-xl">Bistro Boss</a></Link>
					</div>
					<div className="navbar-center hidden lg:flex">
						<ul className="menu menu-horizontal px-1">
						{navOptions}
						</ul>
					</div>
					<div className="navbar-end">
						<a className="btn btn-info">Button</a>
					</div>
					</div>
		</div>
	);
};

export default Navbar;