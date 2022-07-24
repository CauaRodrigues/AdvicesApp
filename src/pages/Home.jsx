import React from "react";
import BoxAdvice from "../components/BoxAdvice";
import IconDice from "../assets/icon-dice.svg";
import "../styles/Home.css";

const Home = () => {
	return (
		<main>
			<BoxAdvice />

			<div className="circle_button">
				<img src={IconDice} alt="Button Advice" />
			</div>
		</main>
	);
};

export default Home;
