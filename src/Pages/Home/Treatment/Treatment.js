import React from "react";
import treatment from "../../../assets/images/treatment.png";
import MainButton from "../../Shared/Button/MainButton";

const Treatment = () => {
	return (
		<div className="hero mt-36">
			<div className="hero-content grid gap-24 grid-cols-1 lg:grid-cols-2">
				<div className="flex md:justify-center lg:justify-end">
					<img src={treatment} alt="treatment" className="lg:max-w-sm rounded-lg" />
				</div>
				<div className="lg:w-[480px]">
					<h1 className="text-5xl font-bold ">
						Exceptional Dental Care, on Your Terms
					</h1>
					<p className="py-6">
						It is a long established fact that a reader will be distracted by
						the readable content of a page when looking at its layout. The point
						of using Lorem Ipsumis that it has a more-or-less normal
						distribution of letters,as opposed to using 'Content here, content
						here', making it look like readable English. Many desktop publishing
						packages and web page
					</p>
					<MainButton>Get Started</MainButton>
				</div>
			</div>
		</div>
	);
};

export default Treatment;
