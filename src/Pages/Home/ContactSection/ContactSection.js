import React from "react";
import bgImage from "../../../assets/images/appointment.png";

const ContactSection = () => {
	return (
		<section
			className="mt-36"
			style={{
				background: `url(${bgImage})`,
			}}
		>
			<div className="flex items-center justify-center h-[600px]">
				<div className="p-5">
					<div className="mb-10 text-center ">
						<h3 className="text-secondary font-bold text-xl">Contact Us</h3>
						<h2 className="text-4xl font-regular text-white mt-2">Stay connected with us</h2>
					</div>
					<form className="flex flex-col">
						<input
							type="text"
							placeholder="Email Address"
							className="input lg:min-w-[450px] mb-5"
						/>
						<input type="text" placeholder="Subject" className="input mb-5" />
						<textarea
							className="input mb-9 h-32"
							placeholder="Your message"
						></textarea>
						<div className="flex justify-center">
							<button className="btn btn-primary">Submit</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};

export default ContactSection;
