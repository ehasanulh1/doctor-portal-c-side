import React from "react";
import icon from "../../../assets/icons/quote.svg";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import TestimonialCards from "./TestimonialCards";

const Testimonial = () => {
	const testimonialData = [
		{
			id: 1,
			author: "Winson Herry",
			area: "California",
			img: people1,
			details:
				"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
		},
		{
			id: 2,
			author: "Susan Mara",
			area: "Virginia",
			img: people2,
			details:
				"I desperately needed dentures and I am on MassHealth. A cloud hangs over the people who are on MassHealth and the providers of their services.",
		},
		{
			id: 3,
			author: "Aliyah Jordan",
			area: "Washington",
			img: people3,
			details:
				"Excellent doctor!!!Very thorough and caring. I'm terribly afraid of the dentist and she's very sensitive to that and goes the extra mile to make you feel comfortable. Love her!",
		},
	];
	return (
		<section className="mt-28 lg:mx-12">
			<div className="flex flex-wrap-reverse justify-between items-center mb-20">
				<div>
					<h3 className="text-secondary font-bold text-xl">Testimonial</h3>
					<h2 className="text-4xl">What Our Patients Says</h2>
				</div>
				<div>
					<img className="w-32 mb-10 md:w-48 md:mb-0" src={icon} alt=""></img>
				</div>
			</div>
			<div className="grid gap-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
				{testimonialData.map((testimonial) => (
					<TestimonialCards
						key={testimonial.id}
						testimonial={testimonial}
					></TestimonialCards>
				))}
			</div>
		</section>
	);
};

export default Testimonial;
