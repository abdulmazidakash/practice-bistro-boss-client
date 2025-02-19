import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import SocialLogin from '../shared/SocialLogin/SocialLogin';


const Login = () => {

	const {signInUser} = useContext(AuthContext);
	const navigate = useNavigate();
	const location = useLocation();

	const from = location.state?.from?.pathname || "/";

	console.log('state in the location login page', location?.state);

	// const captchaRef = useRef(null);
	const [disabled, setDisabled] = useState(true);

	useEffect(()=>{
		loadCaptchaEnginge(6); 
	}, [])

	const handleLogin = e =>{
		e.preventDefault();

		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;

		console.log(email, password);
		
		signInUser(email, password)
			.then(res =>{
				const user = res.user;
				console.log(user);
				Swal.fire({
					title: "user login successful",
					showClass: {
					  popup: `
						animate__animated
						animate__fadeInUp
						animate__faster
					  `
					},
					hideClass: {
					  popup: `
						animate__animated
						animate__fadeOutDown
						animate__faster
					  `
					}
				  });
				  navigate(from, { replace: true});
			})
			.catch(err =>{
				console.log(err.message);
			})
		
	};

	const handleValidateCaptcha = (e) =>{
			const user_captcha_value = e.target.value;
			console.log(user_captcha_value);
			if(validateCaptcha(user_captcha_value)){
				setDisabled(false);
			}
			else{
				setDisabled(true);
			}
	}
	return (
		<div>
			<div className="hero bg-base-200 min-h-screen">
				<div className="hero-content flex-col lg:flex-row-reverse">
					<div className="text-center lg:text-left">
					<h1 className="text-5xl font-bold">Login now!</h1>
					<p className="py-6">
						Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
						quasi. In deleniti eaque aut repudiandae et a id nisi.
					</p>
					</div>
					<div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
					<form onSubmit={handleLogin} className="card-body">
						<div className="form-control">
						<label className="label">
							<span className="label-text">Email</span>
						</label>
						<input name='email' type="email" placeholder="email" className="input input-bordered" required />
						</div>
						<div className="form-control">
						<label className="label">
							<span className="label-text">Password</span>
						</label>
						<input name='password' type="password" placeholder="password" className="input input-bordered" required />
						
						</div>
						<div className="form-control">
						<label className="label">
						<LoadCanvasTemplate />
						</label>
						<input 
						onBlur={handleValidateCaptcha} 
						disabled={false}  
						name='captcha' type="text" 
						placeholder="type the captcha above" 
						className="input input-bordered" />

						</div>
						<div className="form-control mt-6">
						
						<input className="btn btn-primary" type="submit" value="Submit" />
						</div>
					</form>
					<p>New here <Link className='text-red-600 font-bold' to={'/signUp'}>Sign Up</Link></p>
					<SocialLogin/>
					</div>
				</div>
			</div> 
		</div>
	);
};

export default Login;