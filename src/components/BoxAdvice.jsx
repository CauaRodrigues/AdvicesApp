import React from "react";
import DividerDesktop from "../assets/pattern-divider-desktop.svg";
import "../styles/BoxAdvice.css";

const BoxAdvice = () => {
	let id = 117;
	return (
		<div className="box_advice">
			<span className="advice_number">advice #{id}</span>

			<span className="advice">
				"It is easy to sit up and take notice, what's difficult is getting up
				and taking action."
			</span>

			<img className="divider_box" src={DividerDesktop} alt="Divider" />
		</div>
	);
};

export default BoxAdvice;
