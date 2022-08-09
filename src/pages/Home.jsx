import React, { useState } from "react";
import BoxAdvice from "../components/BoxAdvice";
import "../styles/Home.css";
import IconDice from "../assets/icon-dice.svg";
import axios from "axios";

const Home = () => {
	let [id, setId] = useState(0);
	let [advice, setAdvice] = useState("Click the button below...");

	const generateAdvice = () => {
		axios
			.get("https://api.adviceslip.com/advice")
			.then(({ data: { slip } }) => {
				setId(slip.id);
				setAdvice(slip.advice);
			});
	};

	return (
		<main>
			<div className="container_boxAdvice">
				<div className="row-box">
					<BoxAdvice numberAdvice={id} text={advice} />
				</div>

				<div className="row-button">
					<span
						className="circle_button"
						onClick={generateAdvice}
						title="Generate Advice"
					>
						<img src={IconDice} alt="Button Advice" />
					</span>
				</div>
			</div>

			<footer>
				<span>
					Developed by{" "}
					<a
						href="https://github.com/CauaRodrigues"
						target="_blank"
						rel="noreferrer"
					>
						Cauã Rodrigues
					</a>
				</span>
			</footer>
		</main>
	);
};

export default Home;
