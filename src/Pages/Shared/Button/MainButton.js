import React from "react";

const MainButton = ({ children }) => {
	return (
		<button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white uppercase">
			{children}
		</button>
	);
};

export default MainButton;
