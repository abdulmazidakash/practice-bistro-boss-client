import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { FaGoogle } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {

	const {googleSignIn} = useAuth();
	const navigate = useNavigate();

	const handleGoogleLogin = () =>{
		googleSignIn()
			.then(res =>{
				console.log(res.user);
				navigate('/')
			})
			.catch(err => console.log(err))
	}
	return (
		<div className='btn btn-info flex'>
			<button onClick={handleGoogleLogin} ><FaGoogle/> Google</button>
		</div>
	);
};

export default SocialLogin;