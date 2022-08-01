import React from "react";
import DividerDesktop from "../assets/pattern-divider-desktop.svg";
import "../styles/BoxAdvice.css";

const BoxAdvice = ({ numberAdvice, text }) => {
	return (
		<div className="box_advice">
			<span className="advice_number">advice #{numberAdvice}</span>

			<span className="advice">"{text}"</span>

			<img className="divider_box" src={DividerDesktop} alt="Divider" />
		</div>
	);
};

export default BoxAdvice;
