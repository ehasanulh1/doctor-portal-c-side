import React from "react";
import MainButton from "../../Shared/Button/MainButton";

const AppointmentOption = ({ appointmentOption }) => {
	console.log(appointmentOption);
	const { name, slots } = appointmentOption;
	return (
		<div>
			<div className="card bg-base-100 shadow-md">
				<div className="card-body items-center text-center">
					<h2 className="card-title text-secondary text-2xl font-normal">{name}</h2>
					<p className="uppercase text-center">{slots.length > 0 ? slots[0] : 'Try another day'}</p>
					<p className="uppercase text-center pb-2">{slots.length} {slots.length > 1 ? 'Spaces' : 'Space'} available</p>
                    <div className="card-actions">
                        <MainButton>Book Appointment</MainButton>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AppointmentOption;
