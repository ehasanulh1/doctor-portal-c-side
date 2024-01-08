import React from "react";

const InfoCard = ({ card }) => {
    const { name, description, icon, bgClass } = card;
	return (
		<div className={`card p-6 mt-8 text-white lg:card-side shadow-xl ${bgClass}`}>
            <figure className="p-4"><img src={icon} alt="Album" /></figure>
            <div className="card-body p-4 justify-center text-center items-center lg:text-left lg:items-start">
                <h2 className="card-title">{name}</h2>
                <p className="grow-0">{description}</p>
            </div>
        </div>
	);
};

export default InfoCard;
