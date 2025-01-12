import React from 'react';
import useAuth from '../hooks/useAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import useAxiosSecure from '../hooks/useAxiosSecure';
import useCart from '../hooks/useCart';

const FoodCard = ({item}) => {

	const {image, name, price, recipe, description, _id} = item;
	
	const {user} = useAuth();
	const location = useLocation();
	const navigate = useNavigate();
	const axiosSecure = useAxiosSecure();
	const [, refetch] = useCart()
	
	

	const handleAddToCart = ()=>{
		// console.log(food);

		if(user &&  user.email){
			//todo: send cart item to the database
			// console.log(user.email, food);

			const cartItem = {
				menuId: _id,
				email: user.email,
				name, 
				image,
				price
			}

			axiosSecure.post('/carts', cartItem)
				.then(res =>{
					console.log(res.data);
					if(res.data.insertedId){
						Swal.fire({
							position: "top-end",
							icon: "success",
							title: `${name} added to the cart`,
							showConfirmButton: false,
							timer: 1500
						  });
						  refetch()
					}
				})
				.catch(err =>{
					console.log(err.message);

				})
		}
		else{
			Swal.fire({
				title: "You are not logged in?",
				text: "please login to add to the cart!",
				icon: "warning",
				showCancelButton: true,
				confirmButtonColor: "#3085d6",
				cancelButtonColor: "#d33",
				confirmButtonText: "Yes, login!"
			  }).then((result) => {
				if (result.isConfirmed) {
				//   Swal.fire({
				// 	title: "Deleted!",
				// 	text: "Your file has been deleted.",
				// 	icon: "success"
				//   });

				//send the user to the login page
				navigate('/login', {state: {from: location}})
				}
			  });
		}
	}
	return (
		<div>
			<div className="card card-compact bg-base-100 w-96 shadow-xl">
				<figure>
					<img
					src={image}
					alt="Shoes" />
				</figure>
				<p className='absolute right-0 top-0 bg-slate-900 mr-4 mt-4 text-white p-2'>${price}</p>
				<div className="card-body text-center">
					<h2 className="card-title text-center justify-center">{name}</h2>
					<p>{recipe}</p>
					<div className="card-actions justify-end">
					<button onClick={handleAddToCart} className="btn btn-info text-center flex justify-center items-center mx-auto">Add To Cart</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FoodCard;