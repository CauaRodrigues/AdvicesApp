import React from "react";
import BoxAdvice from "../components/BoxAdvice";
import "../styles/Home.css";
import IconDice from "../assets/icon-dice.svg";

const Home = () => {
	return (
		<main>
			<div className="container_boxAdvice">
				<div className="row-box">
					<BoxAdvice />
				</div>

				<div className="row-button">
					<div className="circle_button">
						<img src={IconDice} alt="Button Advice" />
					</div>
				</div>
			</div>
		</main>
	);
};

export default Home;
