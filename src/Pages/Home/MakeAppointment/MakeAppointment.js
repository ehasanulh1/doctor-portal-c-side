import React from "react";
import image from "../../../assets/images/doctor-small.png";
import image2 from "../../../assets/images/appointment.png";
import MainButton from "../../Shared/Button/MainButton";

const MakeAppointment = () => {
	return (
		<section
			className="mt-48"
			style={{
				background: `url(${image2})`,
			}}
		>
			<div className="hero px-5">
				<div className="hero-content flex-col lg:flex-row p-0">
					<img
						src={image}
						alt="treatment"
						className="hidden lg:block lg:w-1/2 -mt-24"
					/>
					<div className="">
						<h4 className="text-xl font-bold text-secondary mb-5">
							Appointment
						</h4>
						<h1 className="text-4xl font-bold text-white">
							Make an appointment Today
						</h1>
						<p className="text-white py-6">
							It is a long established fact that a reader will be distracted by
							the readable content of a page when looking at its layout. The
							point of using Lorem Ipsum that it has a more-or-less normal
							distribution of letters,as opposed to using 'Content here, content
							here', making it look like readable English. Many desktop
							publishing packages and web page
						</p>
						<MainButton>Get Started</MainButton>
					</div>
				</div>
			</div>
		</section>
	);
};

export default MakeAppointment;
