import chair from "../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";

const AppointmentBanner = ({selectedDate,setSelectedDate}) => {	
	return (
		<header>
			<div className="hero bg-image">
				<div className="hero-content flex-col lg:flex-row-reverse justify-around">
					<img
						src={chair}
						className="rounded-lg hidden lg:block lg:w-1/2 shadow-2xl"
						alt=""
					/>
					<div>
						<div className="card bg-base-100 shadow-xl">
							<DayPicker
								mode="single"
								selected={selectedDate}
								onSelect={setSelectedDate}
							/>
						</div>
						<div className="text-center text-xl text-ascent py-6">
							<p>Selected date: {format(selectedDate, "PP")}</p>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default AppointmentBanner;
