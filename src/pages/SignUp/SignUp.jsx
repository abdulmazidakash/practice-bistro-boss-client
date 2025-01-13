
import { useContext } from 'react';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import { AuthContext } from '../../providers/AuthProvider';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import SocialLogin from '../shared/SocialLogin/SocialLogin';
import useAxiosPublic from '../../hooks/useAxiosPublic';

const SignUp = () => {

	const axiosPublic = useAxiosPublic();
	const { register,handleSubmit,reset,formState: { errors }, } = useForm()
	const {createUser, updateUserProfile } = useContext(AuthContext);
	const navigate = useNavigate();

	const onSubmit = (data) => {
		console.log(data);

		createUser(data.email, data.password)
			.then(res =>{
				const user = res.user;
				console.log(user);

				updateUserProfile(data.name, data.photoURL)
					.then(()=>{
						console.log('user profile info updated');
						//create user to the database
						const userInfo = {
							name: data.name,
							email: data.email,
						}
						axiosPublic.post('/users', userInfo)
							.then(res =>{
								console.log(res.data);
								if(res.data.insertedId){
									reset();
									Swal.fire({
										position: "top-end",
										icon: "success",
										title: `user created successfully ${data.name}`,
										showConfirmButton: false,
										timer: 1500
									  });
									  navigate('/')
								}
							})

						
					})
					.catch(error => console.log(error))
			})
	}




	// const handleSignUp = (e) => {
	// 	e.preventDefault();

	// 	const form = e.target;
	// 	const name = form.name.value;
	// 	const email = form.email.value;
	// 	const password = form.password.value;

	// 	console.log({ name, email, password });

	// 	createUser(email, password)
	// 		.then(res =>{
	// 			const user = res.user;
	// 			console.log(user);
	// 		})
	// 		.catch(err =>{
	// 			console.log(err.message);
	// 		})
	// 	};
	return (
		<div className="hero bg-base-200 min-h-screen">
			<div className="hero-content flex-col lg:flex-row-reverse">
				<div className="text-center lg:text-left">
					<h1 className="text-5xl font-bold">Sign Up</h1>
					<p className="py-6">
						Join us today! Sign up to explore exclusive content and features. It's quick and easy.
					</p>
				</div>
				<div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
					<form onSubmit={handleSubmit(onSubmit)} className="card-body">
						<div className="form-control">
							<label className="label">
								<span className="label-text">Name</span>
							</label>
							<div className="flex items-center gap-2">
								<FaUser className="text-gray-500" />
								<input
								{...register('name', {required: true})}
									name="name"
									type="text"
									placeholder="Your Name"
									className="input input-bordered w-full"
						
								/>
								{errors.name && <span className='text-red-800'>Name is required</span>}

							</div>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Photo</span>
							</label>
							<div className="flex items-center gap-2">
								<FaUser className="text-gray-500" />
								<input
								{...register('photo', {required: true})}
								
									type="text"
									placeholder="photo url"
									className="input input-bordered w-full"
						
								/>
								{errors.photo && <span className='text-red-800'>photo is required</span>}

							</div>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Email</span>
							</label>
							<div className="flex items-center gap-2">
								<FaEnvelope className="text-gray-500" />
								<input
								{...register('email', {required: true})}
									name="email"
									type="email"
									placeholder="Your Email"
									className="input input-bordered w-full"
									
								/>
								{errors.email && <span className='text-red-800'>Email is required</span>}
							</div>
						</div>
						<div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"  {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
						<div className="form-control mt-6">
							<input className="btn btn-primary" type="submit" value="Sign Up" />
						</div>
					</form>
					<p>Already have an account <Link className='text-red-600 font-bold' to={'/login'}>please login</Link></p>
				<SocialLogin/>
				</div>
			</div>
		</div>
	);
};

export default SignUp
