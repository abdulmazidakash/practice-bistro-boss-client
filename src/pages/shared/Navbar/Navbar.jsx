import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaShoppingCart } from 'react-icons/fa';
import useCart from '../../../hooks/useCart';

const Navbar = () => {

	const {user, logout} = useContext(AuthContext);
	const [cart] = useCart();

	const handleLogout = ()=>{
		logout()
			.then(()=> { })
			.catch(err => console.log(err))
	}

	const navOptions = 
			<>
				<li className='font-semibold btn btn-sm btn-info'><Link to='/menu'><button>Our Menu</button></Link></li>
				
				<li className='font-semibold btn btn-sm btn-info'><Link to={'/order/salad'}><button>Order</button></Link></li>
				<li className='font-semibold btn btn-sm btn-info'><Link to={'/secret'}><button>Secret</button></Link></li>
				<li ><Link to={'/dashboard/cart'} className="btn">
					<FaShoppingCart/>
					<div className="badge  badge-secondary">+{cart.length}</div>
					</Link></li>
				
				{ user? 
				<> <button onClick={handleLogout} className="btn btn-sm btn-info">Logout</button></> : 
				<><li className='font-semibold btn btn-sm btn-info'><Link to={'/login'}><button>Login</button></Link></li></>
				}
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
							className="menu menu-sm gap-2 dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
						{navOptions}
						</ul>
						</div>
						<Link to={'/'}><button className="btn btn-ghost text-xl">Bistro Boss</button></Link>
					</div>
					<div className="navbar-center hidden lg:flex gap-2">
						<ul className="menu menu-horizontal gap-2 px-1">
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