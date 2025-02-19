import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../pages/shared/Footer/Footer';
import Navbar from '../pages/shared/Navbar/Navbar';

const Main = () => {

	const location = useLocation();
	console.log(location);
	const noHeaderFooter = location.pathname?.includes('login') || location.pathname?.includes('signUp');
	return (
		<div>
			{noHeaderFooter || <Navbar/>}
			<Outlet/>
			{noHeaderFooter || <Footer/>}
		</div>
	);
};

export default Main;