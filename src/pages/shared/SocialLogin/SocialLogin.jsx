import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { FaGoogle } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import useAxiosPublic from '../../../hooks/useAxiosPublic';

const SocialLogin = () => {

	const axiosPublic = useAxiosPublic();
	const {googleSignIn} = useAuth();
	const navigate = useNavigate();

	const handleGoogleLogin = () =>{
		googleSignIn()
			.then(res =>{
				console.log(res.user);
				const userInfo = {
					name: res?.user?.displayName,
					email: res?.user?.email,
				}

				axiosPublic.post('/users', userInfo)
					.then(res =>{
						console.log(res.data);
					})
				navigate('/')
			})
			.catch(err => console.log(err))
	}
	return (
		<div className='p-8'>
			<div className="divider"></div>
			<div>
				<button onClick={handleGoogleLogin} className='btn btn-neutral'>
					<FaGoogle className='mr-2' /> Google
				</button>
			</div>
		</div>
	);
};

export default SocialLogin;