import React from "react";

const InfoCard = ({ card }) => {
    console.log(card)
    const { name, description, icon, bgClass } = card;
	return (
		<div className={`card card-side py-7 shadow-xl text-white ${bgClass}`}>
			<div className="p-6">
				<img
					src={icon}
					alt="Movie"
				/>
			</div>
			<div className="card-body px-0">
                <h2 className="card-title">{name}</h2>
				<p>{description}</p>
			</div>
		</div>
	);
};

export default InfoCard;
