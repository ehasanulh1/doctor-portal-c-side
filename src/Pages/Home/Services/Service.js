import React from "react";

const Service = ({service}) => {
	const { name, description, image } = service;
	console.log(image)
	return (
		<div className="card bg-base-100 shadow-xl">
			<figure className="pt-8">
				<img
					src={image}
					alt="Shoes"
					className=""
				/>
			</figure>
			<div className="card-body items-center text-center px-6">
				<h2 className="card-title">{name}</h2>
				<p>{description}</p>
			</div>
		</div>
	);
};

export default Service;
