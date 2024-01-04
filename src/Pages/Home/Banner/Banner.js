import React from "react";
import chair from "../../../assets/images/chair.png";
import bg from "../../../assets/images/landing-bg.png"

const Banner = () => {
	return (
		<div className="hero" style={{width: "1390px", height: "750px", backgroundImage: `url(${bg})`}}>
			<div className="hero-content flex-col lg:flex-row-reverse">
				<img
					src={chair}
                    className="rounded-lg w-1/2 shadow-2xl"
                    alt=""
				/>
				<div>
					<h1 className="text-5xl font-bold">Your New Smile Starts Here!</h1>
					<p className="py-6">
						Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
						excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
						a id nisi.
					</p>
					<button className="btn bg-gradient-to-r from-secondary to-primary text-white uppercase">Get Started</button>
				</div>
			</div>
		</div>
	);
};

export default Banner;
